//引入cookie模块
const cookie=require('cookie');
//引入express模块
const express=require('express');
//引入bodyparser模块
const bodyParser=require('body-parser');
//引入路由器
const article=require('./routers/article.js');
const user=require('./routers/user.js');
//创建web服务器
var app=express();
//监听端口
app.listen(3000,()=>{
	console.log('web服务器搭建成功...');
});
//托管静态资源
app.use(express.static('./public'));
//
app.use(bodyParser.urlencoded({
	extended:false
}));
//挂载路由器
app.use('/blog',article);
app.use('/user',user);
