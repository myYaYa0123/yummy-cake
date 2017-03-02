//封装一个专门用于表单2.0的验证的函数
//将不同情况下不同的内容作为函数的参数
$(function(){
    function validityForm(elemid,elemText){
        var elem=document.getElementById(elemid);
        var elemTip=document.getElementById(elemid+"Tip");
        var msg=document.getElementById(elemid+"Tip").innerHTML;
        elem.onfocus=function(){
            elemTip.className="col-md-5 show control-default";
            elemTip.innerHTML=msg;
            $('.false').css('display','none');
        }
        elem.onblur=function(){
            if(elem.validity.valid){
                elemTip.className="col-md-5 hide control-success";
            }
            if(elem.required){
                if(elem.validity.valueMissing){
                    elemTip.className="col-md-5 show control-error";
                    elemTip.innerHTML=elemText+"输入不能为空";
                }
            }
            if(elem.pattern){
                if(elem.validity.patternMismatch) {
                    elemTip.className = "col-md-5 show control-error";
                    elemTip.innerHTML = msg;
                }
            }
        }
    }
    validityForm("login-username","登录名");
    validityForm("login-password","密码");
    validityForm("username","用户名");
    validityForm("password","密码");
    validityForm("birth","生日");
    validityForm("home","地址");

    //点击登录
    $('#header').on("click",'#login-btn',function(e){
        e.preventDefault();
        $('#login-box').css('display','block');
        login();
    });
    //点击注册按钮
    $('#header').on("click",'#regist-btn',function(e){
        e.preventDefault();
        $('#login-box').css('display','block');
        regist();
    });
    //点击关闭按钮
    $('#close').on("click",function(e){
        e.preventDefault();
        $('#login-box').css("display","none");
    });
    //登录和注册切换
    $('#main-tab li').on("click",function (e) {
        e.preventDefault();
        var target=e.target;
        if(target.nodeName=="A"){
            target=target.parentNode;
        }
        if($(target).hasClass('current')==false){
            if(isToggle){
                login();
                isToggle=false;
            }else{
                regist();
                isToggle=true;
            }
        }
    });
    //点击注册
    $('#regist a.btn-block').on("click",function(e){
        e.preventDefault();
        for(var i=0,control=[];i<document.querySelectorAll('#regist .form-control').length;i++){
            if(document.querySelectorAll('#regist .form-control')[i].validity.valid){
                control.push(1);
            }
        }
        if(control.length==document.querySelectorAll('#regist .form-control').length){
            var data=$('#form-regist').serialize();
            $.ajax({
                type:"POST",
                url:"php/regist.php",
                data:data,
                success:function(obj){
                    if(obj.code==2000){
                        $('.modal').siblings().fadeOut();
                        $('.modal').css('display','block');
                        $('#login-box').on('click','#yes',function (e) {
                            e.preventDefault();
                            loginSuccess(obj.msg,obj.pwd);
                        });
                        $('#login-box').on('click','#wait',function (e) {
                            e.preventDefault();
                            $('#login-box').css("display","none");
                            $('.modal').siblings().fadeIn();
                            $('.modal').css('display','none');
                        });
                    }
                    else{
                        regist();
                        $('#usernameTip').html('用户名已经存在').css('display','block');

                    }
                }
            });
        }
    });
    //点击登录
    $('#login a.btn-block').on("click",function(e){
        e.preventDefault();
        for(var i=0,contol=[];i<document.querySelectorAll('#login .form-control').length;i++){
            if(document.querySelectorAll('#login .form-control')[i].validity.valid){
                contol.push(1);
            }
        }
        if(contol.length==document.querySelectorAll('#login .form-control').length){
            var data=$('#form-login').serialize();
            console.log(data);
            $.ajax({
                type:"POST",
                url:"php/login.php",
                data:data,
                success:function(obj){
                    if(obj.code==1000){
                        alert("error");
                        $('.false').css('display','block');
                        $('#login-box label.col-md-5')[0].className="col-md-5 hide control-default";
                        $('#login-box label.col-md-5')[1].className="col-md-5 hide control-default";
                    }
                    else if(obj.code==1001){
                        loginSuccess(obj.msg,obj.pwd);
                    }
                }
            });
        }
    });
    //登录成功
    function loginSuccess(uname,pwd) {
        $('#login-box').css("display","none");
        sessionStorage.setItem("loginName",uname);//缓存到本地
        sessionStorage.setItem("loginPwd",pwd);
       init();
        //再次点击该超链接的跳转
        
    }
    //记住

});
