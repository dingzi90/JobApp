const express = require('express');
const mongoose = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017/dingzi';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function() {
    console.log("mongo connect success");
});
//类似于mysql的表，mongo里有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
//新增数据
User.create({
    user: 'dingzi',
    age:"18"
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})
//新建APP
const app = express();
app.get('/',function(req,res){
    res.send('<h1>hello word425</h1>');
});

app.get("/data", function(req, res) {
  res.json({name:"woniu",type:"IeT"});
});


app.listen(9093,function(){
    console.log("Node app start at port 9093");
});