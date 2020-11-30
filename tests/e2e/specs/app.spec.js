describe ('App', () => {
    beforeEach(() => {
        cy.visit('/', () => {
            console.log("App loaded");
        })
    })

    it('should show list of films', () => {
        const filmsList = cy.get('#main-container > div > ul > li')
        filmsList.should('have.length', 20)
    })

    xit('should show a selected film on button click', () => {
        cy.get('#films-list > ul > li').click('Castle in the Sky')
        cy.get('#film-detail > h3').contains('Castle in the Sky')
    })
})

// it('Should have populated select', () => {
//     const countrySelectOptions = cy.get('#country_select option')
//     countrySelectOptions.should('have.length', 251)
// })

// it('should show selected country on select change', () => {
//     cy.get('#country_select').select('France')
//     cy.get('#selected_country > h2').contains('France')
// })

// it('should add country to favourties on button click', () => {
//     cy.get('#country_select').select('France')
//     cy.get('button').click()
//     cy.get('li').contains('France')