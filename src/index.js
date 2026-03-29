import "./style.css";
import {createAboutPage} from "./about-page.js";
import {createMenuPage} from "./menu-page.js";
import {createContactPage} from "./contact-page.js";

const aboutUs = document.querySelector('.about-us');
const menuButton = document.querySelector('.menu-button');
const contact = document.querySelector('.contact');
let selected = "about";

const buttons = {
    about: aboutUs,
    menu: menuButton,
    contact: contact
};

aboutUs.addEventListener('click', ()=>{
    createAboutPage();
    buttons[selected].style.color = 'white';
    selected = "about";
    buttons[selected].style.color = '#c19d60';
});

menuButton.addEventListener('click', ()=>{
    createMenuPage();
    buttons[selected].style.color = 'white';
    selected = "menu";
    buttons[selected].style.color = '#c19d60';
});

contact.addEventListener('click', ()=>{
    createContactPage();
    buttons[selected].style.color = 'white';
    selected = "contact";
    buttons[selected].style.color = '#c19d60';
});

createAboutPage();
aboutUs.style.color = '#c19d60';



