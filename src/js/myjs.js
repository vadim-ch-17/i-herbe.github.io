$(document).ready(function(){
	$('.header__burger').click(function(){
		$('.header__burger, .header__menu, .logo_nav_burger, .logo_icon').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
 
    $('.slider').slick({
    	
        arrows:true,
        nextArrow: '<i class="fa fa-arrow-right" aria-label="Next"></i>',
 		 prevArrow: '<i class="fa fa-arrow-left" aria-label="Previous"></i>',
        // adaptiveHeight:false,
        slidesToShow:3,
        slidesToScroll:1,
        // speed:500,
        easing:'linear',
        // infinite:true,
        autoplay:false, // автопролистывание
        // autoplaySpeed: 1000,
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
