var express = require('express');
var router = express.Router();
const controller = require("../controller/controller");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//展现页面
router.get("/list",controller.getList);
//添加
router.get("/add/:name",controller.add);
//删除
router.get("/del/:id",controller.del)
//开始修改
router.get("/modify/:id",controller.modifyAction)
//确认修改
router.get("/modifyok/:id/:name",controller.modifyok)
//查询
router.get("/lookup/:kw",controller.lookup)
//分页
router.get("/pageShow/:page/:pageSize",controller.page)
module.exports = router;
