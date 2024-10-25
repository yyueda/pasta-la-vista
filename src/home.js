function createAboutCard() {
    const aboutCard = document.createElement('div');
    const aboutParagraph = document.createElement('p');

    aboutParagraph.textContent = "At Pasta La Vista, we're all about fresh pasta." 
    aboutParagraph.appendChild(document.createElement('br'));
    aboutParagraph.append("Join us for an unforgettable dining experience where great food meets great fun.");
    aboutParagraph.appendChild(document.createElement('br'));
    aboutParagraph.append("Come for the carbs, stay for the laughs. Mangia!");
    
    aboutCard.appendChild(aboutParagraph);
    aboutCard.classList.add('about-card');
    
    return aboutCard;
}

function createHoursCard() {
    const hoursCard = document.createElement('div');
    const lunchSection = document.createElement('p');
    const lunchHeading = document.createElement('span');
    const dinnerSection = document.createElement('p');
    const dinnerHeading = document.createElement('span');

    lunchHeading.textContent = 'LUNCH';
    lunchSection.appendChild(lunchHeading);
    lunchSection.appendChild(document.createElement('br'));
    lunchSection.appendChild(document.createElement('br'));
    lunchSection.append('MON - FRI');
    lunchSection.appendChild(document.createElement('br'));
    lunchSection.append('1130 - 1430');
    lunchSection.appendChild(document.createElement('br'));
    lunchSection.appendChild(document.createElement('br'));
    lunchSection.append('SAT - SUN');
    lunchSection.appendChild(document.createElement('br'));
    lunchSection.append('1230 - 1530');

    dinnerHeading.textContent = 'DINNER';
    dinnerSection.appendChild(dinnerHeading);
    dinnerSection.appendChild(document.createElement('br'));
    dinnerSection.appendChild(document.createElement('br'));
    dinnerSection.append('MON - FRI');
    dinnerSection.appendChild(document.createElement('br'));
    dinnerSection.append('1800 - 2200');
    dinnerSection.appendChild(document.createElement('br'));
    dinnerSection.appendChild(document.createElement('br'));
    dinnerSection.append('SAT - SUN');
    dinnerSection.appendChild(document.createElement('br'));
    dinnerSection.append('1900 - 2300');
    
    hoursCard.appendChild(lunchSection);
    hoursCard.appendChild(dinnerSection);

    hoursCard.classList.add('hours-card');
    lunchHeading.classList.add('hours-heading');
    dinnerHeading.classList.add('hours-heading');

    return hoursCard;
}

function createHomePage() {
    const content = document.querySelector('#content');
    const homeContainer = document.createElement('div');

    content.innerHTML = '';
    content.append(homeContainer);
    homeContainer.appendChild(createAboutCard());
    homeContainer.appendChild(createHoursCard());

    homeContainer.classList.add('home-container');
}

export default createHomePage;
