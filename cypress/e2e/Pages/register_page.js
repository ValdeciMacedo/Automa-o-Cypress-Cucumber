/// <reference types="Cypress" />
import RegisterElements from "../elements/register_elements";

const registerElements = new RegisterElements();
const URL = 'https://demo.automationtesting.in/Register.html';

const registerPage = {
    visitPage() {
        cy.visit(URL);
    },

    fillNameAndSurname(name, surname) {
        cy.get(registerElements.inputFirstName()).type(name);
        cy.get(registerElements.inputLastName()).type(surname);
    },

    fillContacts(address, email, phone) {
        cy.get(registerElements.inputAddress()).type(address);
        cy.get(registerElements.inputAddressEmail()).type(email);
        cy.get(registerElements.inputPhoneNumber()).type(phone);

    },

    selectRadioGender(gender) {
        cy.get(registerElements.checkRadioGender()).check(gender);
    },

    selectCheckHobbies(hobbies) {
        cy.get(registerElements.checkHobbies()).check(hobbies);
    },

    selectLanguages() {
        // A lógica de seleção de linguagem vai aqui
    },

    selectSkills(skills) {
        cy.get(registerElements.inputSkills()).select(skills);
    },

    selectCountry(country) {
        cy.get(registerElements.selectCountry()).select(country);
    },

    selectBirthDay(year, month, day) {
        cy.get(registerElements.selectYear()).select(year);
        cy.get(registerElements.selectMonth()).select(month);
        cy.get(registerElements.selectDay()).select(day);
    },

    inputPassword(pass, confirmpass) {
        cy.get(registerElements.inputPass()).type(pass);
        cy.get(registerElements.inputConfirmPass()).type(confirmpass);
    },

    btnSubmit() {
        cy.get(registerElements.btnSubmit()).click();
    }
};

export default registerPage;
