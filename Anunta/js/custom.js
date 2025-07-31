document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('mynav').classList.add('fixed-top');
            navbar_height = document.querySelector('.header_area').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('mynav').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    });
});

// Slider Settings for Our Recognition
$(".marq_slider").slick({
    slidesToShow: 6,
    slidesToScroll: 10,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    cssEase: 'linear',
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 575,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
    ]
});

// Slider Settings for Tailor Solution Slider
$(".dw_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    loop: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
            initialSlide: 1,
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

// Slider Settings for Success Stories
$(".home_slick_list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});

// Slider Settings for Client Review
$(".cl_review_slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true
});

// Slider Settings for Our Recognition
$(".reco_slide").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 575,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
    ]
});

// Slider Settings for Employee Testimonial
$(".emp_test_slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true
});