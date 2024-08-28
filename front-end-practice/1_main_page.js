const $shop = document.getElementById('shop');
$shop.addEventListener('click', function(){
    window.location.href = "2_shop_page.html";
});

const $aboutus = document.getElementById('aboutus');
$aboutus.addEventListener('click', function(){
    window.location.href = "3_aboutus_page.html";
})

function test(e) {
    var myForm = document.getElementById("pearl");
    myForm.action="6_pearl_page.html";
}