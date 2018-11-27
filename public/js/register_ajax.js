//判断注册信息的合理性
function judgeReg(){
	var userpwdreg=/\w{6,16}/;
	var emailreg=/\w+@\w+\.(com|cn|net|org)/;
	var phonereg=/1[3578]\d{9}/;
	var user=document.getElementById('user');
	var pwd=document.getElementById('pwd');
	var email=document.getElementById('email');
	var phone=document.getElementById('phone');
	var regErr=document.getElementById('regerr');
	if(user.value=='' || pwd.value=='' || email.value=='' || phone.value==''){
		regErr.innerHTML='*请根据提示完善您的信息！';
	}else{
		if(!userpwdreg.test(user.value)){
			regErr.innerHTML='*请输入6-16位用户名';
			return;
		}else if(!userpwdreg.test(pwd.value)){
			regErr.innerHTML='*请输入6-16位密码';
			return;
		}else if(!emailreg.test(email.value)){
			regErr.innerHTML='*邮箱格式有误，请重新输入';
			return;
		}else if(!phonereg.test(phone.value)){
			regErr.innerHTML='*手机号格式有误，请重新输入';
			return;
		}
		regUser(user.value,pwd.value);
	}
}
//判断用户民是否已经注册
function checkUser(){
	var user=document.getElementById('user');
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.onreadystatechange=function (){
		if(xhr.readyState==4 && xhr.status==200){
			var regErr=document.getElementById('regerr');
			if(xhr.responseText=='1'){
				regErr.innerHTML='';
				return;
			}
			regErr.innerHTML=xhr.responseText;
			user.value='';
		}	
	};
	xhr.open('get','/user/checkuser?uname='+user.value,true);
	xhr.send();
}
//只有当输入框有数据时才执行用户检测
function selOper(){
	var user=document.getElementById('user').value;
	if(user!=''){
		checkUser();
	}
}
//注册用户
function regUser(u,p){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.onreadystatechange=function (){
		if(xhr.readyState==4 && xhr.status==200){
			if(xhr.responseText=='1'){
				var regsuccess=document.getElementById('regsuccess');
				var floor=document.getElementById('floor');
				floor.style.display='block';
				regsuccess.style.display='block';
			}
			var regErr=document.getElementById('regerr');
			regErr.innerHTML=xhr.responseText;
		}	
	};
	xhr.open('post','/user/register',true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send('uname='+u+'&upwd='+p);
}
