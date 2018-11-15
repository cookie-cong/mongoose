const mongoose = require("../db/conn");
const catModel = mongoose.model("Cat",{name:String},"Cat")

//展现在页面
var getShow = (callback)=>{
	catModel.find().then((data)=>{
		callback(data)
	})
}

//添加
var add = (name,callback)=>{
//添加在此处需要new一个
	new catModel({name:name}).save().then((data)=>{
		callback(data)
	})
}
//删除
var del = (id,callback)=>{
	catModel.remove({_id:id}).then(()=>{
		callback();
	})
}
//开始要跳到修改页面
var modifyAction = (id,callback)=>{
	catModel.find({_id:id}).then((data)=>{
		callback(data);
	})
}
//确认修改
var modifyok = (id,name,callback)=>{
	catModel.update({_id:id},{name:name}).then(()=>{
		callback();
	})
}
//查询
var lookup = (kw,callback)=>{
	catModel.find({name:new RegExp(kw)}).then((data)=>{
		callback(data)
	})
}
//分页
var page = (page,pageSize,callback)=>{
	catModel.find().limit(Number(pageSize)).skip((page-1)*pageSize).then((data)=>{
		callback(data);
	})
}
module.exports={
	getShow:getShow,
	add:add,
	del,
	modifyAction,
	modifyok,
	lookup,
	page
}