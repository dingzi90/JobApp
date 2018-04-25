const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/jobapp';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log("mongo connect success");
});

const models = {
    user:{
        'user':{type:String, 'require':true},//账户
        'pwd':{type:String, 'require':true},//密码
        'type':{'type':String,'require':true},//角色
        'avatar':{'type':String},//头像
        'desc':{'type':String},//个人简介
        'title':{'type':String},//职位名
        'compang':{'type':String},//公司名称
        'money':{'type':String}//薪资
    },
    chat:{

    }
}


for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}