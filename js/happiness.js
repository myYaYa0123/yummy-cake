//初始化页面
/*
$("#header").on("mouseover",'#header .city',function(){
    $(".city-list").show();
});
$("#header").on("mouseout",'#header .city',function(){
    $(".city-list").hide();
});
$("#header").on("click",'.city-list a',function(e){
    e.preventDefault();
    $('.city>a').html($(this).html());
    $(".city-list").hide();
});*/
for(var j=0,arr=[];j<100;j++) {
    var i = parseInt(Math.random() * 15) + 1;
    arr.indexOf(i) == -1 && arr.push(i);
}
for(var j=0;j<arr.length;j++){
    $('#story-box').append('<div class="grid"><img src="images/story'+arr[j]+'.jpg"><a class="grid-search" href="../happiness1.html"></a></div>');
}
$('.grid').mouseenter(function(){
    $(this).children('.grid-search').css('display','block');
    $(this).animate({opacity:0.5},500)
})
$('.grid').mouseleave(function(){
    $(this).children('.grid-search').css('display','none');
    $(this).animate({opacity:1},500)
});
// $('#story-box').on('click','grid-search',function (e) {
//     e.preventDefault();
//     window.location.href = "../happiness1.html";
// });

