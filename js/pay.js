$(function () {
//        删除
    $('table tbody tr td:last-child a').click(function (e) {
        e.preventDefault();
        if(confirm("您确定要讲这样商品删除吗")){
            $(this).parent().parent().remove();
            //            当购物车中没有商品时
            if($('table tbody tr').length<3){
                window.location.href="pay_null.html";
            }
        }
    });
//  是否需要蜡烛切换
    $('#isCandle').hide();
    $('#candle').change(function () {
        $('#isCandle').toggle();
    });
//
    $('#isAddCook td').hide();
    $('#addCook').change(function () {
        $('#isAddCook td').toggle();
    });
//
    $('#umsg').addClass('hide');
    $('#usermsg').change(function () {
        $('#umsg').toggleClass('hide');
    });
});



//    选择生日牌
$('.birth').click(function (e) {
    e.preventDefault();
    $('#window-city').css('display','block');
    $('#window-city #city-box .bg').html(
        ` <p>请选择生日牌类型</p>
                  <p><input type="radio" name="sr" value="中文生日快乐" checked>中文生日快乐</p>
                  <p><input type="radio" name="sr" value="英文生日快乐">英文生日快乐</p>
                  <p><input type="radio" name="sr" value="" class="inself">自定义
                  <input type="text" placeholder="最多10个字" class="text hide" maxlength="10"></p>
                  <p class="sub"><a href="#" type="button" class="confirm1">确定</a><a href="#" type="button" class="cancel">取消</a></p>`);
});
$('.bg').on('blur','.text',function () {
    $('.inself').val($('.text').val());
});
$('.bg').on('click','.cancel',function (e) {
    e.preventDefault();
    $('#window-city').css('display','none');
});
$('.bg').on('click','.confirm1',function (e) {
    e.preventDefault();
    $('#window-city').css('display','none');
    $('.birthTip').text($('input[name="sr"]:checked').val());
});


//   输入地址
$('.pay-location').click(function (e) {
    e.preventDefault();
    $('#window-city').css('display','block');
    $('#window-city #city-box .bg').html(
        `<p>请输入正确的收货地址(现仅限杭州市内）</p>
                <p class="sub">
                    <select name="" id="city" class="pl10">
                        <option value="" selected>杭州市</option>
                    </select>
                    <select name="" id="qu" class="pl10 ml20">
                        <option value="" selected>江干区</option>
                        <option value="">西湖区</option>
                        <option value="">上城区</option>
                        <option value="">下城区</option>
                        <option value="">拱墅区</option>
                    </select>
                <p class="sub"><label for="location">详细地址:</label>
                <input type="text" placeholder="街道、楼牌号等" class="text" maxlength="10" id="location"></p>
                <p class="sub"><a href="#" type="button" class="confirm">确定</a><a href="#" type="button" class="cancel">取消</a></p>`);
});
$('.bg').on('click','.confirm',function (e) {
    e.preventDefault();
    $('#window-city').css('display','none');
    $('.pay-location').text($('select#city>option:selected').text()+"-"+$('select#qu>option:selected').text()+"-"+$('#location').val());
});
$('body').on('change','input',function () {
    $('.idcard').prop('checked')? $('#idshow').removeClass('hide'): $('#idshow').addClass('hide');
    $('.inself').prop('checked')? $('.text').removeClass('hide'): $('.text').addClass('hide');
});

//选择日期
laydate({
    elem: '#J-xl',
    min: laydate.now(+1)
});





//    提交订单
// $('#submit').click(function (e) {
//     e.preventDefault();
//     var postData = $('form').serialize();
//     $.ajax({
//         type:"POST",
//         url:"",
//         data:postData,
//         success:function (response) {
//             window.location.href = response.sucUrl;
//         },
//         error:function (response) {
//             window.location.href = response.errUrl;
//         }
//     });
// });

//返回购物车
$('#back').click(function (e) {
    e.preventDefault();
    window.location.href = "payCart.html";
    // e.preventDefault();
    // var postData = $('form').serialize();
    // $.ajax({
    //     type:"POST",
    //     url:"",
    //     data:postData,
    //     success:function (response) {
    //         window.location.href = response.sucUrl;
    //     },
    //     error:function (response) {
    //         window.location.href = response.errUrl;
    //     }
    // });
});