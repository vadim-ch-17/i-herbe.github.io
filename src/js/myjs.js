let catalogHead = document.getElementById('catalog__head') //.();

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

const catalogCardObj = {
    quantityCard: 4,
    nameCard: {
        0: `ДЛЯ ЛИЦА`,
        1: `ДЛЯ ВОЛОС`,
        2: `ДЛЯ ТЕЛА И ВАННЫ`,
        3: `ПОДАРОЧНЫЕ НАБОРЫ`
    },
    textCard: {
        0: `Предлагаем подобрать комплекс средств для очищения, тонизирования, увлажнения и питания кожи лица.`,
        1: `Обеспечьте здоровье и красоту вашим волосом с помощью наших косметических и лечебных средств.`,
        2: `Обеспечить полноценный уход за телом помоут наши косметические средства.`,
        3: `Наши подарочные наборы включат все необходимое для повседневного ухода и поддержания и здорового вида.`
    },
    innerCard(){
        for(let i = this.quantityCard-1; i >= 0; i--){
             catalogHead.insertAdjacentHTML('afterend', 
                `<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div class="catalog__card d-flex align-items-center py-4">
                        <div class="catalog__item-1">
                            <img src="src/img/catalog-${i+1}.png">
                        </div>
                        <div class="catalog__item-2 pl-4">
                            <h4>${this.nameCard[i]}</h4>
                            <p>${this.textCard[i]}</p>
                            <a href="#" class="more-details">ПЕРЕЙТИ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></a>
                        </div>
                </div>
                    </div>`);
        }
    }
    
};
catalogCardObj.innerCard();