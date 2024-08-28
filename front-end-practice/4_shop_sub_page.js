const $maintext = document.getElementById('maintext');
$maintext.addEventListener('click', function(){
    window.location.href = "1_main_page.html";
    })

const $arrowicon = document.getElementById('arrowicon');
$arrowicon.addEventListener('click', function(){
        window.location.href = "2_shop_page.html";
    })

const $choe = document.getElementById('choe_text');
$choe.addEventListener('click', function(){
        window.location.href = "1_main_page.html";
    })

const $shop = document.getElementById('shop_text');
$shop.addEventListener('click', function(){
        window.location.href = "2_shop_page.html";
    })

const $order = document.getElementById('order_box');
$order.addEventListener('click', function(){
        alert(`품절되었습니다.`);
    })

const $add = document.getElementById('add-to-cart_box');
$add.addEventListener('click', function(){
        alert(`품절되었습니다.`);
    })