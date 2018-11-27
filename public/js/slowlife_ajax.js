function getNewArt(a){
	var xhr;
	var page=a,num=5;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.onreadystatechange=function (){
		if(xhr.readyState==4 && xhr.status==200){
			var obj=xhr.responseText;
			obj=JSON.parse(obj);
			//console.log(obj);
			var newtitle=document.getElementsByName('newtitle');
			var newimg=document.getElementsByName('newimg');
			var newfont=document.getElementsByName('newfont');
			var newtab=document.getElementsByName('newtab');
			var newauthor=document.getElementsByName('newauthor');
			var newsort=document.getElementsByName('newsort');
			var newdate=document.getElementsByName('newdate');
			var newreadnum=document.getElementsByName('newreadnum');
			var newcommentnum=document.getElementsByName('newcommentnum');
			var slowbody=document.getElementsByName('slowbody');
			var paginate=document.getElementById('paginate');
			var acolor=document.getElementsByName('acolor');
			var paginateLi=paginate.getElementsByTagName('li');
			//清空li样式
			for(var k=0;k<paginateLi.length;k++){
				paginateLi[k].className='';
			}
			for(var k=0;k<acolor.length;k++){
				acolor[k].className='';
			}
			acolor[a].className='yan';
			paginateLi[a].className='paginactive';
			//console.log(arttitle);
			if(obj.length<newtitle.length){
				for(var j=obj.length;j<slowbody.length;j++){
					slowbody[j].style.display='none';
				}
			}
			for(var i in obj){		
				slowbody[i].style.display='block';
				newtitle[i].innerHTML=obj[i].art_title;
				newimg[i].src=obj[i].art_img;
				newfont[i].innerHTML=obj[i].art_desc;
				newauthor[i].innerHTML=obj[i].art_author;
				newsort[i].innerHTML=obj[i].art_sort;
				newdate[i].innerHTML=obj[i].art_date;
				newreadnum[i].innerHTML=obj[i].readnum;
				newcommentnum[i].innerHTML=obj[i].commentnum;	
				if(obj[i].art_author=='李祖锌'){
					newtab[i].innerHTML='原创';
					newtab[i].style.display='block';
				}else{
					newtab[i].style.display='none';
				}
			}
		}
	};
	xhr.open('get','/blog/newarticle?page='+page+'&num='+num,true);
	xhr.send();
}
//点击慢生活时，显示慢生活内容
function slowLife(a){
	var slowlife=document.getElementById('slowlife');
	var aboutme=document.getElementById('aboutme');
	var homepage=document.getElementById('homepage');
	var readart=document.getElementById('readart');
	var msgboard=document.getElementById('msgboard');
	var proarticle=document.getElementById('proarticle');
	var propanel=document.getElementById('propanel');
	var newarticle=document.getElementById('newarticle');
	var clicksort=document.getElementById('clicksort');
	var blackwhite=document.getElementById('blackwhite');
	var perinfo=document.getElementById('perinfo');
	var asort=document.getElementById('asort');
	var backword=document.getElementById('backword');
	var myshare=document.getElementById('myshare');
	myshare.style.display='none';
	backword.style.display='none';
	perinfo.style.display='none';
	asort.style.display='block';
	propanel.style.display='block';
	proarticle.style.display='none';
	newarticle.style.display='none';
	blackwhite.style.display='block';
	clicksort.style.display='block';
	aboutme.style.display='none';
	homepage.style.display='none';
	readart.style.display='none';
	msgboard.style.display='none';
	slowlife.style.display='block';
	getNewArt(a);
	setTimeout(()=>{fn('slowlife');},500);
}
function fn(id){
	var fa=document.getElementById(id);
	fa.style.opacity=1;
}
//实现分页
function paginate(n){
	var paginate=document.getElementById('paginate');
	var paginateLi=paginate.getElementsByTagName('li');
	for(var k=1;k<paginateLi.length-1;k++){
		if(paginateLi[k].className=='paginactive' && n==0){
			if(k==1) return;
			var x=k-1;
		}else if(paginateLi[k].className=='paginactive' && n==1){
			if(k==2) return; //先设置2页
			var x=k+1;
		}		
	}
	getNewArt(x);
}
