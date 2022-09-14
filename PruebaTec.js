/// <reference types="cypress" />


describe('Registro shoppingOnline', () => {
  beforeEach(() => {
    cy.visit('https://www.advantageonlineshopping.com/#/')
  })
  it('Acceso a ShoppingOnline', () => {
  cy.xpath('//*[@id="menuUser"]').click()
  cy.wait(1000)
  cy.get('.create-new-account').click()
  cy.wait(1000)
  //Registro Usuario//
  cy.xpath("//input[@name='usernameRegisterPage']").type("Claunaranjo2610")
  cy.xpath('//body/div[3]/section[1]/article[1]/sec-form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/sec-view[2]/div[1]/input[1]').type("claunaranjo@hotmail.com")
  cy.xpath("//input[@name='passwordRegisterPage']").type("Claunaranjo1")
  cy.get('[a-hint="Confirm password"] > .inputContainer > .ng-pristine').type("Claunaranjo1",{force: true})
  cy.get('[sec-name="userFirstName"] > .inputContainer > .ng-pristine').type("Claudia",{force: true})
  cy.get('[sec-name="userLastName"] > .inputContainer > .ng-pristine').type("Naranjo",{force: true})
  cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("6042973124",{force: true})
  cy.get('select').select('Colombia')
  cy.get('[sec-name="userCity"] > .inputContainer > .ng-pristine').type("Medellín",{force: true})
  cy.get('[sec-name="userAdress"] > .inputContainer > .ng-pristine').type("Calle 113 Nro 12-34",{force: true})
  cy.get('[sec-name="userState"] > .inputContainer > .ng-pristine').type("Antioquia",{force: true})
  cy.get('#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("0570000",{force: true})
  cy.xpath('//*[@id="formCover"]/sec-view/div/input').click()
  cy.get('#register_btnundefined').click()
 //Selección de productos//
  cy.get('#popular_items > .roboto-regular').click()
  cy.get('#details_10').click()
  cy.get('.fixedBtn > .roboto-medium').click()
  cy.get('.pages > .ng-scope').click()
  cy.get('#popular_items > .roboto-regular').click()

//Producto 2//
  cy.get('#details_21').click()
  cy.get('[ng-show="firstImageToShow"] > .PURPLE').click()
  cy.get('.fixedBtn > .roboto-medium').click()

  //Pago//
  cy.get('#checkOutButton').click()
  cy.get('#next_btn').click()

  //SafePay//
  cy.get('[a-hint="SafePay username"] > .inputContainer > .ng-pristine').type("Claunaranjo2610",{force: true})
  cy.get('[a-hint="SafePay password"] > .inputContainer > .ng-pristine').type("Claunaranjo1",{force: true})
  cy.get('#pay_now_btn_SAFEPAY').click

  })
   //Resultado de estas pruebas//
  //Estas pruebas automatizadas, permiten al usuario, registrarse en la página web de 'https://www.advantageonlineshopping.com/#/'
  //seleccionar dos productos de la pestaña “Popular ítems”, acceder al carrito de compras//
  //y realizar el pago de los productos seleccionados.//
})