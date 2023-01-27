    $(window).on("load", function () {
        function fade() {
          let animation_height = $(window).innerHeight() * 0.5;
          let ratio = Math.round((1 / animation_height) * 10000) / 10000;
            $(".fadeR").each(function () {
            let objectTop = $(this).offset().top;
            let windowBottom = $(window).scrollTop() + $(window).innerHeight();
            if (objectTop < windowBottom) {
            if (objectTop < windowBottom - animation_height) {
                $(this).css({
                    transition: "opacity 1s linear",
                    transition: "left 1s linear",
                    opacity: 1,
                    left: "0px",
                });
                } else {
                $(this).css({
                    transition: "opacity 1s linear",
                    opacity: (windowBottom - objectTop) * ratio,
                    transition: "left 1s linear",
                    left: `${1920 * (1 - (windowBottom - objectTop) * ratio)}px`,
                });
                }
            } else {
                $(this).css({
                opacity: 0,
                left: "1920px",
                });
            }
            });
        }
        $(".fadeR").css({
            opacity: 0,
            left: "1920px",
        });
        fade();

        $(window).scroll(function () {
            fade();
        });
        });