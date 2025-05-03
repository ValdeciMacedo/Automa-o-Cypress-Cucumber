Feature: Cadastro de usuarios
Cadastro de usuarios na plataforma

  Scenario Outline: "<caso_teste>"
    Given que estama na page de Cadastro
    And inserimos nosso Nome "<name>" e sobrenome "<surname>"
    And informamos nossos dados de cadastro "<address>", "<email>" e "<phone>"
    And nosso genero como "<gender>" e "<hobbies>"
    And nossa skill "<skill>" e nosso pais "<country>"
    When eu selecionar meu nascimento "<year>", "<month>", "<day>"
    And inserir minha senha "<pass>" e "<confirmpass>"
    And e clico no botão cadastrar
    Then tenho meu cadastro realizado com sucesso

    Examples:
      | caso_teste           | name    | surname | address                          | email                  | phone       | gender | hobbies | skill | country   | year | month     | day | pass   | confirmpass |
      | cadastro com sucesso | Valdeci | Macedo  | Rua Jose Alfredo da Silveira 144 | walmacedo1@hotmail.com | 11953297078 | male   | Movie   | js    | Australia | 1982 | September |  08 | 123@25 |      123@25 |
