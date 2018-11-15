//连接数据库
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test",(err)=>{
	if(err){
		console.log("连接失败")
	}else{
		console.log("连接成功")
	}
})
module.exports = mongoose;