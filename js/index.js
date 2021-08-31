$(document).ready(function () {
    //navbar-toggler
    $('.navbar-toggler').on('click', function () {
        $('nav .one').toggleClass('top');
        $('nav .two').toggleClass('hidden');
        $('nav .three').toggleClass('bottom');
    })

   

    //venobox
    $(document).ready(function () {
        $('.venobox').venobox();
    });

    //scroll navbar
    $('nav li a').on('click',function(){

        //add active class to navbar in links
       // $(this).addClass('active').parent().siblings().find('a').removeClass('active')


        $('html,body').animate({
            scrollTop : $('#' + $(this).data('scroll')).offset().top -100
        })
    })
    //scroll bottom

    $('.header .info .btn-danger').on('click',function(){

        //add active class to navbar in links
       // $(this).addClass('active').parent().siblings().find('a').removeClass('active')


        $('html,body').animate({
            scrollTop : $('#' + $(this).data('scroll')).offset().top -100
        })
    })

    //button up
    $(window).scroll(function(){
        if($(this).scrollTop()>=2000){
            $('.up').fadeIn(2000)
        }
        else{
            $('.up').fadeOut(2000)
        }
    })

    $('.up').on('click',function(){
        $('html,body').animate({
            scrollTop : 0
        })
    })

    //nice scroll
    $(function() {  
        $("body").niceScroll({
            cursorcolor : '#f82249',
            cursorwidth : '10px',
            cursorborder : 'none',
            zindex : '99999',
            //cursorminheight: '32'
        })
    });





    

})
 //mixItUP
 var mixer = mixitup('.gallary');