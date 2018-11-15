const mongoose = require("../db/conn");
const userModel = mongoose.model("user",{name:String,password:String},"user")

var findUser = (userInfor,callback)=>{
	userModel.find(userInfor).then((data)=>{
		callback(data);
	})
}

var register = (userInfor,callback)=>{
	//注册就是添加
	new userModel(userInfor).save().then(()=>{
		callback()
	})
}
module.exports ={
	findUser,
	register
}