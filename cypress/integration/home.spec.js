describe('#home page',()=>{
    it('should show loading page',()=>{
        cy.visit('/')
        
        cy.get('.loading').should('not.exist')
        cy.get('.product-list').then(($productList)=>{
            const listLength = $productList.children().length
            cy.log(listLength);
            cy.get('.product-list__image img').should('have.length', listLength);
        })
        cy.get('div[class="product-list__image"]').find("img").should('be.visible');
    })
})