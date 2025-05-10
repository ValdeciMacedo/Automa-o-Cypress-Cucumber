import RegisterPage from "../Pages/register_page";
const registerPage = new RegisterPage
Given(/^que estama na page de Cadastro$/, () => {
	registerPage.visitPage();
});

Given(/^inserimos nosso Nome "([^"]*)" e sobrenome "([^"]*)"$/, (name, surname) => {
	registerPage.fillNameAndSurname(name, surname);
});

Given(/^informamos nossos dados de cadastro "([^"]*)", "([^"]*)" e "([^"]*)"$/, (address, email, phone) => {
	registerPage.fillContacts(address, email, phone);
});

Given(/^nosso genero como "([^"]*)" e "([^"]*)"$/, (gender, hobbies) => {
	registerPage.selectRadioGender(gender);
	registerPage.selectCheckHobbies(hobbies);
});

Given(/^nossa skill "([^"]*)" e nosso pais "([^"]*)"$/, (skills, country) => {
	registerPage.selectSkills(skills);
	registerPage.selectCountry(country); // Adapte para usar {force: true} dentro da função, se necessário
});

When(/^eu selecionar meu nascimento "([^"]*)", "([^"]*)", "([^"]*)"$/, (year, month, day) => {
	registerPage.selectBirthDay(year, month, day);
});

When(/^inserir minha senha "([^"]*)" e "([^"]*)"$/, (pass, confirmpass) => {
	registerPage.inputPassword(pass, confirmpass);
});

When(/^e clico no botão cadastrar$/, () => {
	registerPage.btnSubmit();
});

Then(/^tenho meu cadastro realizado com sucesso$/, () => {
	// Aqui você pode colocar um assert como:
	// cy.url().should('include', 'alguma-url-esperada')
});

