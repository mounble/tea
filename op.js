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





//转盘开始
var box = document.querySelector('#table');// 监听对象
var startTime;// 触摸开始时间
var startDistanceX; // 触摸开始X轴位置
var startDistanceY; // 触摸开始Y轴位置
var endTime; // 触摸结束时间
var endDistanceX; // 触摸结束X轴位置
var endDistanceY;// 触摸结束Y轴位置
var moveTime; // 触摸时间
var moveDistanceX; // 触摸移动X轴距离
var moveDistanceY; // 触摸移动Y轴距离
var angleStart = 0;
var angleChange;
box.addEventListener("touchstart", (e) => {
    move01(e);
})
function move01(e) {
    startTime = new Date().getTime();
    startDistanceX = e.touches[0].screenX;
    startDistanceY = e.touches[0].screenY;
}
box.addEventListener("touchend", (e) => {
    move02(e);
})
function move02(e) {
    endTime = new Date().getTime();
    endDistanceX = e.changedTouches[0].screenX;
    endDistanceY = e.changedTouches[0].screenY;
    moveTime = endTime - startTime;
    moveDistanceX = startDistanceX - endDistanceX;
    moveDistanceY = startDistanceY - endDistanceY;
    console.log(moveDistanceX, moveDistanceY);
    // 判断滑动距离超过40 且 时间小于500毫秒
    if ((Math.abs(moveDistanceX) > 40 || Math.abs(moveDistanceY) > 40)) {
        // 判断X轴移动的距离是否大于Y轴移动的距离
        if (Math.abs(moveDistanceX) > Math.abs(moveDistanceY)) {
            // 左右
            if (moveDistanceX < 0) {
                angleChange = moveDistanceX / 3;
                angleStart = angleChange + angleStart;
                table.style.transform = "rotate(" + angleStart + "deg" + ")";

            }
        }
    }
}


var box1 = document.querySelector('#table1');// 监听对象
var startTime1;// 触摸开始时间
var startDistanceX1; // 触摸开始X轴位置
var startDistanceY1; // 触摸开始Y轴位置
var endTime1; // 触摸结束时间
var endDistanceX1; // 触摸结束X轴位置
var endDistanceY1;// 触摸结束Y轴位置
var moveTime1; // 触摸时间
var moveDistanceX1; // 触摸移动X轴距离
var moveDistanceY1; // 触摸移动Y轴距离
var angleStart1 = 0;
var angleChange1;
box1.addEventListener("touchstart", (e) => {
    startTime1 = new Date().getTime();
    startDistanceX1 = e.touches[0].screenX;
    startDistanceY1 = e.touches[0].screenY;
})
box1.addEventListener("touchend", (e) => {
    endTime1 = new Date().getTime();
    endDistanceX1 = e.changedTouches[0].screenX;
    endDistanceY1 = e.changedTouches[0].screenY;
    moveTime1 = endTime1 - startTime1;
    moveDistanceX1 = startDistanceX1 - endDistanceX1;
    moveDistanceY1 = startDistanceY1 - endDistanceY1;
    console.log(moveDistanceX1, moveDistanceY1);
    // 判断滑动距离超过40 且 时间小于500毫秒
    if ((Math.abs(moveDistanceX1) > 40 || Math.abs(moveDistanceY1) > 40)) {
        // 判断X轴移动的距离是否大于Y轴移动的距离
        if (Math.abs(moveDistanceX1) > Math.abs(moveDistanceY1)) {
            // 左右
            if (moveDistanceX1 < 0) {
                angleChange1 = moveDistanceX1 / 3;
                angleStart1 = angleStart1 - angleChange1;
                table1.style.transform = "rotate(" + angleStart1 + "deg" + ")";

            }
        }
    }
})
//转盘结束


