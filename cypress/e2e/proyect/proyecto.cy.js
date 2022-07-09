/// <reference types="cypress" />
describe('example to login', () => {
   beforeEach(() => {
    console.log('XXsssssssX');
    const email = 'julio100@gmail.com'
    const password='julio' 
    const data = {
      email,
      password
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch('http://localhost:8000/api/login', options).then(res => {
      console.log('XXX', res);
      // localStorage.setItem("item_id", res.data.access_token);
      //console.log(localStorage.getItem("item_id"));
    });
   })
  
  
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
  
  describe('example to create a new board', () => {
   
  
  
    it('can make a board', () => {
        cy.visit('http://localhost:3000/login')
      // We'll store our item text in a variable so we can reuse it
      const email = 'julio100@gmail.com'
      const pass='julio' 
  

      cy.get('#email').type( email)

      cy.get('#pass').type( pass)

      cy.get('#acc').click()

      cy.wait(3000)
        cy.visit('http://localhost:3000/tablero/create')
      // We'll store our item text in a variable so we can reuse it
      const titulo = 'jtos csm'
      const vi='-1' 
      const color = '#00ffff'
      // Let's get the input element and use the `type` command to
      // input our new list item. After typing the content of our item,
      // we need to type the enter key as well in order to submit the input.
      // This input has a data-test attribute so we'll use that to select the
      // element in accordance with best practices:
      // https://on.cypress.io/selecting-elements
      cy.get('#nombre').type( titulo)
     // cy.get('#color').click()
     cy.get('input[type=color]').invoke('val', '#ff0000').trigger('input')
      cy.get('#visibilidad').clear().type( vi)
      
     
      

      cy.get('.btn').click()



    })
  
    
  })
  
