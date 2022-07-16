
/// <reference types="cypress" />
 
  describe('example to create a new board', () => {
    beforeEach(() => {
        localStorage.setItem("item_id", "236|FvBcaTZzp4AmaSdod3Hn4WNvOKDLD6GXRnix1ezH");

       })
  
  
    it('can make a board', () => {
        
        cy.visit('http://localhost:3000/tablero/create')
        cy.intercept('POST', 'http://localhost:8000/api/tableros').as('getTablero')
      // We'll store our item text in a variable so we can reuse it
      const titulo = 'buenas noches jefe de carrera'
      const vi='-1' 
      const color = '#00ffff'
      // Let's get the input element and use the `type` command to
      // input our new list item. After typing the content of our item,
      // we need to type the enter key as well in order to submit the input.
      // This input has a data-test attribute so we'll use that to select the
      // element in accordance with best practices:
      // https://on.cypress.io/selecting-elements
      cy.get('#nombre').type( titulo)
      cy.get('input[type=color]').invoke('val', '#ff00ff').trigger('input')
     // cy.get('#color').click()
     cy.get('#visible').select(1).invoke('val')
      
     //cy.get('input[type=color]').click()
     
      

      
     cy.get('#save').click()
     cy.wait(1000)
     
     cy.get('#save').click()

     cy.wait('@getTablero').then(res => {
             
        // localStorage.setItem("item_id", res.data.access_token);
         Cypress.env('jwt', res.response.body);
          const jwt= Cypress.env('jwt');
          console.log(jwt);
         
     })
 

     

    })
  
    
  })
  
