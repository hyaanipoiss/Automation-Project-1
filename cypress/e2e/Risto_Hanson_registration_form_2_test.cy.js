beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_2.html')
})

/*
Assignement 4: add content to the following tests
*/

describe('Section 1: Functional tests', () => {

    it('User can use only same both first and validation passwords', ()=>{
        // Add test steps for filling in only mandatory fields
        cy.get('#userame').type('Mezzo')
        cy.get('#firstName').type('Risto')
        cy.get('#lastName').type('Hanson')
        cy.get('#email').type('thisisemail@test.com')
        cy.get('[data-testid="phoneNumberTestId"]').type('123456789')
        
        // Type confirmation password which is different from first password
        cy.get('#password').type('NORDCEL');
        cy.get('#confirm').type('DifferentPassword')
        
        // Assert that submit button is not enabled
        cy.get('#submitButton').should('be.disabled')

        // Assert that successful message is not visible
        cy.get('#successMessage').should('not.be.visible')

        // Assert that error message is visible
        cy.get('#errorMessage').should('be.visible')
    })
    
    it('User can submit form with all fields added', ()=>{
        // Add test steps for filling in ALL fields
        cy.get('#userame').type('Mezzo')
        cy.get('#email').type('thisisemail@test.com')
        cy.get('#firstName').type('Risto')
        cy.get('#lastName').type('Hanson')
        cy.get('[data-testid="phoneNumberTestId"]').type('123456789')
        cy.get('#password').type('NORDCEL')
        cy.get('#confirm').type('NORDCEL')

        // Assert that submit button is enabled
        cy.get('#submitButton').should('not.be.disabled')

        // Assert that after submitting the form system show successful message
        cy.get('#submitButton').click()
        cy.get('#successMessage').should('be.visible')
    })

    it('User can submit form with valid data and only mandatory fields added', ()=>{
        // Add test steps for filling in ONLY mandatory fields
        inputValidData('johnDoe')

        // Assert that submit button is enabled
        cy.get('#submitButton').should('not.be.disabled')

        // Assert that after submitting the form system shows successful message
        cy.get('#submitButton').click()
        cy.get('#successMessage').should('be.visible')

    })

    // Add at least 1 test for checking some mandatory field's absence
    it('Submit button is not enabled when some mandatory field is not present', () => {
        
        // Add tests to verify that the submit button is not enabled when some mandatory field is not present
        inputValidData('johnDoe');

        // Clear the user field to simulate its absence
        cy.get('#username').clear();

        // Assert that the submit button is not enabled
        cy.get('#submitButton').should('be.disabled');
    })
})

/*
Assignement 5: create more visual tests
*/