var op1 = document.createElement("div");//拖动开始时的
var op2 = document.createElement("div");//拖动结束后的
var op01 = document.createElement("div");
var op02 = document.createElement("div");
//下面开始制作过程的交互
var black = document.getElementById("black");
var show = document.getElementById("show");
var close = document.getElementById("close");
var step = 0;
//1炙茶-2碎茶-3碾茶-4罗茶-5入罐-6烫盏-7调膏-8击拂
//0还没开始做
var dragflag = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var start = document.getElementById("start");
var bg = document.getElementById("bg");
var area = document.getElementById("area");
var words_bottom = document.getElementById("words_bottom");
var words = document.getElementById("words");
start.addEventListener('touchstart', function () {
    //改变页面背景
    bg.getElementsByTagName("img")[0].attributes["src"].value = "./make_tea/bg.png";
    start.style.display = "none";
    area.style.display = "block";
    words_bottom.style.display = "block";
    words.style.display = "block";
    setTimeout("background_change(1)", 3000);
    op_move1(1);
    op_move2(2);
    
})



//文字提示图片改变
function background_change(n) {
    words.style.backgroundImage="url(./make_tea/0"+n+".png)";

}


//拖拽
function op_move1(n) {
    switch (n) {
        case 1:
            var op = document.getElementById("chalu");
            break;
        case 2:
            var op = document.getElementById("chabing");
            break;
        case 3:
            var op = document.getElementById("chanian");
            break;
        case 4:
            var op = document.getElementById("shaiwang");
            break;
        case 5:
            var op = document.getElementById("chahu");
            break;
        case 6:
            var op = document.getElementById("chazhan");
            break;
        case 7:
            var op = document.getElementById("chayao");
            break;
        case 8:
            var op = document.getElementById("chaguan");
            break;
        case 9:
            var op = document.getElementById("chasheng");
            break;
    }


    var mouse_startX;
    var mouse_startY;
    var baby_statrtX;
    var baby_statrtY;
    var mouse0_startX;
    var mouse0_startY;
    
    var big_box = document.getElementById("big_box");
    var isdrag = 1;
    
    var thingX;
    var thingY;
    op.addEventListener("touchstart", (e) => {
        chalu_x = op.offsetLeft;
        chalu_y = op.offsetTop;
        mouse_startX = e.targetTouches[0].pageX - 60;
        mouse_startY = e.targetTouches[0].pageY - 60;
        op.style.display = "none";
        big_box.style.display = "block";
        op1.style.cssText = "z-index:999; width: 30%;height: 30vw;position: absolute;top: " + mouse_startY + "px;left: " + mouse_startX + "px;background-image: url(./make_tea/00" + n + ".png);background-position: center;background-repeat: no-repeat;background-size: contain;";
        big_box.appendChild(op1);
        op1.addEventListener("touchstart", (e) => {
            baby_statrtX = op1.offsetLeft;
            baby_statrtY = op1.offsetTop;
            mouse0_startX = e.targetTouches[0].pageX;
            mouse0_startY = e.targetTouches[0].pageY;
        })
        op1.addEventListener("touchmove", (e) => {
            if (isdrag == 1) {
                op1.style.left = baby_statrtX + e.targetTouches[0].pageX - mouse0_startX + "px";
                op1.style.top = baby_statrtY + e.targetTouches[0].pageY - mouse0_startY + "px";
            }
        })
        op1.addEventListener("touchend", (e) => {
            if (op1.offsetLeft > area.offsetLeft && op1.offsetTop > area.offsetTop) {
                if (op1.offsetLeft < area.offsetLeft + 40 && op1.offsetTop < area.offsetTop + 40) {
                    isdrag = 0;
                    thingX = op1.offsetLeft;
                    thingY = op1.offsetTop;
                    big_box.style.display = "none";
                    op2.style.cssText = "z-index:999; width: 30%;height: 30vw;position: absolute;top: " + thingY + "px;left: " + thingX + "px;background-image: url(./make_tea/00" + n + ".png);background-position: center;background-repeat: no-repeat;background-size: contain;";
                    bg.appendChild(op2);
                    dragflag[n] = 1;
                }
            }
        })
    })
}
function op_move2(n) {
    switch (n) {
        case 1:
            var op = document.getElementById("chalu");
            break;
        case 2:
            var op = document.getElementById("chabing");
            break;
        case 3:
            var op = document.getElementById("chayao");
            break;
        case 4:
            var op = document.getElementById("shaiwang");
            break;
        case 5:
            var op = document.getElementById("chahu");
            break;
        case 6:
            var op = document.getElementById("chazhan");
            break;
        case 7:
            var op = document.getElementById("chanian");
            break;
        case 8:
            var op = document.getElementById("chaguan");
            break;
        case 9:
            var op = document.getElementById("chasheng");
            break;
    }


    var mouse_startX;
    var mouse_startY;
    var baby_statrtX;
    var baby_statrtY;
    var mouse0_startX;
    var mouse0_startY;
    
    var big_box = document.getElementById("big_box");
    var isdrag = 1;
   
    var thingX;
    var thingY;
    op.addEventListener("touchstart", (e) => {
        chalu_x = op.offsetLeft;
        chalu_y = op.offsetTop;
        mouse_startX = e.targetTouches[0].pageX - 60;
        mouse_startY = e.targetTouches[0].pageY - 60;
        op.style.display = "none";
        big_box.style.display = "block";
        op01.style.cssText = "z-index:999; width: 30%;height: 30vw;position: absolute;top: " + mouse_startY + "px;left: " + mouse_startX + "px;background-image: url(./make_tea/00" + n + ".png);background-position: center;background-repeat: no-repeat;background-size: contain;";
        big_box.appendChild(op01);
        op01.addEventListener("touchstart", (e) => {
            baby_statrtX = op01.offsetLeft;
            baby_statrtY = op01.offsetTop;
            mouse0_startX = e.targetTouches[0].pageX;
            mouse0_startY = e.targetTouches[0].pageY;
        })
        op01.addEventListener("touchmove", (e) => {
            if (isdrag == 1) {
                op01.style.left = baby_statrtX + e.targetTouches[0].pageX - mouse0_startX + "px";
                op01.style.top = baby_statrtY + e.targetTouches[0].pageY - mouse0_startY + "px";
            }
        })
        op01.addEventListener("touchend", (e) => {
            if (op01.offsetLeft > area.offsetLeft && op01.offsetTop > area.offsetTop) {
                if (op01.offsetLeft < area.offsetLeft + 40 && op01.offsetTop < area.offsetTop + 40) {
                    isdrag = 0;
                    thingX = op01.offsetLeft;
                    thingY = op01.offsetTop;
                    big_box.style.display = "none";
                    op02.style.cssText = "z-index:999; width: 30%;height: 30vw;position: absolute;top: " + thingY + "px;left: " + thingX + "px;background-image: url(./make_tea/00" + n + ".png);background-position: center;background-repeat: no-repeat;background-size: contain;";
                    bg.appendChild(op02);
                    dragflag[n] = 1;
                    if (dragflag[1] == 1 && dragflag[2] == 1 && dragflag[3] == 0) {
                        var chalu = document.getElementById("chalu");
                        var chabing = document.getElementById("chabing");
                        show.style.display = "block";
                        show.style.backgroundImage = "url(./make_tea/000" + n/2 + ".gif)";
                        black.style.display="block";
                        show.style.display = "block";
                        close.style.display = "block";
                        close.addEventListener("touchstart", (e) => {
                            show.style.display = "none";
                            close.style.display = "none";
                            black.style.display = "none";
                            op2.remove();
                            op02.remove();
                            chalu.style.display = "block";
                            chabing.style.display = "block";
                            chabing.getElementsByTagName("img")[0].attributes["src"].value = "./make_tea/yanbing.png";
                            step = n/2;
                            location.href="./index5.html";
                        })
                    }
                }
            }
        })
    })
}
