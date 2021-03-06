$('.reviews-slider').slick({
    slidesToSow: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

// accordeon
function accordeon() {
    var panel = $('.panel_heading');

    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

    $('.panel_heading .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
    });
}

accordeon();

$(window).on('load resize', function () {
    if ($(window).width() < 768) {
        $('.additionally-slider:not(.slick-initialized)').slick({
            dots: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
        });
    } else {
        $(".additionally-slider.slick-initialized").slick("unslick");
    }
    if ($(window).width() < 576) {
        $('.product-slider:not(.slick-initialized)').slick({
            dots: true,
            speed: 100,
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
        });
    } else {
        $(".product-slider.slick-initialized").slick("unslick");
    }
});


// tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

    $(".tabs__content.active .product-slider").slick('setPosition');
});


$('.btn-load').on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parents().find('.panel_heading');


    if (!$this.hasClass('trigger')) {
        $this.addClass('trigger');
        $this.html('????????????');

        content.slideDown();
    } else {
        $this.removeClass('trigger');
        $this.html('???????????????????? ?????? ??????????????');

        content.slice(4).slideUp();
    }
});


// ?????????????????? ???????? (??????????????????)
$(function () {
    let overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay'),
        modal = $('.modal__div');

    open_modal.on('click', function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

// mobile menu
$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

// mail
$(".form").submit(function () {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        alert("?????????????? ???? ????????????! ?????????? ???? ?? ???????? ????????????????.");

        $(".form").trigger("reset");
    });
    return false;
});

//?????????????? ????????????
$(".go_to").on("click", function (event) {
    event.preventDefault();

    var headerHeight = $('header').height();
    var id = $(this).attr('href'),

        top = $(id).offset().top;

    //?????????????????? ?????????????? ???? ???????????????????? - top ???? 500 ????
    $('body,html').animate({scrollTop: top - headerHeight}, 500);
    $('.mobile-menu').fadeOut();
});

//?????????????? ???????????? end