//引入express模块
const express=require('express');
//引入连接池
const pool=require('../pool.js');
const fs=require('fs');
//创建路由器
var router=express.Router();
//往路由器中添加路由
//①获取首页博客信息
router.get('/bloginfo',(req,res)=>{
	var sql='SELECT * FROM blog_info';
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//②获取首页文章信息
router.get('/commendarticle',(req,res)=>{
	var sql='SELECT * FROM blog_article ORDER BY readnum DESC';
	pool.query(sql,(err,result)=>{
		if (err) throw err;
		res.send(result);
	});
});
//③获取关于我的txt文档
router.get('/aboutme',(req,res)=>{
	var artname=req.query.aname;
	artname=__dirname.slice(0,__dirname.lastIndexOf('\\'))+'\\public\\article\\'+artname;
	//console.log(artname);
	fs.exists(artname,(exists)=>{
		if(!exists){
			res.send('文档无法加载！');
		}else{
			fs.readFile(artname,(err,files)=>{
				if(err) throw err;
				res.send(files.toString());
			});
		}
	});
});
//④获取慢生活的文章信息
router.get('/newarticle',(req,res)=>{
	var page=req.query.page;
	var num=req.query.num;
	var sql='SELECT * FROM blog_article ORDER BY art_date DESC LIMIT ?,?';
	pool.query(sql,[(Number(page)-1)*Number(num),Number(num)],(err,result)=>{
		if (err) throw err;
		res.send(result);
	});
});
//⑤阅读全文
router.get('/readarticle',(req,res)=>{
	var artname=req.query.aname;
	artname=__dirname.slice(0,__dirname.lastIndexOf('\\'))+'\\public\\article\\'+artname;
	//console.log(artname);
	fs.exists(artname,(exists)=>{
		if(!exists){
			res.send('文档无法加载！');
		}else{
			fs.readFile(artname,(err,files)=>{
				if(err) throw err;
				res.send(files.toString());
			});
		}
	});
});
//导出路由
module.exports=router;
