const express = require('express');
const app = express();
const fs = require("fs");
const port = 3000;

app.get('/marks', (req, res) => {
    fs.readFile("./data/data.json", "utf-8", (err, data) => {
        if (err) { console.log(err) }
        data=JSON.parse(data);
        let sum=0;
        for (let key in data) { 
            sum=sum+ parseInt(data[key].Marks);    
        } 
        //console.log("Total Marks : ",sum);
        res.send(`Total Marks : ${sum}`);
    })
})

app.get('/age',(req,res)=>{
    fs.readFile("./data/data.json", "utf-8", (err, data) => {
        if (err) { console.log(err) }
        data=JSON.parse(data);
        //console.log("Before Sorted");
        //console.log(data)
            
        data.sort(function(a,b){
            if(a.Age<b.Age){
                return -1
            }
            if(a.Age>b.Age){
                return 1
            }
            return 0
        })
        //console.log("After Sorted");
        //console.log(data)
        res.send(data);
        
    })

})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})