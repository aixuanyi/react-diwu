var express = require('express');
var router = express.Router();
var url = require('url')
var multer = require("multer");
var MySql = require('./../md/MySql.js')

var storage = multer.diskStorage({
	destination : (req,file,cb) =>{
		cb(null,'./public/images')
	},
	filename:(req,file,cb)=>{
		cb(null,file.originalname)
	}
})

var update = multer({storage:storage})

router.get('/', function(req, res, next) {
  MySql.connect(res,(db)=>{
  	console.log("database is ok")
  	var obj = url.parse(req.url,true).query;
//	console.log(obj)
  	MySql.findOne(db,'product',{product_id: obj.product_id * 1},(result)=>{
  		res.send(result)
  	})
  })
});


router.get('/goodList', function(req, res, next) {
  MySql.connect(res,(db) =>{
  	console.log("数据库连接成功")
		MySql.findData(db,'product',{},{_id:0,product_id:1,good_name:1,market_price:1,product_price:1,big_thumb:1},(result)=>{
  		res.send(result)
  	})
  	
  	//console.log(obj)
  })
  
});

router.post('/addProduct', update.single('file'),function(req, res, next) {
	var obj = req.body;
	var url = "http://" + req.headers.host + '/images/' + req.file.originalname;
	var data = Object.assign(obj,{'big_thumb':url});
	MySql.connect(res,(db)=>{
		MySql.insert(db,'product',data,(result)=>{
			res.send("1")
		})
		MySql.insertProduct(db,'kind',{"cata_name":obj.cata_name},data,(result)=>{
			console.log("添加成功")
		})
	})
	//console.log(data)
  	
});

module.exports = router;
