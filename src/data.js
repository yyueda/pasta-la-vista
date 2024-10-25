import aglioOlio from "./images/aglio-olio.png";
import carbonara from "./images/carbonara.png";
import linguineVongole from "./images/linguine-vongole.png";
import beefRagu from "./images/beef-ragu.png";
import penneArrabbiata from "./images/penne-arrabbiata.png";
import mushroomRisotto from "./images/truffle-mushroom-risotto.png";

class Dish {

    constructor(name, description, imageSrc) {
        this.name = name;
        this.description = description;
        this.imageSrc = imageSrc;
    }
}

const pastas = [
    new Dish(
        "Spaghetti Aglio Olio",
        "Simple and savory pasta with garlic, chilli and extra virgin olive oil",
        aglioOlio
    ),
    new Dish(
        "Spaghetti Carbonara",
        "Classic pasta with crispy italian smoked pancetta, egg, and parmesan cheese.",
        carbonara
    ),
    new Dish(
        "Linguini Vongole",
        "Linguini with fresh clams, prawns, cherry tomato, garlic, white wine and a touch of chilli",
        linguineVongole
    ),
    new Dish(
        "Beef Ragu",
        "Tender beef in a rich tomato and red wine sauce, served over fresh pasta.",
        beefRagu
    ),
    new Dish(
        "Penne Arrabbiata",
        "Penne tossed in a spicy tomato sauce with garlic and chili flakes.",
        penneArrabbiata
    ),
    new Dish(
        "Truffle Mushroom Risotto",
        "Creamy risotto with earthy mushrooms and a hint of truffle essence.",
        mushroomRisotto
    ),
];

export default pastas;
