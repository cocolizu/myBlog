//生成验证码
function getCheckNum(){
	var checkNum='';
	var getNum=document.getElementById('getnum');
	for (var k=0;k<4;k++)
	{	
		//随机产生一个数决定生成数字还是字母
		var randNum=parseInt(Math.random()*3);
		//随机产生一个数决定生成数字或字母的字体大小(12px-20px)	
		var getSize=parseInt(Math.random()*9+15);
		//随机产生一个数控制验证码的旋转角度
		var getDeg=parseInt(Math.random()*40-20);
		//随机产生一个数控制验证码的水平偏移
		var getOffsetHor=parseInt(Math.random()*55);
		//随机产生一个数控制验证码的上下偏移
		var getOffsetVer=parseInt(Math.random()*10);
		if(randNum==0){
			//产生0-9的数字
			checkNum += parseInt(Math.random()*10);
		}else if(randNum==1){
			//产生a-z的字母
			checkNum += String.fromCharCode(parseInt(Math.random()*26+97));
		}else{
			//产生A-Z的字母
			checkNum += String.fromCharCode(parseInt(Math.random()*26+65));
		}
	}
	getNum.innerHTML=checkNum;
	getNum.style.fontSize=getSize+'px';
	getNum.style.transform='rotate('+getDeg+'deg)';
	getNum.style.paddingLeft=getOffsetHor+'px';
	getNum.style.paddingTop=getOffsetVer+'px';
}