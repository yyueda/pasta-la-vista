import pastas from "./data.js";

function createDishCard(dish) {
    const dishContainer = document.createElement('div');
    const dishName = document.createElement('h1');
    const dishImage = document.createElement('img');
    const dishDesc = document.createElement('p');

    dishName.textContent = dish.name;
    dishImage.src = dish.imageSrc;
    dishDesc.textContent = dish.description;

    dishContainer.appendChild(dishImage);
    dishContainer.appendChild(dishName);
    dishContainer.appendChild(dishDesc);

    dishContainer.classList.add('menu-item');

    return dishContainer;
}

function createMenuCard() {
    const menuContainer = document.createElement('div');

    for (const pasta of pastas) {
        menuContainer.appendChild(createDishCard(pasta));
    }

    menuContainer.classList.add('menu-container');

    return menuContainer;
}

function createMenuPage() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    content.appendChild(createMenuCard());
}

export default createMenuPage;
