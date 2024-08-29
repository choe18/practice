const $shop = document.getElementById('shop');
$shop.addEventListener('click', function(){
    window.location.href = "2_shop_page.html";
});

const $aboutus = document.getElementById('aboutus');
$aboutus.addEventListener('click', function(){
    window.location.href = "3_aboutus_page.html";
})

// function test(e) {
//     var myForm = document.getElementById("pearl");
//     // myForm.action="6_pearl_page.html";
//     // pearl 입력 시 6_pearl_page.html 로 이동
//     myForm.action="http://127.0.0.1:5502/front-end-practice/6_pearl_page.html?";
// }

window.goPlaces = function(){
    var input = document.getElementById("myInput").value;
    switch(input){
    case 'pearl':
    window.location.href = "6_pearl_page.html";
    break;
    case 'silver':
    window.location.href = "7_silver_page.html";
    break;
    default:
    alert("검색어를 입력하세요.");
}  
}