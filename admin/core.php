<?php
$action = $_POST['action'];

require_once 'function.php';

switch ($action) {
    case 'init':
        init();
        break;
    case 'selectOneGoods':
        selectOneGoods();
        break;
    case 'updateGoods':
        updateGoods();
        break;
    case 'neweGoods':
        newGoods();
        break;
    case 'loadGoods':
        loadGoods();
        break;
    case 'getGoods':
        getGoods();
        break;
    case 'getGoods2':
        getGoods2();
        break;
    case 'getGoods3':
        getGoods3();
        break;
    case 'getGoods4':
        getGoods4();
        break;
//    case 1:
//        echo "i равно 1";
//        break;
//    case 2:
//        echo "i равно 2";
//        break;
}