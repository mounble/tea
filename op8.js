//摆放位置计算
var pageWidth = document.body.clientWidth;
var table = document.getElementById("table");
var thing1 = document.getElementById("chalu");
var thing2 = document.getElementById("chajiu");
var thing3 = document.getElementById("chanian");
var thing4 = document.getElementById("shaiwang");
var thing5 = document.getElementById("chahu");
var radius = pageWidth / 2.7;//圆的半径
var angle = (360 / 5) * Math.PI / 180;//每个盒子对应的弧度
var table_originX = pageWidth / 2;//圆盘横坐标
var table_originY = table.offsetTop + table_originX;//圆盘纵坐标
var thing1_originX = radius + Math.cos(angle * 0) * radius;
var thing1_originY = radius + Math.sin(angle * 0) * radius;
thing1.style.left = thing1_originX + "px";
thing1.style.top = thing1_originY + "px";

var thing2_originX = radius + Math.cos(angle * 1) * radius;
var thing2_originY = radius + Math.sin(angle * 1) * radius;
thing2.style.left = thing2_originX + "px";
thing2.style.top = thing2_originY + "px";

var thing3_originX = radius + Math.cos(angle * 2) * radius;
var thing3_originY = radius + Math.sin(angle * 2) * radius;
thing3.style.left = thing3_originX + "px";
thing3.style.top = thing3_originY + "px";

var thing4_originX = radius + Math.cos(angle * 3) * radius;
var thing4_originY = radius + Math.sin(angle * 3) * radius;
thing4.style.left = thing4_originX + "px";
thing4.style.top = thing4_originY + "px";

var thing5_originX = radius + Math.cos(angle * 4) * radius;
var thing5_originY = radius + Math.sin(angle * 4) * radius;
thing5.style.left = thing5_originX + "px";
thing5.style.top = thing5_originY + "px";

var pageWidth = document.body.clientWidth;
var table1 = document.getElementById("table1");
var thing01 = document.getElementById("chazhan");
var thing02 = document.getElementById("chabing");
var thing03 = document.getElementById("chasheng");
var thing04 = document.getElementById("chazhan1");
var thing05 = document.getElementById("chaguan");
var radius0 = pageWidth / 2.4;//圆的半径
var angle = (360 / 5) * Math.PI / 180;//每个盒子对应的弧度
var table1_originX = pageWidth / 2;//圆盘横坐标
var table1_originY = table1.offsetTop + table1_originX;//圆盘纵坐标
var thing01_originX = radius0 + Math.cos(angle * 0) * radius0;
var thing01_originY = radius0 + Math.sin(angle * 0) * radius0;
thing01.style.left = thing01_originX + "px";
thing01.style.top = thing01_originY + "px";

var thing02_originX = radius0 + Math.cos(angle * 1) * radius0;
var thing02_originY = radius0 + Math.sin(angle * 1) * radius0;
thing02.style.left = thing02_originX + "px";
thing02.style.top = thing02_originY + "px";

var thing03_originX = radius0 + Math.cos(angle * 2) * radius0;
var thing03_originY = radius0 + Math.sin(angle * 2) * radius0;
thing03.style.left = thing03_originX + "px";
thing03.style.top = thing03_originY + "px";

var thing04_originX = radius0 + Math.cos(angle * 3) * radius0;
var thing04_originY = radius0 + Math.sin(angle * 3) * radius0;
thing04.style.left = thing04_originX + "px";
thing04.style.top = thing04_originY + "px";

var thing05_originX = radius0 + Math.cos(angle * 4) * radius0;
var thing05_originY = radius0 + Math.sin(angle * 4) * radius0;
thing05.style.left = thing05_originX + "px";
thing05.style.top = thing05_originY + "px";
//位置摆放计算结束


document.getElementById("next").addEventListener("touchstart",function(){
    location.href="index13.html";
})
