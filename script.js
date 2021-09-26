const navLinks = document.querySelectorAll(`.header_links`)
const arrowUp = document.querySelector(`.page_arrow`);
const scrollToElement = e => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior: "smooth"})
}

const showScroll = () => {
    if (window.scrollY > 350) {
        arrowUp.style.display = `block`;
    }
    else{
        arrowUp.style.display = `none`;
    }
}


const detectElementInViewport = el => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// const slides = e => {
//     document.querySelectorAll('[data-animate]').forEach(element => {
//        if(detectElementInViewport(element)){
//            element.style.animationName = element.dataset.animate;
//            element.style.opacity = 1;
//        }
//     })
// }

// let timeout;
//
//
// window.addEventListener('scroll', () => {
//     showScroll();
//
//     clearTimeout(timeout);
//     timeout = setTimeout(slides, 100);
//     slides()
// });




const arrowScroll = e => {
    document.querySelector(`.header`).scrollIntoView({ behavior: "smooth"});
}
navLinks.forEach(link => {
    link.addEventListener(`click`,scrollToElement);
})

arrowUp.addEventListener('click', arrowScroll);

