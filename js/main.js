//WOW
new WOW().init();
//Carousel
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    centeredSlides: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//Gắn thanh scroll
$('#vehicle__list').mCustomScrollbar({
    theme: 'dark',
});
//Di chuyển đến vị trong trong thanh scroll
function move(value) {
    $('#vehicle__list').mCustomScrollbar("scrollTo", value, {
        scrollEasing: 'easeOut',
    })
}
$('.vehicles__nav ul li a').click(function() {
        if ($(this).attr('id') === "cars-nav") {
            move("#cars");
        } else if ($(this).attr('id') === "suvs-nav") {
            move("#crossover");
        } else if ($(this).attr('id') === "minivan-nav") {
            move("#minivan");
        } else if ($(this).attr('id') === "envirimental-nav") {
            move("#envirionmental");
        } else {
            move("#future");
        }
    })
    //Thêm xóa class active, chỉnh popup vehicle, thêm hiệu ứng enimated
var idActive = "";
$('#header-navbar >a:not(.navbar-brand)').click(function() {
    if (idActive === "") {
        idActive = $(this).attr('id');
        $(this).addClass('active');
        if ($(this).attr('id') === "vehicle-nav") {
            $("#vehicles").removeClass('hide-vehicle');
            $('.vehicles__nav').addClass('fadeInDown');
            $('#vehicle__list').addClass('fadeInUp');
        }
    } else {
        if (idActive === $(this).attr('id')) {
            $(this).removeClass('active');
            idActive = "";
            $('.vehicles__nav').addClass('fadeOutUp');
            $('#vehicle__list').addClass('fadeOutDown');
            setTimeout(function() {
                $("#vehicles").addClass('hide-vehicle');
                $('.vehicles__nav').removeClass('fadeOutUp');
                $('#vehicle__list').removeClass('fadeOutDown');
            }, 300)
        } else {
            $('#header-navbar > a').removeClass('active');
            $(this).addClass('active');
            idActive = $(this).attr('id');
            if (idActive !== "vehicle-nav") {
                $('.vehicles__nav').addClass('fadeOutUp');
                $('#vehicle__list').addClass('fadeOutDown');
                setTimeout(function() {
                    $("#vehicles").addClass('hide-vehicle');
                    $('.vehicles__nav').removeClass('fadeOutUp');
                    $('#vehicle__list').removeClass('fadeOutDown');
                }, 300)
            } else {
                $("#vehicles").removeClass('hide-vehicle');
                $('.vehicles__nav').addClass('fadeInDown');
                $('#vehicle__list').addClass('fadeInUp');
            }
        }
    }
})
$('#vedicle__close').click(function() {
    $('.vehicles__nav').addClass('fadeOutUp');
    $('#vehicle__list').addClass('fadeOutDown');
    setTimeout(function() {
        $("#vehicles").addClass('hide-vehicle');
        $('.vehicles__nav').removeClass('fadeOutUp');
        $('#vehicle__list').removeClass('fadeOutDown');
    }, 300)
    $('#header-navbar a').removeClass('active');
    idActive = "";
})
$('.vehicle__product').addClass('animated fadeInUp');
//Carousel bootstrap
$('.carousel-indicators-config li').click(function() {
        $('.carousel-indicators-config li').removeClass('active');
        $(this).addClass('active');
    })
    // Indicator      
$('.indicators-xs-header').click(function() {
    $('.carousel-indicators-xs ol').slideToggle();
    if ($('.indicators-xs-header i').hasClass('transform-rotate')) {
        $('.indicators-xs-header i').removeClass('transform-rotate')
    } else {
        $('.indicators-xs-header i').addClass('transform-rotate')
    }

})
$('.carousel-indicators-xs ol li').click(function() {
    $('.indicators-title span').html($(this).html());
    $('.carousel-indicators-xs ol').slideUp();
})
var count = 0;
$('.carousel-control-prev').click(function() {
    $('.carousel-indicators-config li').removeClass('active')
    if (count == 0) {
        count = 4;
    } else {
        count--;
    }
    $('.carousel-indicators-config li').each(function(i) {
        if (i == count) {
            $(this).addClass('active');
            $('.indicators-title span').html($(this).html());
        }
    })
})
$('.carousel-control-next').click(function() {
        $('.carousel-indicators-config li').removeClass('active')
        if (count == 4) {
            count = 0;
        } else {
            count++;
        }
        $('.carousel-indicators-config li').each(function(i) {
            if (i == count) {
                $(this).addClass('active');
                $('.indicators-title span').html($(this).html());
            }
        })
    })
    //BACK TO TOP
$('.back-to-top').click(function() {
        $('body,html').animate({
                scrollTop: 0
            },
            1000)
    })
    //Footer
function collapse() {
    var width = $(window).width();
    if (width >= 751) {
        $('.collapse-ul').removeClass('collapse');
    } else {
        $('.collapse-ul').addClass('collapse');
    }
}
$(window).resize(function() {
    collapse();
})
$(document).ready(function() {
    collapse();
})