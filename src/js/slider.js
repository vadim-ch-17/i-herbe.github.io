export  default $(document).ready(function(){

    $('.slider').slick({

        arrows:true,
        nextArrow: '<i class="fa fa-arrow-right" aria-label="Next"></i>',
        prevArrow: '<i class="fa fa-arrow-left" aria-label="Previous"></i>',
        // adaptiveHeight:false,
        slidesToShow:3,
        slidesToScroll:1,
        speed:500,
        easing:'linear',
        // infinite:true,
        autoplay:true, // автопролистывание
        autoplaySpeed: 1000,
        // pauseOnFocus:true, // остановка при наведении
        // pauseOnHover:true,
        // pauseOnDotsHover:true,
        // drggable:false, //пролистывание мышкой
        // swipe:true, //пролистывание на мобильном
        centerMode:true,
        // rows:1,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });

});
