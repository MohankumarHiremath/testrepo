describe(" Test suite -01 ", ()=>{

    it ("test-01", ()=>{
        
        cy.visit('https://www.facebook.com/');
        cy.get('#email').type('mohankumar.hiremath@gmail.com');
        cy.get('#pass').type('Hiremath@123');
        //cy.get('button[name=login]').click()
        cy.get('[data-testid="royal_login_button"]').click()
        cy.wait(6000)

    })

}
)