$(document).ready(function(){

    //배너 스와이퍼
    var swiper = new Swiper(".banner-wrap.mySwiper", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 3000
        }
    });

    //sec-5 스와이퍼
    var swiper = new Swiper(".sec-5-wrap.mySwiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    });

    //sec-2 tab
    $('.sec-2 .tabs li').click(function(){
        //tabs
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        
        //tab-content
        var result = $(this).attr('data-alt');

        $('.sec-2 .in-content').removeClass('active');
        $(`#${result}`).addClass('active');
    });


    //미디어쿼리
    var ww = $(window).width();
    media();

    function media(){
        if(ww >= 1200){
            //스크롤이벤트
            $(window).scroll(function(){
                var sct = $(window).scrollTop();
                console.log(sct);
                if(sct > 50){
                    $('.header-top').css({'display':'none'});
                    $('.header-fix').addClass('active');
                    $('.menu-tab-content').addClass('on')
                }else{
                    $('.header-top').css({'display':''});
                    $('.header-fix').removeClass('active');
                    $('.menu-tab-content').removeClass('on')
                }
            });

            //header-tab
            $('.menu').mouseenter(function(){
                var tabs = $(this).attr('data-alt');

                $('.menu-content').removeClass('active');
                $(`#${tabs}`).addClass('active');
                $('.menu-tab-content').addClass('active');
                $('.header-fix .inner-box').addClass('active');
            });
            $('.menu-tab-content').mouseleave(function(){
                $(this).removeClass('active');
                $('.header-fix .inner-box').removeClass('active');
            });

             //sec-4
             $('.sec-4 .inner-gallery li').mouseenter(function(){
                var ch = $(this).attr('data-image');

                $('.sec-4 .fade-gallery-photo').css({
                    'background-image':`url(${ch})`
                });
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            });  

        }else{
            $(window).scroll(function(){
                var sct = $(window).scrollTop();
                console.log(sct);
                if(sct > 50){
                    $('.header-fix').addClass('active');
                }else{
                    $('.header-fix').removeClass('active');
                }
            });

            //btn-menu
            $('.btn-menu').click(function(){
                $(this).toggleClass('active');
                $('.header-menu').toggleClass('active');
            });

             //sec-4
             $('.sec-4 .inner-gallery li').mouseenter(function(){
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            });              

        }
    };

});
