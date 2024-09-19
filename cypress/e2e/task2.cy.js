/// <reference types = "cypress"/>

describe('Add to cart functionality', () => {
    it('Validate that the user can add to cart', () => {

        // Visit magento website
        cy.visit("https://magento.softwaretestingboard.com/")

        // Search for the item “shirt”
        cy.get("#search").type("shirt"+"{enter}")

        // select the first product from the result page
        cy.get(".products-grid").find(".product-item-info").first().click()
        cy.wait(1000)

        // Choose size “M” and the last color from the options
        cy.get("#option-label-size-143-item-168").click()
        cy.wait(1000)
        cy.get("#option-label-color-93-item-57").click()
        
        // The quantity needed is “3” items
        cy.get("#qty").clear().type("3")

        // Add the product to the cart
        cy.get("button").contains("span","Add to Cart").click()

        // Assertions
        cy.get("[role=alert]").should("be.visible").and("contain","You added Radiant Tee to your shopping cart.")
        cy.get(".counter-number").should("be.visible").and("contain","3")
    });
})
