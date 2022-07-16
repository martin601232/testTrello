/// <reference types="cypress" />
describe('example to login', () => {
      
     it('can make a login', () => {
         cy.visit('http://localhost:3000/login')
       // We'll store our item text in a variable so we can reuse it
       const email = 'julio100@gmail.com'
       const pass='julio' 
       cy.intercept('POST', 'http://localhost:8000/api/login').as('getLogin')
       cy.get('#email').type( email)
 
       cy.get('#pass').type( pass)
 
       cy.get('#acc').click()
       cy.wait('@getLogin').then(res => {
             
        // localStorage.setItem("item_id", res.data.access_token);
         console.log("cypress login", res.response.body.access_token);
         Cypress.env('jwt', res.response.body.access_token);
          const jwt= Cypress.env('jwt');
          console.log(jwt);
         
     })
 
     
 
 
 
     })
   
     
   })