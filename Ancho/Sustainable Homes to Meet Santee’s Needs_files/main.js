(function($){

    $(document).ready(function (){
        var conIframe = $('.contact .form-container iframe');
            /*if ($(window).width() > 850) {
                console.log('more than 768');
                $(conIframe).height('740px');
            }
            if ($(window).width() <= 850 && $(window).width() > 360) {
                console.log('less than 768');
                $(conIframe).height('780px');
            }*/
             if ($(window).width() <= 360) {
                console.log('less than 360');
                $(conIframe).height('750px');
            }

        if ($("body.index").length){           

            $(".navigation a[data-section]").click(function (event){
                event.preventDefault();

                $section = $(this).attr("data-section");
                console.log($section);
                if ($($section).length){

                    $('html, body').css('scroll-behavior', 'inherit').animate({
                        scrollTop: $($section).offset().top
                    }, 500);
                }

            });
        } 

        $('.carousel').owlCarousel({
            items:1,
            margin:10,
            nav:true,
            smartSpeed: 900,
        });       
        
        
        function imgBounce() {
            var bounceImg = $('.section-bg.has-inner-arrow');
            $(bounceImg).removeClass('bounce');
        }

        setTimeout(imgBounce, 2900);

        
       


    });

})(jQuery);

