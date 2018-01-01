var express = require('express');
var router = express.Router();
var MySql = require('./../md/MySql.js')
var url = require('url')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register',function(req, res, next){
	var obj = url.parse(req.url, true).query;
	console.log(obj)
	
	MySql.connect(res,(db)=>{
		console.log("数据库连接成功");
		MySql.findData(db,"login",{username: obj.username},{},(result) => {
			if(result.length == 0){//没有用户,注册成功
        MySql.insert(db,'login',obj,(result) => {
          console.log(result);
          res.send('1');
          db.close();
        })
      }else{
        res.send('0');
      }
			db.close();
		})
	})

})



router.get('/login',function(req, res, next){
	var obj = url.parse(req.url, true).query;
	console.log(obj)
	
	MySql.connect(res,(db)=>{
		console.log("数据库连接成功");
		MySql.findData(db,"login",obj,{},(result) => {
			if(result.length == 0){//没有用户，登陆失败
        res.send('0');
     }else{
        res.send(result);
      }
			db.close();
		})
	})

})
module.exports = router;
