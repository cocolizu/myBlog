function blogInfo(){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.onreadystatechange=function (){
		if(xhr.readyState==4 && xhr.status==200){
			var info=JSON.parse(xhr.responseText);
			var bname=document.getElementById('bname');
			var btitle=document.getElementById('btitle');
			var bimg=document.getElementById('bimg');
			var motto=document.getElementById('motto');
			var mcaption=document.getElementById('mcaption');
			var netname=document.getElementById('netname');
			var job=document.getElementById('job');
			var origin=document.getElementById('origin');
			var phone=document.getElementById('phone');
			var email=document.getElementById('email');
			//console.log(info);
			bname.innerHTML=info[0].bname;
			btitle.innerHTML=info[0].btitle;
			bimg.src=info[0].bimg;
			motto.innerHTML=info[0].motto;
			mcaption.innerHTML=info[0].mcaption;
			netname.innerHTML=info[0].netname;
			job.innerHTML=info[0].job;
			origin.innerHTML=info[0].origin;
			phone.innerHTML=info[0].phone;
			email.innerHTML=info[0].email;
		}
	};
	xhr.open('get','/blog/bloginfo',true);
	xhr.send();
}