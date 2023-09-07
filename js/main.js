$(document).ready(function () {
    var currentSlide;
    var slidesCount;
    var sliderWorkCounter = $('.works__slider-counter');
    var sliderNumberCounter = $('.numbers__slider-counter');
    var sliderCommentCounter = $('.comments__slider-counter');

    var updateSliderCounter = function (slick) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderWorkCounter).text(currentSlide + "/" + slidesCount)
    };
    var updateNumSliderCounter = function (slick) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderNumberCounter).text(currentSlide + "/" + slidesCount)
    };
    var updateCommentSliderCounter = function (slick) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCommentCounter).text(currentSlide + "/" + slidesCount)
    };

    $('.works__slider').on("init", function (event, slick) {
        $('.works__slider').append(sliderWorkCounter);
        updateSliderCounter(slick);
    });
    $('.works__slider').on("afterChange", function (event, slick) {
        updateSliderCounter(slick);
    });

    $('.types__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:false,
        nextArrow: document.querySelector('.types__slider-next-btn'),
        prevArrow: document.querySelector('.types__slider-prev-btn'),
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.works__slider').slick({
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "5vw",
        focusOnSelect: true,
        nextArrow: document.querySelector('.works__slider-next-btn'),
        prevArrow: document.querySelector('.works__slider-prev-btn'),
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    centerPadding: "0",

                }
            }
        ]
    });



    $('.numbers__slider').slick({
        dots: false,
        nextArrow: document.querySelector('.numbers__slider-next-btn'),
        prevArrow: document.querySelector('.numbers__slider-prev-btn'),
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 610,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.numbers__slider').on("init", function (event, slick) {
        $('.numbers__slider').append(sliderNumberCounter);
        updateNumSliderCounter(slick);
    });
    $('.numbers__slider').on("afterChange", function (event, slick) {
        updateNumSliderCounter(slick);
    });

    $('.comments__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        nextArrow: document.querySelector('.comments__slider-next-btn'),
        prevArrow: document.querySelector('.comments__slider-prev-btn'),
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.comments__slider').on("init", function(event, slick){
        $('.works__slider').append(sliderCommentCounter);
        updateCommentSliderCounter(slick);
    });
    $('.comments__slider').on("afterChange", function(event, slick){
        updateCommentSliderCounter(slick);
    });
});


