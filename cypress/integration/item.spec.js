import Item from "../../src/components/Item"

describe('#item',()=>{
    it('should zoom an image',()=>{
        cy.visit('/')
        cy.get('.product-list').then(($productList)=>{
            const listLength = $productList.children().length
            if(listLength > 0){
                cy.get('.product-list__item').find('a').first().click();
                //cy.get('.item__image').find('div').first().debug()
                /* when there no mousehover, there is only 2 children */

                //cy.get('.item__image').find('div').first().children().should('have.length',2)
                cy.get('.item__image div').first().children().should('have.length',2);
                cy.get('.item__image').find('div').first().click()
                cy.wait(1000)
                cy.get('.item__image div').first().children().should('have.length',3);
                
                /* cy.get('.item__image').find('div').first().children().eq(1).click({force:true})
                cy.wait(1000)
                cy.get('.item__image div').first().children().should('have.length',3); */

                //cy.get('.item__image').trigger('mouseover',{force:true}).wait(1000).find('div').first().children().should('have.length',3)
                
                /* on mousehover, there is 3 children, the new one is for showing a piece of image */
                //cy.get('.item__image div').first().should('have.length',3);
                //cy.get('.item__image').trigger('mousemove',{clientX:200,clientY:200})


                //cy.get('.item__image').find('div').first().children().should('have.length',3)
            }else{
                cy.log('.produtc-list empty')
            }
        })
    })
})