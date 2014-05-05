(function($) {
    $.fn.scrollWhere = function() {
        $('.fallzu-scroll-return').hide();
        $(window).scroll(function() {
            var returnTop = $('.fallzu-scroll-return-top').stop(true, true);
            var returnBottom = $('.fallzu-scroll-return-bottom').stop(true, true);
            var windowHeight = $(this).height();
            var documentHeight = $(document).height();
            var scrollHeight = $(this).scrollTop();

            //Top
            if (scrollHeight) {
                returnTop.fadeIn();
            } else {
                returnTop.fadeOut();
            }

            //Bottom
            if (windowHeight + scrollHeight < documentHeight) {
                returnBottom.fadeIn();
            } else {
                returnBottom.fadeOut();
            }
        });

        //Top
        $('.fallzu-scroll-return-top').click(function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, 500);
        });

        //Bottom
        $('.fallzu-scroll-return-bottom').click(function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:$(document).height() - $(window).height()}, 500);
        });

        //Remember
        $('.fallzu-scroll-remember').click(function(e) {
            e.preventDefault();
            var windowHeight = $(window).scrollTop();
            $('.fallzu-scroll-area').append('<div class="fallzu-scroll-btn fallzu-scroll-anchor" data-scroll="' + windowHeight + '"><a href="#"><i class="fa fa-file-text-o fa-3x"></i></a></div>');

            //Anchor
            $('.fallzu-scroll-area .fallzu-scroll-btn:last').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({scrollTop:$(this).data('scroll')}, 500);
            });
        });

        return $(this);
    };
})(jQuery);
