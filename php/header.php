<?php 
 header('Content-type:text/html;charset=UTF-8');
?>
<div id="login-box">
        <div id="state">
            <div id="close"><a href="#">X</a></div>
            <div>
                <div id="main-tab-box">
                    <ul id="main-tab">
                        <li class="current"><a href="#login">登录</a></li>
                        <li><a href="#regist">注册</a></li>
                    </ul>
                </div>
                <div class="content reg-container" id="login" >
                    <div class="false">
                        <p>用户名或密码不正确，请重新输入！</p>
                    </div>
                    <form class="form form-horizontal" id="form-login" action="#">
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="username">用户名:</label>
                            <div class="col-md-5">
                                <input id="login-username" type="text" name="uname" class="form-control" autofocus placeholder="请输入用户名" required pattern="^[a-zA-Z0-9]{8,16}$">
                            </div>
                            <label id="login-usernameTip" class="col-md-5 hide control-default">请输入8至16位的英文或数字</label>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="password">密码:</label>
                            <div class="col-md-5">
                                <input id="login-password" type="password" name="upwd" class="form-control" placeholder="请输入密码" required pattern="^[a-zA-Z0-9]{6,12}$">
                            </div>
                            <label id="login-passwordTip" class="col-md-5 hide control-default">请输入6至12位的英文或数字</label>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" id="auto">下次自动登录
                            <a id="question">登录遇到问题</a>
                        </div>
                        <div class="form-group ">
                            <div class="col-md-5 ">
                                <a  class="btn btn-success btn-block" id="login-btn">登录</a>
                            </div>
                        </div>
                    </form>

                </div>
                <div class="content reg-container" id="regist">
                    <form class="form form-horizontal" id="form-regist" action="#">
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="username">用户名:</label>
                            <div class="col-md-5">
                                <input id="username" name="uname" type="text" class="form-control" autofocus placeholder="请输入用户名" required pattern="^[a-zA-Z0-9]{8,16}$">
                            </div>
                            <label id="usernameTip" class="col-md-5 hide control-default">请输入8至16位的英文或数字</label>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="password">密码:</label>
                            <div class="col-md-5">
                                <input id="password" name="upwd" type="password" class="form-control" placeholder="请输入密码" required pattern="^[a-zA-Z0-9]{6,12}$">
                            </div>
                            <label id="passwordTip" class="col-md-5 hide control-default">请输入6至12位的英文或数字</label>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="birth">出生日期:</label>
                            <div class="col-md-5">
                                <input id="birth" type="date" name="birthday" class="form-control" placeholder="请输入出生日期">
                            </div>
                            <label id="birthTip" class="col-md-5 hide control-default">请选择你的出生日期</label>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="home">收货地址:</label>
                            <div class="col-md-5">
                                <input id="home" type="text" name="location" class="form-control" placeholder="请输入个人收货地址" required>
                            </div>
                            <label id="homeTip" class="col-md-5 hide control-default">请准确输入你的收货地址</label>
                        </div>
                        <div class="form-group ">
                            <div class="col-md-5 ">
                                <a  class="btn btn-success btn-block" id="regist-btn">注册</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal">
                <h3>注册成功，是否直接登录？</h3>
                <p><a href="#" id="yes">好的</a><a href="#" id="wait">稍后再说</a></p>
            </div>
        </div>
    </div>
<div class="main-top">
    <!--logo-->
    <div class="logo lf">
        <a href="index.html"><img src="images/logo.jpg" width="157" height="94"> </a>
    </div>
    <!--城市选择和目录-->
    <div class="menu lf">
        <!--城市选择-->
        <div class="select-city">
            <ul class="select">
                <li class="city1">
                   <select name="" id="start">
                       <option value="hz" selected>杭州</option>
                       <option value="wz">温州</option>
                   </select>
                </li>
            </ul>
        </div>
        <!--目录-->
        <div class="top-nav">
            <ul class="hd">
                <li>
                    <a href="index.html">
                    <span>Home Page</span>
                    <br>
                    首&nbsp;页</a>
                </li>
                <li>
                    <a href="products.html">
                        <span>Products</span>
                        <br>
                        蛋糕目录</a>
                </li>
                <li>
                    <a href="happiness.html">
                        <span>Happiness</span>
                        <br>
                        述说幸福</a>
                </li>
                <li>
                    <a href="story.html">
                        <span>Story</span>
                        <br>
                        品牌故事</a>
                </li>
                <li>
                    <a href="vip-home.html">
                        <span>Vipcake Home</span>
                        <br>
                        会员中心</a>
                        <ul class="list">
                            <li><a href="vip-home.html">会员活动</a></li>
                            <li><a href="vip-home2.html">会员申请</a></li>
                            <li><a href="vip-home3.html">会员特享DIY</a></li>
                        </ul>
                </li>
            </ul>
        </div>
    </div>
    <!--登录注册-->
    <div class="top-right rt">
        <ul>
            <li class="topr">
                <a href="#" id="login-btn">登录</a>
                <a href="center.html" id="login-btn1" class="hide active"></a>
                <a href="#" id="regist-btn">注册</a>
                <a href="#" class="hide" id="enter">[退出]</a>
                <a href="centerOrder.html">我的订单</a>
                <a href="payCart.html" class="none" id="none">购物车（<span id="number">0</span>）</a>
            </li>
            <li>
                <a href="#">杭州市内免费送达</a>
            </li>
            <li>
                <a href="#">联系电话：400-123-234</a>
            </li>
        </ul>
    </div>
    <div id="msg">已成功加入购物车！</div>
</div>