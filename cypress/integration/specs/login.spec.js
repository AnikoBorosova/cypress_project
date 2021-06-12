/// <reference types="cypress" />

context("Login tests", () => {

	it("Logs in with correct user credentails", () => {

		cy.visit("http://automationpractice.com/index.php")

		cy.get(".login").click()

		cy.get("#email")
			.type("johndoe@email.com").should("have.value", "johndoe@email.com")

		cy.get("#passwd")
			.type("qweRTY10").should("have.value", "qweRTY10")

		cy.get("#SubmitLogin").click()

		cy.get(".lnk_wishlist")
			.should("be.visible")
	})
})
