/// <reference types="Cypress" />
import HomeElements from "../Elements/home_elements"
import LoginElements from "../Elements/login_elements"
 
const loginElements = new LoginElements
const homeElements = new HomeElements
 
const url = Cypress.config('baseUrl')
 
class LoginPage {
 
   accessHomePage() {
       cy.visit(url)
       cy.wait(3000)
       cy.get(homeElements.btnHideCookie()).click()
   }
 
   accessLoginPage() {
       cy.contains(homeElements.selectAccount()).click()
       cy.contains(homeElements.btnLogin()).click({force: true})
   }
 
   fillLoginInfo(email, password){
       cy.get(loginElements.inputEmail()).type(email)
       cy.get(loginElements.inputpassword()).type(password)
   }
 
   submitLogin() {
       cy.get(loginElements.submitLogin()).click()
   }
 } export default LoginPage
