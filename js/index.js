

//页面加载完成后的弹框
$(".city").on("mouseover",function(){
    $(".city-list").show();
});
$(".city").on("mouseout",function(e){
    $(".city-list").hide();
});
$(".city-list a").click(function(e){
    e.preventDefault();
    $('.city>a').html($(this).html());
    //防止页面刷新
    $(".city-list").hide();
});
$("#header").on("mouseover",'.city1>a',function(){
    $(".city-list").show();
});
//城市选择跳转
$(function () {
    // $('.citybox-bot').on("click",'a',function(){
    //     $('#window-city').hide();
    //     sessionStorage.setItem('load','1');
    // });
    $('#nowPay').click(function (e) {
        e.preventDefault();
        var postData = $('.list>a').text();
        $('#window-city').hide();
        sessionStorage.setItem('load','1');
       $.ajax({
           type:"GET",
           url:"",
           data:postData,
           success:function (response) {

           },
           error:function (response) {

           }
       });
    });
    $('#inTo').click(function (e) {
        e.preventDefault();
        var postData = $('.list>a').text();
        $('#window-city').hide();
        sessionStorage.setItem('load','1');
        $.ajax({
            type:"GET",
            url:"",
            data:postData,
            success:function (response) {

            },
            error:function (response) {

            }
        });
    });
    if(window.sessionStorage.length!=0){
        $('#window-city').hide();
    }
    else{
        $('#window-city').show();
    }
});
//图片轮播
var imgs=[
    {"i":0,"img":"images/slide1.jpg"},
    {"i":1,"img":"images/slide2.jpg"},
    {"i":2,"img":"images/slide3.jpg"},
    {"i":3,"img":"images/slide4.jpg"}
];
var adv={
    LIWIDTH:0,//保存每个li的宽度
    DISTANCE:0,//保存总距离
    DURATION:800,//保存总时长
    STEPS:80,//保存总步数
    interval:0,//保存步頻
    step:0,
    moved:0,
    WAIT:2000,
    timer:null,
    canAuto:true,
    init:function(){
        this.LIWIDTH=parseInt(getComputedStyle(document.getElementById("slider")).width);
        this.interval=this.DURATION/this.STEPS;
        this.updateView();
        $("#index").mouseover(function (e) {
            var target=e.target;
            if(target.nodeName==="LI"){
                var n=target.innerHTML-$("#index .hover").html();
                this.move(n);
            }
        }.bind(this));
        this.autoMove();//启用autoMove
        $("#slider").mouseover(function(){//为id为slider绑定鼠标进入事件为
            this.canAuto=false;//TODO 如果不绑定this是指的slider
        }.bind(this));
        $("#slider").mouseout(function(){
            this.canAuto=true;//TODO 如果不绑定this是指的slider
        }.bind(this));
        $('#clickLf').click(this.moveLeft.bind(this));
        $('#clickRt').click(this.moveRight.bind(this));
    },
    updateView:function(){
        for(var i=0,htmlImgs="",htmlIdx="";i<imgs.length;i++){
            htmlImgs+="<li><img src='"+imgs[i].img+"'></li>";
            htmlIdx+="<li>"+(i+1)+"</li>";
        }
        $("#sImg").html(htmlImgs);
        $("#sImg").css('width',this.LIWIDTH*imgs.length+"px");
        $("#index").html(htmlIdx);
        document.querySelectorAll("#index li")[imgs[0].i].className="hover";
    },
    autoMove:function () {
        this.timer=setTimeout(function(){//启动一次性定时器，任务：move，参数为1，等待时间为WAIT
            if(this.canAuto){
                this.move(1);//TODO 这个this指window
            }
            else{
                this.autoMove();//TODO 这个this指window
            }
        }.bind(this),this.WAIT);
    },
    move:function(n){//启动一次移动
        clearInterval(this.timer);
        this.timer=null;
        if(n<0){//如果右移
            imgs=imgs.splice(imgs.length+n,-n).concat(imgs);
            this.updateView();
            var left=parseInt(getComputedStyle(document.getElementById("sImg")).left);
            var start=left-this.LIWIDTH*(-n);
            $("#sImg").css('left',start+"px");
            var end=0;
        }
        var start=parseInt(getComputedStyle(document.getElementById("sImg")).left);
        var end=-this.LIWIDTH*n;
        this.distance=-(end-start);
        this.step=this.distance/this.STEPS;
        this.timer=setInterval(this.moveStep.bind(this,n),this.interval);//TODO 绑定this
    },
    moveStep:function (n) {//移动一步
        $("#sImg").css('left',parseInt(getComputedStyle(document.getElementById("sImg")).left)-this.step+"px");
        this.moved++;
        if(this.moved==this.STEPS){//移动结束之后
            clearInterval(this.timer);
            this.timer=null;
            this.moved=0;
            if(n>0){
                imgs=imgs.concat(imgs.splice(0,n));
                this.updateView();
            }
            $("#sImg").css('left','');
            this.autoMove();//启动自动轮播
        }
    },
    moveLeft:function(){//点击向右一定能够一次
        clearInterval(this.timer);
        this.timer=null;
        this.move(-1);
    },
    moveRight:function () {//点击向左移一次
        clearInterval(this.timer);
        this.timer=null;
        this.move(1);
    }
};
adv.init();


//时刻分享中鼠标经过图片效果
// $('.T-classfy .Tclassfy-lf dd').mouseenter(function(){
//     $(this).next().animate({
//         left:0
//     });
// });
// $('.T-classfy .Tclassfy-lf dt').mouseleave(function(){
//     $(this).animate({
//         left:-650
//     });
// // });
// $('.T-classfy .Tclassfy-top dd').mouseenter(function(){
//     $(this).next().animate({
//         top:0
//     });
// });
// $('.T-classfy .Tclassfy-top dt').mouseleave(function(){
//     $(this).animate({
//         top:-650
//     });
// });
// $('.T-classfy .Tclassfy-rt  dd').mouseenter(function(){
//     $(this).next().animate({
//         right:10
//     });
// });
// $('.T-classfy .Tclassfy-rt dt').mouseleave(function(){
//     $(this).animate({
//         right:-650
//     });
// });
// $('.T-classfy .Tclassfy-bot dd').mouseenter(function(){
//     $(this).next().animate({
//         bottom:6
//     });
// });
// $('.T-classfy .Tclassfy-bot dt').mouseleave(function(){
//     $(this).animate({
//         bottom:-650
// //     });
// });


