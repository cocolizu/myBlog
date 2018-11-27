//鼠标移到LOGO上时，出现home图标
function homeChange(){
	var home_img=document.getElementById('home_img');
	var home=document.getElementById('home');
	home_img.style.display='none';	
	home.style.display='block';
}
//鼠标移到LOGO上时，出现狮子图片
function imgChange(){
	var home_img=document.getElementById('home_img');
	var home=document.getElementById('home');
	home.style.display='none';
	home_img.style.display='block';		
}
//控制文章发表日期的显示和隐藏
function getArtDate(a){
	if(a==1){
		var art_date=document.getElementById('articledate');
		art_date.style.display='block';
	}else if(a==2){
		var art_date2=document.getElementById('articledate2');
		art_date2.style.display='block';
	}else if(a==3){
		var art_date3=document.getElementById('articledate3');
		art_date3.style.display='block';
	}else if(a==4){
		var art_date4=document.getElementById('articledate4');
		art_date4.style.display='block';
	}else if(a==5){
		var art_date5=document.getElementById('articledate5');
		art_date5.style.display='block';
	}else if(a==6){
		var art_date6=document.getElementById('articledate6');
		art_date6.style.display='block';
	}else if(a==7){
		var art_date7=document.getElementById('articledate7');
		art_date7.style.display='block';
	}else if(a==8){
		var art_date8=document.getElementById('articledate8');
		art_date8.style.display='block';
	}else{
		var art_date9=document.getElementById('articledate9');
		art_date9.style.display='block';
	}
}
function delArtDate(a){
	if(a==1){
		var art_date=document.getElementById('articledate');
		art_date.style.display='none';
	}else if(a==2){
		var art_date2=document.getElementById('articledate2');
		art_date2.style.display='none';
	}else if(a==3){
		var art_date3=document.getElementById('articledate3');
		art_date3.style.display='none';
	}else if(a==4){
		var art_date4=document.getElementById('articledate4');
		art_date4.style.display='none';
	}else if(a==5){
		var art_date5=document.getElementById('articledate5');
		art_date5.style.display='none';
	}else if(a==6){
		var art_date6=document.getElementById('articledate6');
		art_date6.style.display='none';
	}else if(a==7){
		var art_date7=document.getElementById('articledate7');
		art_date7.style.display='none';
	}else if(a==8){
		var art_date8=document.getElementById('articledate8');
		art_date8.style.display='none';
	}else{
		var art_date9=document.getElementById('articledate9');
		art_date9.style.display='none';
	}
}
//实现头像图层显示和隐藏
function seeFloor(){
	var floor=document.getElementById('floor');
	//floor.style.display='block';
	floor.style.transform='translate(0px,-100px)';
}
function hideFloor(){
	var floor=document.getElementById('floor');
	//floor.style.display='none';
	floor.style.transform='translate(0px,50px)';
}
//实现导航栏active时显示的样式
function navTurn(){
	var navul=document.getElementById('navul');
	var navli=navul.getElementsByTagName('li');
	for(var i=0;i<navli.length;i++){
		//this.index=i;
		navli[i].onclick=function (){	
			for(j=0;j<navli.length;j++){
				navli[j].className='';
			}
			this.className='active';
		};
	}
}
function fn(id){
	var fa=document.getElementById(id);
	fa.style.opacity=1;
}
//点击首页时，显示首页div内容
function backHome(){
	var homepage=document.getElementById('homepage');
	var aboutme=document.getElementById('aboutme');
	var slowlife=document.getElementById('slowlife');
	var msgboard=document.getElementById('msgboard');
	var blackwhite=document.getElementById('blackwhite');
	var proarticle=document.getElementById('proarticle');
	var propanel=document.getElementById('propanel');
	var newarticle=document.getElementById('newarticle');
	var clicksort=document.getElementById('clicksort');
	var readart=document.getElementById('readart');
	var perinfo=document.getElementById('perinfo');
	var asort=document.getElementById('asort');
	var backword=document.getElementById('backword');
	var myshare=document.getElementById('myshare');
	myshare.style.display='none';
	backword.style.display='none';
	perinfo.style.display='block';
	asort.style.display='none';
	propanel.style.display='none';
	proarticle.style.display='block';
	newarticle.style.display='block';
	homepage.style.display='block';
	clicksort.style.display='none';
	aboutme.style.display='none';
	slowlife.style.display='none';
	readart.style.display='none';
	msgboard.style.display='none';
	blackwhite.style.display='block';
	setTimeout(()=>{fn('homepage');},500);
}
//点击关于我时，显示关于我内容
function aboutMe(){
	var aboutme=document.getElementById('aboutme');
	var homepage=document.getElementById('homepage');
	var slowlife=document.getElementById('slowlife');
	var readart=document.getElementById('readart');
	var msgboard=document.getElementById('msgboard');
	var proarticle=document.getElementById('proarticle');
	var newarticle=document.getElementById('newarticle');
	var clicksort=document.getElementById('clicksort');
	var propanel=document.getElementById('propanel');
	var blackwhite=document.getElementById('blackwhite');
	var perinfo=document.getElementById('perinfo');
	var asort=document.getElementById('asort');
	var backword=document.getElementById('backword');
	var myshare=document.getElementById('myshare');	
	myshare.style.display='none';
	backword.style.display='none';
	perinfo.style.display='block';
	asort.style.display='none';
	propanel.style.display='none';
	proarticle.style.display='block';
	newarticle.style.display='block';
	blackwhite.style.display='none';
	readart.style.display='none';
	clicksort.style.display='none';
	aboutme.style.display='block';
	homepage.style.display='none';
	slowlife.style.display='none';
	msgboard.style.display='none';
	setTimeout(()=>{fn('aboutme');},500);
}
//点击留言板时，显示留言板内容
function msgBoard(){
	var aboutme=document.getElementById('aboutme');
	var homepage=document.getElementById('homepage');
	var slowlife=document.getElementById('slowlife');
	var readart=document.getElementById('readart');
	var msgboard=document.getElementById('msgboard');
	var blackwhite=document.getElementById('blackwhite');
	var proarticle=document.getElementById('proarticle');
	var newarticle=document.getElementById('newarticle');
	var propanel=document.getElementById('propanel');
	var clicksort=document.getElementById('clicksort');
	var perinfo=document.getElementById('perinfo');
	var asort=document.getElementById('asort');
	var backword=document.getElementById('backword');
	var myshare=document.getElementById('myshare');
	myshare.style.display='none';
	backword.style.display='block';
	perinfo.style.display='none';
	asort.style.display='none';
	propanel.style.display='none';
	proarticle.style.display='none';
	newarticle.style.display='none';
	blackwhite.style.display='none';
	clicksort.style.display='none';
	readart.style.display='none';
	aboutme.style.display='none';
	homepage.style.display='none';
	slowlife.style.display='none';
	msgboard.style.display='block';
	setTimeout(()=>{fn('msgboard');},500);
}
//点击我的分享时，显示我的分享内容
function myShare(){
	var aboutme=document.getElementById('aboutme');
	var homepage=document.getElementById('homepage');
	var slowlife=document.getElementById('slowlife');
	var readart=document.getElementById('readart');
	var msgboard=document.getElementById('msgboard');
	var blackwhite=document.getElementById('blackwhite');
	var proarticle=document.getElementById('proarticle');
	var newarticle=document.getElementById('newarticle');
	var propanel=document.getElementById('propanel');
	var clicksort=document.getElementById('clicksort');
	var perinfo=document.getElementById('perinfo');
	var asort=document.getElementById('asort');
	var backword=document.getElementById('backword');
	var myshare=document.getElementById('myshare');
	myshare.style.display='block';
	backword.style.display='none';
	perinfo.style.display='block';
	asort.style.display='none';
	propanel.style.display='none';
	proarticle.style.display='block';
	newarticle.style.display='block';
	blackwhite.style.display='none';
	clicksort.style.display='none';
	readart.style.display='none';
	aboutme.style.display='none';
	homepage.style.display='none';
	slowlife.style.display='none';
	msgboard.style.display='none';
	setTimeout(()=>{fn('myshare');},500);
}