function getHomePage(){
	//创建异步对象
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	//设置监听事件
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			var art = xhr.responseText;
			var myArtNum=0;
			var arttitle=document.getElementsByName('arttitle');
			var artimg=document.getElementsByName('artimg');
			var artdesc=document.getElementsByName('artdesc');
			var artauthor=document.getElementsByName('artauthor');
			var artsort=document.getElementsByName('artsort');
			var artdate=document.getElementsByName('artdate');
			var readnum=document.getElementsByName('readnum');
			var commentnum=document.getElementsByName('commentnum');
			var arttab=document.getElementsByName('arttab');
			var myself=document.getElementById('myself');
			art=JSON.parse(art);
			for(var i in art){
				if(i==4) break;
				arttitle[i].innerHTML=art[i].art_title;
				artimg[i].src=art[i].art_img;
				artdesc[i].innerHTML=art[i].art_desc;
				artauthor[i].innerHTML=art[i].art_author;
				artsort[i].innerHTML=art[i].art_sort;
				artdate[i].innerHTML=art[i].art_date;
				readnum[i].innerHTML=art[i].readnum;
				commentnum[i].innerHTML=art[i].commentnum;
				if(art[i].art_author=='李祖锌'){
					arttab[i].innerHTML='原创';
					arttab[i].style.display='block';
					myArtNum++;
				}
			}
			myself.innerHTML=myArtNum;
			//console.log(art);
		}
	};
	//打开链接
	xhr.open('get','/blog/commendarticle',true);
	//发送请求
	xhr.send();
}
