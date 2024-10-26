function createContactCard() {
    const contactDetails = document.createElement('div');
    const address = document.createElement('p');
    const phoneNum = document.createElement('p');

    address.textContent = '10 Bayfront Ave, Tower 1, Level 100, Singapore 018956';
    phoneNum.textContent = '+65 61331 48713';

    contactDetails.appendChild(address);
    contactDetails.appendChild(phoneNum);

    address.classList.add('address');
    phoneNum.classList.add('phone-number');

    return contactDetails;
}

function createContactForm() {
    const formContainer = document.createElement('div');

    const form = document.createElement('form');
    form.id = 'contact-form';
    formContainer.append(form);

    // Form heading
    const heading = document.createElement('h2');
    heading.innerText = 'Contact Us';
    form.appendChild(heading);

    // Input fields container
    const fieldsContainer = document.createElement('div');
    fieldsContainer.classList.add('fields-container');
    form.appendChild(fieldsContainer);

    // Name label and input
    const nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'Name:';
    fieldsContainer.appendChild(nameLabel);

    const nameRequired = document.createElement('span');
    nameRequired.textContent = 'Required';
    nameLabel.appendChild(nameRequired);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;
    fieldsContainer.appendChild(nameInput);

    // Subject label and input
    const subjectLabel = document.createElement('label');
    subjectLabel.for = 'subject';
    subjectLabel.textContent = 'Subject:';
    fieldsContainer.appendChild(subjectLabel);

    const subjectRequired = document.createElement('span');
    subjectRequired.textContent = 'Required';
    subjectLabel.appendChild(subjectRequired);

    const subjectInput = document.createElement('input');
    subjectInput.type = 'text';
    subjectInput.id = 'subject';
    subjectInput.name = 'subject';
    subjectInput.required = true;
    fieldsContainer.appendChild(subjectInput);

    // Email label and input
    const emailLabel = document.createElement('label');
    emailLabel.for = 'email';
    emailLabel.textContent = 'Email:';
    fieldsContainer.appendChild(emailLabel);

    const emailRequired = document.createElement('span');
    emailRequired.textContent = 'Required';
    emailLabel.appendChild(emailRequired);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.required = true;
    fieldsContainer.appendChild(emailInput);

    // Message label and text area
    const messageLabel = document.createElement('label');
    messageLabel.for = 'message';
    messageLabel.textContent = 'Message:';
    fieldsContainer.appendChild(messageLabel);

    const messageRequired = document.createElement('span');
    messageRequired.textContent = 'Required';
    messageLabel.appendChild(messageRequired);

    const messageTextarea = document.createElement('textarea');
    messageTextarea.id = 'message';
    messageTextarea.name = 'message';
    messageTextarea.required = true;
    fieldsContainer.appendChild(messageTextarea);

    return formContainer;
}

function createContactPage() {
    const content = document.querySelector('#content')
    const contactContainer = document.createElement('div');
    
    content.innerHTML = '';
    contactContainer.classList.add('contact-container')
    content.appendChild(contactContainer);
    contactContainer.appendChild(createContactCard());
    contactContainer.appendChild(createContactForm());
    
}

export default createContactPage;
