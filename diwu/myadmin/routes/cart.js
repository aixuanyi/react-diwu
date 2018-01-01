var express = require('express');
var router = express.Router();
var MySql = require('./../md/MySql.js')
var url = require('url')
/* GET cart page. */
router.get('/', function(req, res, next) {
   MySql.connect(res,(db) =>{
  	console.log("数据库连接成功")
  	MySql.findData(db,'cart',{},{_id:0},(result)=>{
  		res.send(result)
  	})
  })
});
router.get('/updateCar', function(req, res, next) {
	var obj = url.parse(req.url,true).query;
   MySql.connect(res,(db) =>{
  	console.log("数据库连接成功")
  	MySql.findData(db,'cart',{product_id:obj.product_id*1},{_id:0},(result)=>{
  		if(result.length==0){
  			MySql.findOne(db,'product',{product_id:obj.product_id*1},(result)=>{
  				if(result!==0){
  					var insertObj = {
  						product_id:result[0].product_id,
  						good_name:result[0].good_name,
  						product_price:result[0].product_price,
  						big_thumb:result[0].big_thumb,
  						number:obj.number*1
  						
  					}
//					console.log(result)
  					MySql.insert(db,'cart',insertObj,(result)=>{
  						res.send("1")
  					})
  				}
  			})
  		}else{
  			if(obj.number*1 == 0){
  				MySql.deleteOneData(db,'cart',{product_id:obj.product_id*1},(result)=>{
  					res.send('删除成功')
  				})
  			}else{
  				MySql.updateData(db,'cart',{product_id:obj.product_id*1},{number:obj.number*1},(result)=>{
  				res.send('更新成功')
  			})
  			}
  			
  		}
  	})
  })
});

module.exports = router;
