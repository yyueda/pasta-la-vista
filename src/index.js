import "./styles.css";
import createHomePage from "./home.js"
import createMenuPage from "./menu.js";

initialiseNav();
createHomePage();

function initialiseNav() {
    const navbar = document.querySelector('nav');
    const homeButton = document.querySelector('#home-button');
    const menuButton = document.querySelector('#menu-button');
    const aboutButton = document.querySelector('#contact-button');

    homeButton.addEventListener('click', () => {
        createHomePage();
    });

    menuButton.addEventListener('click', () => {
        createMenuPage();
    });
}
