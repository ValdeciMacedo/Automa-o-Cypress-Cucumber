 Feature: Login
Funcionalidade para realizar variados Logins no sistema PHPTravels
 
  Scenario Outline: "<cenario>"
    Given eu acesse a página home da aplicação
    When eu inserir meu email "<email>" e minha senha "<senha>"
    And clicar no botão entrar
    Then tenho meu acesso "<mensagem>"
 
    Examples: 
      | cenario           | email               | senha    | mensagem                 |
      | Login com sucesso | user@phptravels.com | demouser | Login com sucesso na aplicação |