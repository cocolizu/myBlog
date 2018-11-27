function getAboutMe(){
	var xhr;
	artname='aboutme.txt';
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.onreadystatechange=function (){
		if(xhr.readyState==4 && xhr.status==200){
			var articleme=document.getElementById('articleme');
			console.log(xhr.responseText);
			articleme.innerHTML=xhr.responseText;
		}
	};
	xhr.open('get','/blog/aboutme?aname='+artname,true);
	xhr.send();
}