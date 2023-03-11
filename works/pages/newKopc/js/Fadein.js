    $(window).on("load", function () {
        function fade() {
          let animation_height = $(window).innerHeight() * 0.5;
          let ratio = Math.round((1 / animation_height) * 1000) / 10000;
            $(".fadeE").each(function () {
            let objectTop = $(this).offset().top;
            let windowBottom = $(window).scrollTop() + $(window).innerHeight();
            if (objectTop < windowBottom) {
            if (objectTop < windowBottom - animation_height) {
                $(this).css({
                    transition: "opacity 2s ease-out",
                    opacity: 1,
                });
                } else {
                $(this).css({
                    transition: "opacity 2s ease-out",
                    opacity: (windowBottom - objectTop) * ratio,
                });
                }
            } else {
                $(this).css({
                opacity: 0,
                });
            }
            });
        }
        $(".fadeE").css({
            opacity: 0,
        });
        fade();

        $(window).scroll(function () {
            fade();
        });
        });