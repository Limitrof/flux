<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
		<title>agv-aftermarket</title>
		<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
			<!-- Optional theme -->
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
				<!-- Latest compiled and minified JavaScript -->
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
				<link rel="stylesheet" href="dist/style.css"/>
				<link rel="stylesheet" media="print" href="dist/print.css"/>

				<script>

					$(document).ready(function() {
                    ///////////////////////////
                    //


                    //
                    ///////////////////////////////


                    function moveBillContainer(){
                        //////////
                        // promo block
                        if($('#staticPriceBrandPromo').offset().left > 100)
                        {

                            $('#staticPriceBrandPromo').css("height","300px");
                            var basePosition = $('#app-brand-promo').offset().top;
                            var startPosition = $('#staticPriceBrandPromo').offset().top;
                            var bottomPosition = $('#longBlueRowBottom').offset().top;
                            //console.log("bottomPosition="+bottomPosition);

                            var staticPositionPlusHeight = $('#staticPriceBrandPromo').offset().top +  410;
							/* console.log("bottomPositionPlusHeight="+staticPositionPlusHeight);
							 console.log ($('#staticPrice').offset().top);
							 console.log ($(window).scrollTop()); */
                            //if position smaller then current top & currentPos + Height < than longBlueRowBottom
                            var currStaticIfNotMove = $('#staticPriceBrandPromo').offset().top - $(window).scrollTop();
                            if ( currStaticIfNotMove < 100 && staticPositionPlusHeight < bottomPosition){
                                //if ( currStaticIfNotMove < 100){
                                //console.log('bzzz '+ currStaticIfNotMove);
                                var forNewPos =  $(window).scrollTop() + 100;
                                //console.log("forNewPos="+forNewPos);
                                $('#staticPriceBrandPromo').offset({"top":forNewPos});
                            }
                            $('#staticPriceBrandPromo').offset().top
                            if ( ( $('#staticPrice').offset().top >(basePosition +100) ) && currStaticIfNotMove > 100 ){
                                //console.log("left buttom position");
                                var forNewPos =  $(window).scrollTop() + 100;
                                //console.log("forNewPos="+forNewPos);
                                $('#staticPriceBrandPromo').offset({"top":forNewPos});
                            }
                        } else {
                            $('#staticPriceBrandPromo').css({"margin-top":"10px","top":"0px","height":"470px"});
                        }
                        //
                        //////////////




                        if($('#staticPrice').offset().left > 100) // якщо позиція <div id="staticPrice"> зліва більша за 100
                        {
                            $('#staticPrice').css("height","300px"); // присвоїти <div id="staticPrice"> висоту 300px
                            var basePosition = $('#app-root').offset().top; // створит змінну і їй присвоїти позицію top <div id="app-root">
                            var startPosition = $('#staticPrice').offset().top; // створит змінну і їй присвоїти позицію top <div id="staticPrice">
                            var bottomPosition = $('#longBlueRowBottom').offset().top; // створит змінну і їй присвоїти позицію top <div id="longBlueRowBottom">
                            //console.log("bottomPosition="+bottomPosition);

                            var staticPositionPlusHeight = $('#staticPrice').offset().top +  410; // створит змінну, їй присвоїти позицію top <div id="staticPrice">, і додати 410px
							/* console.log("bottomPositionPlusHeight="+staticPositionPlusHeight);
							 console.log ($('#staticPrice').offset().top);
							 console.log ($(window).scrollTop()); */
                            //if position smaller then current top & currentPos + Height < than longBlueRowBottom
                            var currStaticIfNotMove = $('#staticPrice').offset().top - $(window).scrollTop();				// створити змінну, присвоїти їй позицію top <div id="staticPrice"> і відняти величину прокрутки.
                            if ( currStaticIfNotMove < 100 && staticPositionPlusHeight < bottomPosition){ // якщо позиція staticprice при прокрутці менша за 100 і позиція staticprice +410 менша за нижню межу
                                //if ( currStaticIfNotMove < 100){
                                //console.log('bzzz '+ currStaticIfNotMove);
                                var forNewPos =  $(window).scrollTop() + 100; // створити змінну, яка дорівнює розміру скролу +100
                                //console.log("forNewPos="+forNewPos);
                                $('#staticPrice').offset({"top":forNewPos}); // зробити позицію топ staticprice, яка дорівнює forNewPos
                            }
                            $('#staticPrice').offset().top // визначити позицію топ staticPrice
                            if ( ( $('#staticPrice').offset().top >(basePosition +100) ) && currStaticIfNotMove > 100 ){ // якщо ця позиція більша за позицію сусідньої таблиці +100 і позиція при скролі більша 100
                                //console.log("left buttom position");
                                var forNewPos =  $(window).scrollTop() + 100; // створити змінну, яка дорівнює розміру скролу +100
                                //console.log("forNewPos="+forNewPos);
                                $('#staticPrice').offset({"top":forNewPos});// зробити позицію топ staticprice, яка дорівнює forNewPos
                            }
                        } else {
                            $('#staticPrice').css({"margin-top":"10px","top":"0px","height":"470px"}); // Для staticPrice
                        }


                        if($('#staticPrice1').offset().left > 100)
                        {
                            $('#staticPrice1').css("height","300px");
                            var basePosition = $('#app-root1').offset().top;
                            var startPosition = $('#staticPrice1').offset().top;
                            var bottomPosition = $('#longBlueRowBottom').offset().top;
                            //console.log("bottomPosition="+bottomPosition);

                            var staticPositionPlusHeight = $('#staticPrice1').offset().top +  410;
							/* console.log("bottomPositionPlusHeight="+staticPositionPlusHeight);
							 console.log ($('#staticPrice').offset().top);
							 console.log ($(window).scrollTop()); */
                            //if position smaller then current top & currentPos + Height < than longBlueRowBottom
                            var currStaticIfNotMove = $('#staticPrice1').offset().top - $(window).scrollTop();
                            if ( currStaticIfNotMove < 100 && staticPositionPlusHeight < bottomPosition){
                                //if ( currStaticIfNotMove < 100){
                                //console.log('bzzz '+ currStaticIfNotMove);
                                var forNewPos =  $(window).scrollTop() + 100;
                                //console.log("forNewPos="+forNewPos);
                                $('#staticPrice1').offset({"top":forNewPos});
                            }
                            $('#staticPrice1').offset().top
                            if ( ( $('#staticPrice1').offset().top >(basePosition +100) ) && currStaticIfNotMove > 100 ){
                                //console.log("left buttom position");
                                var forNewPos =  $(window).scrollTop() + 100;
                                //console.log("forNewPos="+forNewPos);
                                $('#staticPrice1').offset({"top":forNewPos});
                            }
                        } else {
                            $('#staticPrice1').css({"margin-top":"10px","top":"0px","height":"470px"});
                        }





                        if($('#staticPrice2').offset().left > 100)
                        {
                            $('#staticPrice2').css("height","300px");
                            var basePosition = $('#app-root2').offset().top;
                            var startPosition = $('#staticPrice2').offset().top;
                            var bottomPosition = $('#longBlueRowBottom').offset().top;
                            //console.log("bottomPosition="+bottomPosition);

                            var staticPositionPlusHeight = $('#staticPrice2').offset().top +  410;
							/* console.log("bottomPositionPlusHeight="+staticPositionPlusHeight);
							 console.log ($('#staticPrice').offset().top);
							 console.log ($(window).scrollTop()); */
                            //if position smaller then current top & currentPos + Height < than longBlueRowBottom
                            var currStaticIfNotMove = $('#staticPrice2').offset().top - $(window).scrollTop();
                            if ( currStaticIfNotMove < 100 && staticPositionPlusHeight < bottomPosition){
                                //if ( currStaticIfNotMove < 100){
                                //console.log('bzzz '+ currStaticIfNotMove);
                                var forNewPos =  $(window).scrollTop() + 100;
                                //console.log("forNewPos="+forNewPos);
                                $('#staticPrice2').offset({"top":forNewPos});
                            }
                            $('#staticPrice2').offset().top
                            if ( ( $('#staticPrice2').offset().top >(basePosition +100) ) && currStaticIfNotMove > 100 ){
                                //console.log("left buttom position");
                                var forNewPos =  $(window).scrollTop() + 100;
                                //console.log("forNewPos="+forNewPos);
                                $('#staticPrice2').offset({"top":forNewPos});
                            }
                        } else {
                            $('#staticPrice2').css({"margin-top":"10px","top":"0px","height":"470px"});
                        }





                    }
                    $( window ).resize(moveBillContainer);
                    $( window ).scroll(moveBillContainer);


                });
                    </script>
                    </head>
                    <body>
                    <!-- only for printer title -->
                    <div id="titleprint"><img src="img/titlepint.jpg"/></div>
                    <!--div style="position: fixed;top:200px;left:100px;background-image: url('labut.gif');width:80px;height:50px;"></div-->
                    <div class="xxx" data-name="quantity" data-value="10" data-id="1"></div>
                    <div id="longBlueRow" class="row">
                    <div class="col-md-12">
                    <img id="logoImg" src="img/logo.png"/>
                    <div id="link1">
                    <a href="http://agv-aftermarket.com/">AGV Aftermarket</a>
                    </div>
                    </div>
                    </div>
                    <div id="longImg"></div>
                    <!-- mail success block -->
                    <div class="alert alert-success" id="success-alert">
                    <button type="button" class="close" data-dismiss="alert">x</button>
                    <strong>Спасибо!</strong>
                    Ваше письмо отправлено.st.
                    </div>
                    <!---->


                    <div id="mainTab" class="tabbable tabbablefirst">
                    <ul class="nav nav-tabs">
                    <li class="active"><a href="#tab10" data-toggle="tab">AGV</a></li>
                    <li><a href="#tab20" data-toggle="tab">AGV lab</a></li>
                    </ul>
                    <div class="tab-content">
                    <div class="tab-pane active" id="tab10">
                    <!-----------------------------------second tab START------------------------>
                    <div class="tabbable">
                    <ul class="nav nav-tabs second-level">
                    <li><a href="#tab100" data-toggle="tab">Marketing</a></li>
                    <!-- li class="active"><a href="#tab200" data-toggle="tab">Sales Push Campaignes</a></li-->
                    <li><a href="#tab200" data-toggle="tab">Sales Push Campaignes</a></li>
                    <li><a href="#tab300" data-toggle="tab">Direct Research</a></li>
                    <li class="active"><a href="#tab400" data-toggle="tab">Brand Promotion</a></li>
                    <li><a href="#tab500" data-toggle="tab">POS Products 2</a></li>
                    </ul>
                    <div class="tab-content">
                    <div class="tab-pane" id="tab100">
                    <p style="margin-top:10px;"></p>
                    <div id="app-root2">
                    </div>
                    </div>
                    <div class="tab-pane" id="tab200">
                    <!--------------------------------third tab START-------------------->
                    <div class="tabbable">
                    <ul class="nav nav-tabs third-level">
                    <!--li><a href="#tab1000" data-toggle="tab">Расчет от бюджета</a></li-->
                    <li class="active"><a href="#tab2000" data-toggle="tab">Самостоятельный расчет</a></li>
                    </ul>
                    <div class="tab-content ">
                    <!--div class="tab-pane" id="tab1000">
                    <p>Расчет от бюджета</p>
                    <div id="app-root1">

                    </div>
                    </div-->
                    <div class="tab-pane active" id="tab2000">
                    <!--p style="margin-top:20px;">Самостоятельный расчет</p-->
                    <div id="app-root">
                    </div>
                    </div>
                    </div>
                    </div>
                    <!--------------------------------third tab FINISH-------------------->
                    </div>
                    <div class="tab-pane" id="tab300">
                    Direct Research
                    </div>
                    <div class="tab-pane active" id="tab400">

                    <div id="app-brand-promo"></div>
                    </div>
                    <div class="tab-pane" id="tab500">
                    POS Products 2
                    </div>
                    </div>
                    </div>
                    <!-----------------------------------second tab START------------------------>
                    </div>
                    <div class="tab-pane" id="tab20">
                    <!--AGV lab START-->
                    <p>AGV lab...</p>
                    <!--AGV lab FINISH-->
                    </div>
                    </div>
                    </div>
                    <div style="width:30%;margin:10px auto;">
                    <button class="btn btn-primary hipstr" type="button" onclick="window.print()" />Распечатать</button>
                    <a href="#defaultModal"data-toggle="modal">
                    <button class="btn btn-primary hipstr" type="button"  onclick="moveInfoInMail()" />Отправить заявку</button>
                    </a>
                    </div>


                    <div id="defaultModal" class="modal">
                    <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Отправить заявку</h4>
                    </div>
                    <div class="modal-body">
                    <form name="agvfeedback" action="" method="post">

                    <input type='title' name='title' placeholder='ФИО*' required/><br><br>
                    <input type='email' name='email' placeholder='E-mail*' required/><br><br>
                    <input type='text' name='company' placeholder='Компания*' required/><br><br>
                    <input type='hidden' name='pricelist' id='forPrice' value='not else'/>
                    <textarea name='msg' placeholder='Комментарий' style='width:300px;height:200px;'></textarea><br><br>
                    <input type="submit" value="Отправить" name="submit"></div>
                    </form>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Отменить</button>
                    </div>
                    </div>
                    </div>
                    </div>

                    <script type="text/javascript">
                    jQuery( "#feedback_div" ).hide();
                    <?php

                    if(isset($_REQUEST['modalform']) && $_REQUEST['modalform']==1):?>
                    jQuery(function() {
                        jQuery( "#feedback_div" ).dialog({width:400,modal: true});
                    });
                    <?php endif; ?>

					/* 				jQuery("#getFeedbackForm").click(function(){
					 jQuery( "#feedback_div" ).dialog({width:400,modal: true});
					 }); */

                    //jQuery().colorbox({html:jQuery("#feedback_div").html()});
                    {/*function SendForm(){
					 if(agvfeedback.fio.value=='') {
					 alert("Укажите ФИО отправителя!");
					 return false;
					 }
					 if(agvfeedback.email.value=='') {
					 alert("Укажите E-mail отправителя!");
					 return false;
					 }
					 if(agvfeedback.company.value=='') {
					 alert("Укажите Компанию отправителя!");
					 return false;
					 }
					 /!*if(agvfeedback.msg.value=='') {
					 alert("Укажите текст сообщения!");
					 return false;
					 }*!/
					 //agvfeedback.can_send.value='ok';
					 agvfeedback.submit();
					 }*/}

                    function moveInfoInMail(){
                        var forSendAsText=jQuery("#staticPrice").html();
                        jQuery("#forPrice").val(forSendAsText);
                    }

                    </script>


                    <?php
                    // если была нажата кнопка "Отправить"
                    if($_POST['submit']) {

                            // $_POST['title'] содержит данные из поля "Тема", trim() - убираем все лишние пробелы и переносы строк, htmlspecialchars() - преобразует специальные символы в HTML сущности, будем считать для того, чтобы простейшие попытки взломать наш сайт обломались, ну и  substr($_POST['title'], 0, 1000) - урезаем текст до 1000 символов. Для переменной $_POST['mess'] все аналогично
                            $title = substr(htmlspecialchars(trim($_POST['title'])), 0, 1000);
                            $mess =  substr(htmlspecialchars(trim($_POST['msg'])), 0, 1000000);
                            $mess .= '<hr />'.$_POST['pricelist'];
                            // $to - кому отправляем
                            $to = 'zdan@bk.ru';
                            // $from - от кого
                            $from=$_POST['email'];
                            $from .= "Content-type: text/html\r\n";
                            // функция, которая отправляет наше письмо.

                         if(mail($to, $title, $mess, 'From:'.$from))	{
                                echo '<script>$(document).ready (function(){

                                    $("#success-alert").alert();
                                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                                   $("#success-alert").slideUp(500);
                                    });

                     });</script>';
                            }	else	{ echo 'Что-то не так.';	}
                    }
                    ?>

                    <!-- bottom-->
                    <div id="longBlueRowBottom" class="row">
                    <div class="col-md-12">
                    <!--img id="logoImgBottom" src="logo.png"/-->
                    <div id="linkBottom">
                    <a href="http://agv-aftermarket.com/">Copyright © 2016. AGV Aftermarket.</a>
                    </div>
                    </div>
                    </div>





                    <script src="dist/bundle.min.js"></script>
                    </body>
                    </html>
