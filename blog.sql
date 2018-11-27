SET NAMES UTF8;
DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog CHARSET=UTF8;
USE blog;
CREATE TABLE blog_article(
	aid SMALLINT PRIMARY KEY AUTO_INCREMENT,
	art_title VARCHAR(30) NOT NULL,
	art_content VARCHAR(5000) NOT NULL,
	art_img VARCHAR(64) NOT NULL,
	art_desc VARCHAR(256) NOT NULL,
	art_author VARCHAR(8) NOT NULL,
	art_sort VARCHAR(10) NOT NULL,
	art_date VARCHAR(32) NOT NULL,
	readnum INT DEFAULT 0,
	commentnum INT DEFAULT 0
);
INSERT INTO blog_article (aid,art_title,art_img,art_desc,art_author,art_sort,art_date,readnum,commentnum) VALUES (NULL,'犯错了怎么办？','img/article/error.jpg','看到昔日好友','李祖锌','日记','2018-09-01',18,16);
INSERT INTO blog_article (aid,art_title,art_img,art_desc,art_author,art_sort,art_date,readnum,commentnum) VALUES (NULL,'两只蜗牛','img/article/woniu.jpg','寓言具有丰富的趣味性和知识性，内容丰富，故事情节曲折动人，读起来像是一篇篇精美的童话，但却又比童话更多一层内涵。','李祖锌','寓言故事','2018-06-06',33,19);
INSERT INTO blog_article (aid,art_title,art_img,art_desc,art_author,art_sort,art_date,readnum,commentnum) VALUES (NULL,'灯光下的影子','img/article/shadow.jpg','所有的人，起初都只是空心人，所谓自我，只是一个模糊的影子，全靠书籍绘画音乐电影里他人的生命体验唤出方向，并用自己的经历去充填，渐渐成为实心人。而在这个由假及真的过程里，最具决定性的力量，是时间。','三毛','人生哲理','2018-7-16',235,200);
INSERT INTO blog_article (aid,art_title,art_img,art_desc,art_author,art_sort,art_date,readnum,commentnum) VALUES (NULL,'春暖花开-走走停停-发现美','img/article/spring.jpg','一个人总要走陌生的路，看陌生的风景，听陌生的歌，然后在某个不经意的瞬间，你会发现，原本费尽心机想要忘记的事情真的就这么忘记了。滞留在那一缕忧伤中始终也无法释然，无力的惶惑萦绕在黑夜的怀抱中托着思念，眼泪的光芒照不到别后的温婉，忧伤的落幕也只是缠绵后的一种必然。','三毛','个人情感','2018-08-28',188,166);
INSERT INTO blog_article (aid,art_title,art_img,art_desc,art_author,art_sort,art_date,readnum,commentnum) VALUES (NULL,'驾驭自己的人生从改变心态做起','img/article/heart.jpg','生活中，那些成功、快乐的人，都有一个共同点：干一行爱一行。因为他们坚信：办法总比困难多。生活中的失败者，则是干一行怨一行，认为倒霉的事总让自己摊上了，抱怨命运不好，抱怨社会不公。','杨申','人生感悟','2018-09-06',8,6);
INSERT INTO blog_article (aid,art_title,art_img,art_desc,art_author,art_sort,art_date,readnum,commentnum) VALUES (NULL,'Bootstrap响应式布局','img/article/boot.jpg','Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。它包含了易于使用的预定义类，还有强大的mixin 用于生成更具语义的布局。','徐宁','框架技术','2018-08-30',10,10);

CREATE TABLE blog_info(
	bname VARCHAR(10) NOT NULL,
	btitle VARCHAR(64) NOT NULL,
	bimg VARCHAR(64) NOT NULL,
	motto VARCHAR(12) NOT NULL,
	mcaption VARCHAR(20) NOT NULL,
	netname VARCHAR(16) NOT NULL,
	job VARCHAR(16) NOT NULL,
	origin VARCHAR(8) NOT NULL,
	phone char(11) NOT NULL,
	email VARCHAR(30) NOT NULL
);
INSERT INTO blog_info VALUES('锲而不舍','咬住青山不放松，立根原在破岩中。千磨万击还坚劲，任尔东西南北风....','img/head.jpg','穷则思变，差则思勤','虽然我走得很慢，但我从不后退....','Silence | 沉默','web前端工程师','福建省-晋江市','18344924294','1846644681@qq.com');

CREATE TABLE blog_user(
	uname VARCHAR(16) PRIMARY KEY,
	upwd VARCHAR(18) NOT NULL
);
INSERT INTO blog_user VALUES('Silence','admin');