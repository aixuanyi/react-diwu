var express = require('express');
var url = require('url')
var router = express.Router();
var MySql = require('./../md/MySql.js')

router.get('/', function(req, res, next) {
  MySql.connect(res,(db) =>{
  	console.log("数据库连接成功")
  	MySql.findData(db,'kind',{},{_id:0,catid:1,cata_name:1},(result)=>{
  		res.send(result)
  	})
  })
  
});
router.get('/deleteKind', function(req, res, next) {
  MySql.connect(res,(db) =>{
  	console.log("数据库连接成功")
  	var obj = url.parse(req.url,true).query;
  	MySql.deleteManyData(db,'kind',obj,(result)=>{
  		 res.send(result)
  	})
  })
  
});
router.get('/addKind', function(req, res, next) {
  MySql.connect(res,(db) =>{
  	console.log("数据库连接成功")
  	var obj = url.parse(req.url,true).query;
  	obj= JSON.parse(obj.insertobj)
  	MySql.insert(db,'kind',obj,(result)=>{
  		 res.send("1")
  	})
  	//console.log(obj)
  })
  
});
router.get('/updateKind', function(req, res, next) {
  MySql.connect(res,(db) =>{
  	console.log("数据库连接成功")
		var obj = url.parse(req.url,true).query;
		obj= JSON.parse(obj.updateobj)
		var whereobj = url.parse(req.url,true).query.whereobj;
  	MySql.updateData(db,'kind',{"catid" : whereobj},obj,(result)=>{
  		 res.send(result)
  	})
  	//console.log(obj)
  })
  
});
router.get('/list', function(req, res, next) {
  MySql.connect(res,(db) =>{
  	console.log("数据库连接成功")
  	var obj = url.parse(req.url,true).query;
  	MySql.findData(db,'kind',obj,{goods_list:1,catid:1,_id:0},(result)=>{
  		res.send(result)
  	})
  })
  
});


module.exports = router;
