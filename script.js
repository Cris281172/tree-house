const navLinks = document.querySelectorAll(`.header_links`)
const arrowUp = document.querySelector(`.page_arrow`);
const scrollToElement = e => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior: "smooth"})
}

const barButton = document.querySelector('#bar_button');
const logo = document.querySelector('#logo');
const headerLinks = document.querySelector('#header_links');
const headerItems = document.querySelectorAll('#header_links li');

logo.style.display = 'block';


barButton.addEventListener('click', () => {

    if(logo.style.display === 'block'){
        logo.style.display = 'none';
        headerLinks.style.display = 'block';
        headerItems.forEach(el => el.style.marginTop = '5px');
    }
    else {
        logo.style.display = 'block';
        headerLinks.style.display = 'none';
    }

})


// const arrowScroll = e => {
//     document.querySelector(`.header`).scrollIntoView({ behavior: "smooth"});
// }

const scrollUpVisible = e => {
    if(window.pageYOffset > 300){
        arrowUp.style.right = '40px';
    }
    else{
        arrowUp.style.right = '-100%'
    }
}

const scrollUpButton = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

navLinks.forEach(link => {
    link.addEventListener(`click`,scrollToElement);
})

arrowUp.addEventListener('click', scrollUpButton)
document.addEventListener('scroll', scrollUpVisible)
scrollUpVisible();
// arrowUp.addEventListener('click', arrowScroll);

