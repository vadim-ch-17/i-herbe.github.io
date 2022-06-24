export default $(document).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger, .header__menu, .logo_nav_burger, .logo_icon').toggleClass('active');
        $('body').toggleClass('lock');
    });
});