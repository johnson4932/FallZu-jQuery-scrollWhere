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

        return $(this);
    };
})(jQuery);
