describe('Test suit-3', ()=> {
    it('testcase-1', ()=>
    {

     cy.visit("https://demo.nopcommerce.com/")

     cy.wait(3000)
     cy.get('.ico-login').click()

     cy.get('#Email').type('mohankumar.hiremath@gmailcom','{enter}')
     cy.get('#Password').type('Password@123','{enter}')
     cy.wait(3000)
     cy.get('.button-1.login-button').click()
     
    })

    it('testcase-2',()=>
    {
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('.search-box-text.ui-autocomplete-input').type('Computers');
        cy.get('.button-1.search-box-button').click()
        cy.wait(3000)
        cy.get('#advs').click()
     
        cy.get('#cid').select('Computers >> Software').should('have.value','4')
     
        cy.get('#isc').click()
     
        cy.get('#mid').select('Nike').should('have.value','3')
     
        cy.get('#sid').click()
     
        cy.get('.button-1.search-button').click()
       
    })
})