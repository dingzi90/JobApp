const express = require('express')

//新建APP
const app = express()
app.get('/',function(req,res){
    res.send('<h1>hello word425</h1>')
})

app.get("/data", function(req, res) {
  res.json({name:"woniu",type:"IeT"});
});

app.listen(9093,function(){
    console.log("Node app start at port 9093")
})