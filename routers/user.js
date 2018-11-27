//引入express模块
const express = require('express');
//引入数据库连接池
var pool = require('../pool.js');
//创建路由器
var router = express.Router();
//往路由器中添加路由
//①登录路由
router.post('/login',(req,res)=>{
	var data=req.body;
	//console.log(data);
	res.cookie('username',data.uname);
	var sql='SELECT * FROM blog_user WHERE uname=? and upwd=?';
	pool.query(sql,[data.uname,data.upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1');
		}else{
			res.send('用户名或密码出错！');	
		}
	});
});
//②判断用户是否已存在
router.get('/checkuser',(req,res)=>{
	var data=req.query;
	//console.log(data);
	var sql='SELECT uname FROM blog_user WHERE uname=?';
	pool.query(sql,[data.uname],(err,result)=>{
		if(err) throw err;	
		if(result.length>0){
			res.send('用户名已被注册！');
		}else{
			res.send('1');
		}
	});
});
//③注册路由
router.post('/register',(req,res)=>{
	var data=req.body;
	//console.log(data);
	var sql2='INSERT INTO blog_user VALUES(?,?)';
	pool.query(sql2,[data.uname,data.upwd],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('注册时遇到错误！');
		}
	});
});
//删除cookie
router.get('/delcookie',(req,res)=>{
	var data=req.query.u;
	res.cookie('username',data);
	res.send('1');
});
//导出路由器
module.exports=router;