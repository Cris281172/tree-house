const navLinks = document.querySelectorAll(`.header_links`)
const menuElement = document.querySelectorAll(`[data-menu]`);
const arrowUp = document.querySelector(`.page_arrow`);
const scrollToElement = e => {
    if(e.target.dataset.menu === `1`){
        document.querySelector(`.header`).scrollIntoView({ behavior: "smooth"});
    }
    if(e.target.dataset.menu === `2`){
        document.querySelector(`.professional_services`).scrollIntoView({ behavior: "smooth"});
    }
    if(e.target.dataset.menu === `3`){
        document.querySelector(`.clients`).scrollIntoView({ behavior: "smooth"});
    }
    if(e.target.dataset.menu === `4`){
        document.querySelector(`.latest_project`).scrollIntoView({ behavior: "smooth"});
    }
    if(e.target.dataset.menu === `5`){
        document.querySelector(`.contact`).scrollIntoView({ behavior: "smooth"});
    }
}
window.onscroll = () => myFunction();

console.log(window.onscroll)

const myFunction = e => {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        arrowUp.style.display = `block`;
    }
    else if(document.body.scrollTop < 350 || document.documentElement.scrollTop < 350){
        arrowUp.style.display = `none`;
    }
    if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
        document.querySelector(`.professional_services`).style.animationName = `slideUp`;
        document.querySelector(`.professional_services`).style.opacity = `1`
    }
    if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
        document.querySelector(`.just_relax`).style.animationName = `slideRight`;
        document.querySelector(`.just_relax`).style.opacity = `1`
    }
    if(document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200){
        document.querySelector(`.latest_project`).style.animationName = `slideOpacity`;
        document.querySelector(`.latest_project`).style.opacity = `1`
    }

    if(document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200){
        document.querySelector(`.culture_values`).style.animationName = `slideUp`;
        document.querySelector(`.culture_values`).style.opacity = `1`
    }
    if(document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900){
        document.querySelector(`.clients`).style.animationName = `slideRight`;
        document.querySelector(`.clients`).style.opacity = `1`
    }

    if(document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500){
        document.querySelector(`.contact`).style.animationName = `slideOpacity`;
        document.querySelector(`.contact`).style.opacity = `1`
    }
    if(document.body.scrollTop > 3700 || document.documentElement.scrollTop > 3700){
        document.querySelector(`.sponsors`).style.animationName = `slideOpacity`;
        document.querySelector(`.sponsors`).style.opacity = `1`
    }
    if(document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000){
        document.querySelector(`.top_footer`).style.animationName = `slideUp`;
        document.querySelector(`.top_footer`).style.opacity = `1`
    }
    if(document.body.scrollTop > 4200 || document.documentElement.scrollTop > 4200){
        document.querySelector(`.bottom_footer`).style.animationName = `slideUp`;
        document.querySelector(`.bottom_footer`).style.opacity = `1`
    }
}


const arrowScroll = e => {
    document.querySelector(`.header`).scrollIntoView({ behavior: "smooth"});
}
navLinks.forEach(link => {
    link.addEventListener(`click`,scrollToElement);
})

arrowUp.addEventListener('click', arrowScroll);
