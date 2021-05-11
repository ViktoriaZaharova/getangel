<?php

$recepient = "1@getangel.ru";
$sitename = "GetAngel";

$time = trim($_POST["time"]);
$phone = trim($_POST["phone"]);
$message = "Телефон: $phone \nВремя, удобное для звонка: $time";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");