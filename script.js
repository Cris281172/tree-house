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

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        document.querySelector(`.just_relax`).style.animationName = `slideRight`;
        document.querySelector(`.just_relax`).style.opacity = `1`
    }
    if(document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200){
        document.querySelector(`.latest_project`).style.animationName = `slideOpacity`;
        document.querySelector(`.latest_project`).style.opacity = `1`
    }

    if(document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800){
        document.querySelector(`.culture_values`).style.animationName = `slideUp`;
        document.querySelector(`.culture_values`).style.opacity = `1`
    }
    if(document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500){
        document.querySelector(`.clients`).style.animationName = `slideRight`;
        document.querySelector(`.clients`).style.opacity = `1`
    }

    if(document.body.scrollTop > 3100 || document.documentElement.scrollTop > 3100){
        document.querySelector(`.contact`).style.animationName = `slideOpacity`;
        document.querySelector(`.contact`).style.opacity = `1`
    }
    if(document.body.scrollTop > 3400 || document.documentElement.scrollTop > 3400){
        document.querySelector(`.sponsors`).style.animationName = `slideOpacity`;
        document.querySelector(`.sponsors`).style.opacity = `1`
    }
    if(document.body.scrollTop > 3800 || document.documentElement.scrollTop > 3800){
        document.querySelector(`.top_footer`).style.animationName = `slideUp`;
        document.querySelector(`.top_footer`).style.opacity = `1`
    }
    if(document.body.scrollTop > 3800 || document.documentElement.scrollTop > 3800){
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
