const userModel = require("../model/userModel");

var register = (req,res)=>{
	userModel.register({name:req.body.name,password:req.body.password},()=>{
		res.json({
			ret:true,
			data:true
		})
	})
}

var login = (req,res)=>{
	let{name,password}=req.body;
	userModel.findUser({name,password},(data)=>{
		if(data.length>0){
			res.json({
				ret:true,
				data:true
			})
		}else{
			res.json({
				ret:true,
				data:false
			})
		}
	})
}	
module.exports={
	register,
	login
}