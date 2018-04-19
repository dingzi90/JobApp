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
/*  User.create({
    user: '照明',
    age:"16"
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})  */
//删除数据
/* User.remove({age:15},function(err,doc){
    console.log(doc)
}) */

//修改数据
/* User.update({'user':'dingzi'},{'$set':{age:19}},function(err,doc) {
    console.log(doc)
}); */
//新建APP
const app = express();
app.get('/',function(req,res){
    res.send('<h1>hello word425</h1>');
});

app.get("/data", function(req, res) {
    User.find({'user':'dingzi'},function(err,doc){//筛选数据
        res.json(doc)
    })
});


app.listen(9093,function(){
    console.log("Node app start at port 9093");
});