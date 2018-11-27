//控制首页图片轮播
var timer=setInterval(()=>{carousel();},4000);
var count=0;
function carousel(){
	var banner=document.getElementById('banner');
	//banner=banner.substr(banner.indexOf("img"));
	var arrImg=['banner.jpg','banner2.jpg','banner3.jpg','banner4.jpg'];
	count++;
	if(count==4){
		count=0;
	}
	var urlImg='url(../img/'+arrImg[count]+')';
	document.getElementById('banner').style.background=urlImg;	

	changeCircle();
	intervalStop();
	intervalStart();
}
function intervalStop(){
	var gt=document.getElementById('gt');
	var lt=document.getElementById('lt');
	gt.style.display='block';
	lt.style.display='block';
	clearInterval(timer);
}
function intervalStart(){
	var gt=document.getElementById('gt');
	var lt=document.getElementById('lt');
	gt.style.display='none';
	lt.style.display='none';
	timer=setInterval(function(){carousel()},4000);;
}
//控制点击时下/上一张显示
function clickImg(a){
	var arrImg=['banner.jpg','banner2.jpg','banner3.jpg','banner4.jpg'];
	if(a==2){
		count--;
		if(count==-1){
			count=3;
		}
	}else{
		count++;
		if(count==4){
			count=0;
		}
	}
	var urlImg='url(../img/'+arrImg[count]+')';
	document.getElementById('banner').style.background=urlImg;	
	changeCircle();	
}
//控制图片切换时小圆圈跟着切换
function changeCircle(){
	var arrLi=document.getElementsByName('arrli');
	for(var i=0;i<arrLi.length;i++){
		arrLi[i].style.color='white';
	}
	arrLi[count].style.color='#E41635';
	
}
//获取cookie
function getCookie(){
	var welres=document.getElementById('welres');
	var welres2=document.getElementById('welres2');
	var wellogin=document.getElementById('wellogin');
	var wellogin2=document.getElementById('wellogin2');
	if(document.cookie!=''){
		var arr=document.cookie.split(';');
		var info=arr[0].split('=');
		if(info[1]!=''){
			wellogin.style.display='none';
			welres2.style.display='block';
			wellogin2.style.display='block';
			welres.style.display='none';
			var arr=document.cookie.split(';');
			var info=arr[0].split('=');
			document.getElementById('wellogin2').innerHTML=info[1];
		}
	}
}
//删除cookie
function delCookie(){
	var msg=confirm('你确定要退出当前用户吗？');
	if(msg){
		var xhr=null;
		var un='';
		if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}else{
			xhr=new ActiveXObject('Microsoft.XMLHTTP');
		}
		xhr.onreadystatechange=function (){
			if(xhr.readyState==4 && xhr.status==200){
				window.location.href='../index.html';
			}
		}
		xhr.open('get','/user/delcookie?u='+un,true);
		xhr.send();
	}else{
		return;
	}
}