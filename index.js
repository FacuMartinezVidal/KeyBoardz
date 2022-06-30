$(document).ready(function(){
    $(window).scroll(function(){
        var header= $('header'),
        scroll=$(window).scrollTop();
        if (scroll>=150){
            header.addClass('fixed')
        }
    })
})
