$(window).on("load", function () {
    function fade() {
      let animation_height = $(window).innerHeight() * 0.5;
      let ratio = Math.round((1 / animation_height) * 10000) / 10000;
        $(".fadeL").each(function () {
        let objectTop = $(this).offset().top;
        let windowBottom = $(window).scrollTop() + $(window).innerHeight();
        if (objectTop < windowBottom) {
        if (objectTop < windowBottom - animation_height) {
            $(this).css({
                transition: "opacity 1s ease-out",
                transition: "right 1s ease-out",
                opacity: 1,
                right: "0px",
            });
            } else {
            $(this).css({
                transition: "opacity 1s ease-out",
                opacity: (windowBottom - objectTop) * ratio,
                transition: "right 1s ease-out",
                right: `${1920 * (1 - (windowBottom - objectTop) * ratio)}px`,
            });
            }
        } else {
            $(this).css({
            opacity: 0,
            right: "1920px",
            });
        }
        });
    }
    $(".fadeL").css({
        opacity: 0,
        right: "1920px",
    });
    fade();

    $(window).scroll(function () {
        fade();
    });
    });