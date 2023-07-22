describe(' Automation examples', () => {

  it('TC-01', () => {
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

  it('test case-2(select specific product from his name nad click)',()=>{
    cy.visit('https://demo.nopcommerce.com')
    cy.wait(2000)

  //cy.scrollTo('bottom')
  cy.get('#pollanswers-1').click()
  cy.get('.button-2.vote-poll-button').should('have.text','Vote').click()


  
  // Find the list of products and get all the items within the list
  cy.get('.product-item').each(($product)=>{
    // Perform any checks or filtering to identify the desired item.
      // For example, checking the text of the product or its properties
    const productname  = $product.find('.product-title').text();
    if (productname ==='Apple MacBook Pro 13-inch')
    {
      // Click on the "Add to Cart" button for the selected item
      cy.wrap($product).find('.button-2.product-box-add-to-cart-button').click()
      cy.wait(2000)
  
    }
  })
  })

  it.only('TC-3(fetch data from fixture file and input)',()=>{

    cy.visit('https://demo.nopcommerce.com')
    cy.wait(2000)
    cy.get('.news-list-homepage').find('.title').should('have.text','News')
    cy.get('.news-item').find('.read-more').contains('details').click()

    cy.fixture('example').then((data)=>{
      cy.get('#AddNewComment_CommentTitle').type(data.title)
      cy.get('#AddNewComment_CommentText').type(data.comment)
      cy.get('.button-1.news-item-add-comment-button').should('have.text','New comment').click()
    })


  })



  
})