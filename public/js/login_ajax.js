function login(uname,upwd){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.onreadystatechange=function (){
		if(xhr.readyState==4 && xhr.status==200){
			if(xhr.responseText==1){
				window.location.href='index.html';
			}else{
				var userInfo=document.getElementById('userinfo');
				var user=document.getElementById('user');
				var pwd=document.getElementById('pwd');
				var check=document.getElementById('check');
				user.value='';
				pwd.value='';
				check.value='';
				userInfo.innerHTML=xhr.responseText;
			}
		}
	};
	xhr.open('post','/user/login',true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send('uname='+uname+'&upwd='+upwd);
}
//判断登录信息是否正确
function judgeInfo(){
	var user=document.getElementById('user');
	var pwd=document.getElementById('pwd');
	var check=document.getElementById('check');
	var getNum=document.getElementById('getnum').innerHTML;
	var userInfo=document.getElementById('userinfo');
	var pwdInfo=document.getElementById('pwdinfo');
	var checkInfo=document.getElementById('checkinfo');
	//判断用户名密码是否为空
	if(user.value==''){
		pwdInfo.innerHTML='';
		checkInfo.innerHTML='';
		userInfo.innerHTML='用户名不能为空';
	}else if(pwd.value==''){
		userInfo.innerHTML='';
		checkInfo.innerHTML='';
		pwdInfo.innerHTML='密码不能为空';
	}else if(check.value==''){
		userInfo.innerHTML='';
		pwdInfo.innerHTML='';
		checkInfo.innerHTML='验证码不能为空';
	}else{
		//判断验证码是否正确
		userInfo.innerHTML='';
		pwdInfo.innerHTML='';
		checkInfo.innerHTML='';
		if(check.value.toLowerCase()==getNum.toLowerCase()){
			login(user.value,pwd.value);
		}else{
			check.value='';
			pwd.value='';
			checkInfo.innerHTML='验证码有误';
		}
	}	
}
