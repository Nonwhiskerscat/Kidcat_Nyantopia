    $(window).on("load", function () {
        function fade() {
          let animation_height = $(window).innerHeight() * 0.5;
          let ratio = Math.round((1 / animation_height) * 10000) / 10000;
            $(".fadeB").each(function () {
            let objectTop = $(this).offset().top;
            let windowBottom = $(window).scrollTop() + $(window).innerHeight();
            if (objectTop < windowBottom) {
            if (objectTop < windowBottom - animation_height) {
                $(this).css({
                    transition: "opacity 1s ease-out",
                    transition: "top 1s ease-out",
                    opacity: 1,
                    top: "0px",
                });
                } else {
                $(this).css({
                    transition: "opacity 1s ease-out",
                    opacity: (windowBottom - objectTop) * ratio,
                    transition: "top 1s ease-out",
                    top: `${600 * (1 - (windowBottom - objectTop) * ratio)}px`,
                });
                }
            } else {
                $(this).css({
                opacity: 0,
                top: "600px",
                });
            }
            });
        }
        $(".fadeB").css({
            opacity: 0,
            top: "600px",
        });
        fade();

        $(window).scroll(function () {
            fade();
        });
        });