const catModel = require("../model/model");
//展现列表页
var getList = (req,res)=>{
	catModel.getShow((data)=>{
		res.json({
			list:data
		})
	})
}
//添加
var add = (req,res)=>{
	console.log(req.params.name)
	catModel.add(req.params.name,(data)=>{
		res.json({
			list:data
		})
	})
}
//删除
var del = (req,res)=>{
	console.log(req.params.id)
	catModel.del(req.params.id,()=>{
		res.json({
			ret:true,
			data:true
		})
	})
}
//开始列表页跳转到修改页
var modifyAction = (req,res)=>{
	catModel.modifyAction(req.params.id,(data)=>{
		res.json({
			list:data
		})
	})
}
//确认修改
var modifyok = (req,res)=>{
	console.log(req.params.name)
	catModel.modifyok(req.params.id,req.params.name,()=>{
		res.json({
			ret:true,
			data:true
		})
	})
}
//查询
var lookup = (req,res)=>{
	catModel.lookup(req.params.kw,(data)=>{
		res.json({
			list:data
		})
	})
}
//分页
var page = (req,res)=>{
	catModel.getShow((da)=>{
		catModel.page(req.params.page,req.params.pageSize,(data)=>{
				res.json({
					list:data,
					count:Math.ceil(da.length/req.params.pageSize)
				})
		})
	})
	
}
module.exports = {
	getList:getList,
	add:add,
	del,
	modifyAction,
	modifyok,
	lookup,
	page
}