describe('Section 2: Visual tests', () => {
    it('Check that logo is correct and has correct size', () => {
        cy.log('Will check logo source and size')
        cy.get('img').should('have.attr', 'src').should('include', 'cerebrum_hub_logo')
        // get element and check its parameter height, to less than 178 and greater than 100
        cy.get('img').invoke('height').should('be.lessThan', 178)
            .and('be.greaterThan', 100)   
    })

    it('My test for second picture', () => {
        
        // Create similar test for checking the second picture
        cy.get('img').eq(1).should('have.attr', 'src').and('include', 'cypress_logo')

        // Check the size of the second picture
        cy.get('img').eq(1).invoke('height').should('be.lessThan', 200).and('be.greaterThan', 50);
    })
    })

    it('Check navigation part', () => {
        cy.get('nav').children().should('have.length', 2)

        // Get navigation element, find siblings that contains h1 and check if it has Registration form in string
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
        
        // Get navigation element, find its first child, check the link content and click it
        cy.get('nav').children().eq(0).should('be.visible')
            .and('have.attr', 'href', 'registration_form_1.html')
            .click()
        
        // Check that currently opened URL is correct
        cy.url().should('contain', '/registration_form_1.html')
        
        // Go back to previous page
        cy.go('back')
        cy.log('Back again in registration form 2')
    

    // Create similar test for checking the second link 
    cy.get('nav').children().eq(1).should('have.attr', 'href', 'registration_form_3.html');
    
    // Verify that the link is clickable
    cy.get('nav').children().eq(1).should('be.visible').click()
    cy.url().should('contain', '/registration_form_3.html')
    
})
    it('Check that radio button list is correct', () => {
        // Array of found elements with given selector has 4 elements in total
        cy.get('input[type="radio"]').should('have.length', 4)

        // Verify labels of the radio buttons
        cy.get('input[type="radio"]').next().eq(0).should('have.text','HTML')
        cy.get('input[type="radio"]').next().eq(1).should('have.text','CSS')
        cy.get('input[type="radio"]').next().eq(2).should('have.text','JavaScript')
        cy.get('input[type="radio"]').next().eq(3).should('have.text','PHP')

        //Verify default state of radio buttons
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
        cy.get('input[type="radio"]').eq(1).should('not.be.checked')
        cy.get('input[type="radio"]').eq(2).should('not.be.checked')
        cy.get('input[type="radio"]').eq(3).should('not.be.checked')

        // Selecting one will remove selection from other radio button
        cy.get('input[type="radio"]').eq(0).check().should('be.checked')
        cy.get('input[type="radio"]').eq(1).check().should('be.checked')
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
    })

    // Create test similar to previous one verifying check boxes

    it('Check that the list of checkboxes is correct', () => {
        // Array of found elements with the given selector has 3 elements in total
        cy.get('input[type="checkbox"]').should('have.length', 3)

        // Verify labels of the checkboxes
        cy.get('input[type="checkbox"]').eq(0).next().should('have.text', 'Checkbox 1')
        cy.get('input[type="checkbox"]').eq(1).next().should('have.text', 'Checkbox 2')
        cy.get('input[type="checkbox"]').eq(2).next().should('have.text', 'Checkbox 3')

        // Verify default state of checkboxes
        cy.get('input[type="checkbox"]').eq(0).should('not.be.checked')
        cy.get('input[type="checkbox"]').eq(1).should('not.be.checked')
        cy.get('input[type="checkbox"]').eq(2).should('not.be.checked')

        // Selecting one will not affect others
        cy.get('input[type="checkbox"]').eq(0).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).should('not.be.checked')
        cy.get('input[type="checkbox"]').eq(2).should('not.be.checked')

        // Selecting the second checkbox
        cy.get('input[type="checkbox"]').eq(1).check().should('be.checked')
        
        // Assert the state of the first and second checkboxes (both should stay checked)
        cy.get('input[type="checkbox"]').eq(0).should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).should('be.checked')
        cy.get('input[type="checkbox"]').eq(2).should('not.be.checked')
    })

    it('Car dropdown is correct', () => {
        // Here is an example how to explicitely create screenshot from the code
        // Select second element and create screenshot for this area, and full page
        cy.get('#cars')
        .select(1)
        .screenshot('Cars drop-down')
        cy.screenshot('Full page screenshot')

        // Here are given different solutions how to get the length of array of elements in Cars dropdown
        // Next 2 lines of code do exactly the same!
        cy.get('#cars').children().should('have.length', 4)
        cy.get('#cars').find('option').should('have.length', 4)
        
        //Check  that first element in the dropdown has text Volvo
        cy.get('#cars').find('option').eq(0).should('have.text', 'Volvo')
        
        // Advanced level how to check the content of the Cars dropdown
        cy.get('#cars').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(actual).to.deep.eq(['volvo', 'saab', 'opel', 'audi'])
        })
    })


    // Create test similar to previous one

    it('Favorite animal dropdown is correct', () => {
        const expectedAnimalValues = ['Dog', 'Cat', 'Bird', 'Crocodile', 'Lion', 'Hyena', 'Elephant', 'Rhino'];
    
        // Verify the dropdown values
        cy.get('#favoriteAnimal')
            .select(1)  // Selecting an option just to ensure the dropdown is visible
            .screenshot('Favorite Animal dropdown')  // Take a screenshot of the dropdown
    
            // Verify the number of options
            .children('option').should('have.length', expectedAnimalValues.length)
    
            // Verify each option's text and value
            .find('option').each(($option, index) => {
                const expectedValue = expectedAnimalValues[index];
    
                // Assert that each option has the correct text and value
                cy.wrap($option).should('have.text', expectedValue).and('have.value', expectedValue.toLowerCase());
            });
    })


function inputValidData(username) {
    cy.log('Username will be filled')
    cy.get('input[data-testid="user"]').type(username)
    cy.get('#email').type('validemail@yeap.com')
    cy.get('[data-cy="name"]').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('[data-testid="phoneNumberTestId"]').type('10203040')
    // If element has multiple classes, then one of them can be used
    cy.get('#password').type('MyPass')
    cy.get('#confirm').type('MyPass')
    cy.get('h2').contains('Password').click()
}