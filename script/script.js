$(document).ready(function() {
    $('.carousel__inner').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"> < </button>',
        nextArrow: '<button type="button" class="slick-next"> > </button>'

    })

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
            .eq($(this).index()).addClass('catalog__content_active')
    })
    $('.catalog-item__link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault()
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
        })
        $('.catalog-item__back').each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault()
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')

            })
        })
    })









    document.querySelectorAll('button[data-modal=consultation]').forEach(el => el.addEventListener('click', () => {
            document.querySelectorAll('.overlay, #consultation').forEach(el => el.style.display="block")

    }))


    Array.from(document.querySelectorAll('.modal_close')).forEach(el => el.addEventListener( 'click', () => {
    const modal = ['.overlay', '#consultation', '#order', '#thanks']
    modal.map(el => document.querySelector(el).style.display='none')



}))
document.querySelectorAll('.btn').forEach(el => el.addEventListener('click', () => {
    document.querySelectorAll('.overlay, #order',  ).forEach(el => el.style.display='block')
}))
    document.querySelectorAll('.form_btn').forEach(el => el.addEventListener('click', () => {
        document.querySelectorAll('.overlay, #thanks',  ).forEach(el => el.style.display='block')
        document.querySelectorAll('#order, #consultation').forEach(el=> el.style.display='none')
    }))








    (function() {
            $('#number').mask("+7 (999) 99-99-999")
    })

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1000){
                $('.pageup').fadeIn()

        }else {
                $('.pageup').fadeOut()
        }
    })

})
