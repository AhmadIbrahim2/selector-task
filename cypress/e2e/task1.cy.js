/// <reference types = "cypress" />

// Here is Cypress Selector Task

describe("Cypress Task",()=>{

    it("Selectors",()=>{

        //visit baseUrl
        cy.visit("/")

        //visit register page
        cy.visit("/register")

        //find "Conduit"
        cy.get(".navbar-brand")

        //find "Home" from navbar list
        cy.get(".nav-link").contains("Home")

        //find "sign up" from navbar list
        cy.get(".nav-item").find(".nav-link").contains("Sign up")

        //find ""sign up" header 
        cy.get(".row").find("h1")

        //find "hava an account?"
        cy.get(".row").find("a").contains("Have an account?")

        //find username input
        cy.get(".form-control").first()

        //find email input
        cy.get(".form-control").eq(1)

        //find password input
        cy.get(".form-control").last()

        //find sign up button
        cy.get(".btn").contains("button","Sign up")

        //find conduit logo in the footer
        cy.get("a").filter(".logo-font")

        //find span in the footer
        cy.get("a").filter(".logo-font").next()
        
    })

})