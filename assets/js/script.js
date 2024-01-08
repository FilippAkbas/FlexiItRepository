

const mobileBirger = document.querySelector('.mobile_burger');
mobileBirger.addEventListener('click', ()=> {
    mobileBirger.classList.toggle('active');
    if(mobileBirger.classList.contains('active')) {
        document.querySelector('.mobile_menu').classList.add('active');
    } else {
        document.querySelector('.mobile_menu').classList.remove('active');
    }
})

document.querySelectorAll('.faq-list .item').forEach(item => {
    let height = item.querySelector('.faq-list__title').clientHeight;
    let oneItem = item.querySelector('.faq-list__title');

    oneItem.onclick = function () {
        item.classList.toggle('item_active');
    }
})

document.querySelector('.lang a').onclick = function () {
    this.classList.toggle('active');
}
document.querySelector('.mobile-lang a').onclick = function () {
    this.classList.toggle('active');
}


// if(window.innerWidth < 768 ) {
//     const servicesSlider = new Swiper('.services_slider', {
//         slidesPerView: 3,
//         spaceBetween: 20,
//     });
// }

$(document).ready(function () {

    let currentLink = location.href;
    $('.services_slider .swiper-wrapper a').each(function () {
        let linkHref = $(this).attr('href');
        console.log(linkHref);
        console.log(currentLink);

        if (currentLink === linkHref) {
            $(this).addClass('active');
        }
    }); 
});