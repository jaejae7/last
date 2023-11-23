$(document).ready(function () {
    // .tabmenu input 이 체크 될 때, 해당 input의 부모인 li만 toggleClass 
    $('li').click(function () {
        // 다 background 넣어놔
        //클릭한 li background 없애기
        $('li').css('background','rgba(101, 114, 138, 0.75)')
        $(this).css('background','none')
    })
})