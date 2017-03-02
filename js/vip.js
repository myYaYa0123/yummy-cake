
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.strokeStyle = "black";
// 初始化功能
var tools = {
    tool : "pencil",
    graphic : "",
    color : ""
}
// 鼠标操作开关
var flag = false;
// 初始化起点坐标值及保存点
var x, y,url = "";
// 初始化字体属性
var fontsize = "12px",fontfamily = "Arial",fontweight = "",fontstyle = "";
// 初始化文本输入框
var fontTip = $("<textarea rows='3' cols='20' style='background:transparent;position:absolute;display:none;'></textarea>");
$("#board").append(fontTip);
// 按钮点击逻辑
$("fieldset").children("button:not('#bold,#italic')").click(function(){
    // 按钮选择切换效果
    $(this).attr("style","background-color:#9d9d9d;color:#ffffff");
    $(this).siblings("button").removeAttr("style");
    // 清除功能
    if($(this).attr("id")=="trash"){
        context.clearRect(0,0,canvas.width,canvas.height);
    }
    // 判断用户选择的功能
    var command = $(this).parent("fieldset").attr("id");
    switch (command) {
        case "tool" :
            tools.tool = $(this).attr("id");
            // 如果选择工具,默认不选择任何图形
            $(this).parent("fieldset").siblings().children("button").removeAttr("style");
            tools.graphic = "";

            if(tools.tool!="pencil"){
                $(this).parent("fieldset").next().children("button").attr("disabled","disabled");
            }else{
                $(this).parent("fieldset").next().children("button").removeAttr("disabled");
            }
            if(tools.tool!="word"){
                $(this).parent("fieldset").siblings("#setting").find("button").attr("disabled","disabled");
            }else{
                $(this).parent("fieldset").siblings("#setting").find("button").removeAttr("disabled");
            }
            break;
        case "graphic" :
            tools.graphic = $(this).attr("id");
            $("#white").attr("style","background-color:#9d9d9d;color:#ffffff");
            break;
        case "color" :
            tools.color = $(this).attr("id");
            context.fillStyle = $(this).attr("id");
            context.strokeStyle = $(this).attr("id");
            break;
    }
});
// 选择字体属性

$("canvas").mousedown(function(event){
    // 绘制开始
    flag = true;
    // 获取起点坐标值
    x = event.offsetX;
    y = event.offsetY;
}).mouseup(function(event){
    // 绘制完毕
    flag = false;
    url = $("canvas")[0].toDataURL();
    fontTip.focus();
}).mousemove(function(event){
    if(tools.tool=="pencil"&&tools.graphic==""){
        drawPencil(event);
    }else if(tools.tool=="pencil"&&tools.graphic=="line"){
        drawLine(event);
    }else if(tools.tool=="pencil"&&tools.graphic=="rect"){
        drawRect(event);
    }else if(tools.tool=="pencil"&&tools.graphic=="circle"){
        drawCircle(event);
    }else if(tools.tool=="pencil"&&tools.graphic=="triangle"){
        drawTriangle(event);
    }else if(tools.tool=="eraser"){
        clearDraw(event);
    }else if(tools.tool=="word"){
        inputWord(event);
    }
});
// 绘制画笔
function drawPencil(event){
    if(flag){
        context.lineTo(event.offsetX,event.offsetY);
        context.stroke();
    }else{
        context.beginPath();
        context.moveTo(event.offsetX,event.offsetY);
    }
}
// 绘制直线
function drawLine(event){
    if(flag){
        context.clearRect(0,0,canvas.width,canvas.height);
        // 载入上次保存点
        loadImg();

        context.beginPath();
        context.moveTo(x,y);
        context.lineTo(event.offsetX,event.offsetY);
        context.stroke();
    }
}
// 绘制矩形
function drawRect(event){
    if(flag){
        context.clearRect(0,0,canvas.width,canvas.height);
        // 载入上次保存点
        loadImg();

        context.beginPath();
        context.rect(x,y,event.offsetX-x,event.offsetY-y);
        if(tools.color!=""){
            context.fill();
            context.stroke();
        }else{
            context.stroke();
        }
    }
}
// 绘制圆形
function drawCircle(event){
    if(flag){
        var rx = (event.offsetX-x)/2;
        var ry = (event.offsetY-y)/2;
        var r = Math.sqrt(rx*rx+ry*ry);

        context.clearRect(0,0,canvas.width,canvas.height);
        // 载入上次保存点
        loadImg();

        context.beginPath();
        context.arc(rx+x,ry+y,r,0,Math.PI*2);
        if(tools.color!=""){
            context.fill();
            context.stroke();
        }else{
            context.stroke();
        }
    }
}
// 绘制三角形
function drawTriangle(event){
    if(flag){
        context.clearRect(0,0,canvas.width,canvas.height);
        // 载入上次保存点
        loadImg();

        context.beginPath();
        context.moveTo(x,y);
        context.lineTo(event.offsetX,event.offsetY);
        context.lineTo(x,event.offsetY);
        context.lineTo(x,y);
        if(tools.color!=""){
            context.fill();
            context.stroke();
        }else{
            context.stroke();
        }
    }
}
// 文字输入
function inputWord(event){
    if(flag){
        fontTip.css({
            top : y,
            left : x,
            width : event.offsetX - x,
            height : event.offsetY - y,
            fontSize : fontsize,
            fontFamily : fontfamily,
            color : tools.color,
            fontStyle : fontstyle,
            fontWeight : fontweight
        }).show();
    }
}
// 绘制文字
function drawWord(event){
    var words = fontTip.val().trim();
    if(fontTip.css("display")!="none"&&words){
        var offset1 = $("#canvas").offset();
        var offset2 = fontTip.offset();

        context.fillStyle = tools.color;
        context.font = fontstyle+fontweight+fontsize+" "+fontfamily;

        if(isNaN(fontsize)){
            var size = Number(fontsize.substring(0,fontsize.length-2));
        }

        context.fillText(words,offset2.left-offset1.left+2,offset2.top-offset1.top+size+3);
        fontTip.val("");
    }
    fontTip.hide();
}
fontTip.blur(drawWord);
// 橡皮擦
function clearDraw(event){
    if(flag){
        context.clearRect(0,0,canvas.width,canvas.height);
        // 载入上次保存点
        loadImg();

        context.lineWidth = 10;
        context.strokeStyle = "white";
        context.lineTo(event.offsetX,event.offsetY);
        context.stroke();
    }else{
        context.beginPath();
        context.moveTo(event.offsetX,event.offsetY);
    }
}

function loadImg(){
    var img = new Image();
    img.src = url;
    context.drawImage(img,0,0,canvas.width,canvas.height);
}
//将canvas转码成base64
function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    $('input').val(image) ;  //将图片保存在隐藏的input中，进行表单提交时提交给服务器
}