//获取文章具体内容
function getReadArt(aname,n,a,s,l,c){
	var xhr;
	if(aname=='犯错了怎么办？'){
		aname='mistake.txt';
	}else if(aname=='春暖花开-走走停停-发现美'){
		aname='springflower.txt';
	}else if(aname=='灯光下的影子'){
		aname='shadow.txt';
	}else if(aname=='两只蜗牛'){
		aname='turbo.txt';
	}
	artname=aname;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.onreadystatechange=function (){
		if(xhr.readyState==4 && xhr.status==200){
			var artcontent=document.getElementById('artcontent');
			var readtitle=document.getElementById('readtitle');
			var readauthor=document.getElementById('readauthor');
			var readsort=document.getElementById('readsort');
			var readlook=document.getElementById('readlook');
			var readcomment=document.getElementById('readcomment');
			//console.log(xhr.responseText);
			readtitle.innerHTML=n;
			readauthor.innerHTML=a;
			readsort.innerHTML=s;
			readlook.innerHTML=l;
			readcomment.innerHTML=c;
			artcontent.innerHTML=xhr.responseText;
		}
	};
	xhr.open('get','/blog/readarticle?aname='+artname,true);
	xhr.send();
}
//显示文章上下篇
function preOrNext(aname,n,arttitle){
	var arttitle=document.getElementsByName('arttitle');
	var artauthor=document.getElementsByName('artauthor');
	var artsort=document.getElementsByName('artsort');
	var readnum=document.getElementsByName('readnum');
	var commentnum=document.getElementsByName('commentnum');
	var	pre=document.getElementById('pre');
	var	next=document.getElementById('next');
	var	preart=document.getElementById('preart');
	var	nextart=document.getElementById('nextart');
	if(n==0){
		pre.style.display='none';
		next.style.display='block';
		nextart.innerHTML=arttitle[1].innerHTML;
	}else if(n==1){
		pre.style.display='block';
		next.style.display='block';
		preart.innerHTML=arttitle[0].innerHTML;
		nextart.innerHTML=arttitle[2].innerHTML;
	}else if(n==2){
		pre.style.display='block';
		next.style.display='block';
		preart.innerHTML=arttitle[1].innerHTML;
		nextart.innerHTML=arttitle[3].innerHTML;
	}else if(n==3){
		pre.style.display='block';
		next.style.display='none';
		preart.innerHTML=arttitle[2].innerHTML;
	}
	getReadArt(aname,arttitle[n].innerHTML,artauthor[n].innerHTML,artsort[n].innerHTML,readnum[n].innerHTML,commentnum[n].innerHTML);
}
//显示文章具体内容
function readArt(aname,n){
	var readart=document.getElementById('readart');
	var homepage=document.getElementById('homepage');
	var blackwhite=document.getElementById('blackwhite');
	var msgboard=document.getElementById('msgboard');
	var aboutme=document.getElementById('aboutme');
	var slowlife=document.getElementById('slowlife');
	aboutme.style.display='none';
	slowlife.style.display='none';
	blackwhite.style.display='none';
	homepage.style.display='none';
	msgboard.style.display='none';
	readart.style.display='block';
	preOrNext(aname,n);
}
//实现文章上下篇切换
function getPreOrNext(a){
	var arttitle=document.getElementsByName('arttitle');
	var readtitle=document.getElementById('readtitle').innerHTML;
	var homepage=document.getElementById('homepage');
	for(var i in arttitle){
		if(readtitle==arttitle[i].innerHTML){
			homepage.style.display='none';
			var num=i;
			break;
		}
	}
	if(a==0){
		num-=1;
		preOrNext(arttitle[num].innerHTML,num);
	}else{
		num=Number(num)+1;
		preOrNext(arttitle[num].innerHTML,num);
	}
}