import {data} from './cardDate.js'
import { testimonials } from './testimonialsData.js'
import'./slider.js'
import './navigation.js'
document.addEventListener('DOMContentLoaded', () => {
    const catalogHead = document.querySelector('#catalog__head')
    const footer = document.querySelector('#footer')
    const testimonialsContainer = document.querySelector('#testimonials')
    if ( footer ) 
        setDate(footer)
    if (catalogHead)
        innerCard(data,catalogHead)
    if(testimonialsContainer)
        setTestimonials(testimonialsContainer, testimonials)

})

function innerCard(catalogCardObj,elem){
       catalogCardObj.forEach(  (i, idx) => {
           elem.insertAdjacentHTML('afterend',
               `<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div class="catalog__card d-flex align-items-center py-4">
                        <div class="catalog__item-1">
                            <img src="src/img/catalog-${idx+1}.png">
                        </div>
                        <div class="catalog__item-2 pl-4">
                            <h4>${i.nameCard}</h4>
                            <p>${i.textCard}</p>
                            <a href="#" class="more-details">ПЕРЕЙТИ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></a>
                        </div>
                </div>
                    </div>`);
       })
    }
function setDate(footer){
    const dateElement = footer.querySelector('.date')
    dateElement.insertAdjacentHTML('beforeend', `${new Date().getFullYear()}`) 
}
function setTestimonials(elem,data){
    const container = elem.querySelector('.slider')
    data.forEach( i => {
        container.insertAdjacentHTML('beforeend',`
            <div class="slider_item testimonials__card">
                <div class="testimonials__card-name d-flex justify-content-between">
                    <div class="testimonials__card-name">${i.name}</div>
                    <div>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill bi-star_no-active"></i>
                        <i class="bi bi-star-fill bi-star_no-active"></i>
                    </div>
                </div>
                <div class="testimonials__card-purchase d-flex justify-content-start ">
                    <i class="bi bi-check-circle-fill pr-2"></i><span>${i.purchase}</span>
                </div>
                <div class="testimonials__card-text mt-3 ">${i.text}</div>
            </div>
        `)
    })
}