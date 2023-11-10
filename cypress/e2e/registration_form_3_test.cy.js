beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html');
});

/*
BONUS TASK: add visual tests for registration form 3
Task list:
* Test suite for visual tests for registration form 3 is already created
* Create tests to verify visual parts of the page:
    * radio buttons and its content
    * dropdown and dependencies between 2 dropdowns
    * checkboxes, their content and links
    * email format
 */


/*
BONUS TASK: add functional tests for registration form 3
Task list:
* Create second test suite for functional tests
* Create tests to verify logic of the page:
    * all fields are filled in + validation
    * only mandatory fields are filled in + validations
    * mandatory fields are absent + validations (try using function)
    * If city is already chosen and country is updated, then city choice should be removed
    * add file (google yourself for solution)
 */

describe('Registration Form 3: Functional Tests', () => {

    it('Submit form with all fields filled + validation', () => {
        // Test steps for filling in ALL fields
        // Assert that submit button is enabled
        // Assert that after submitting the form, the success message is visible
    });

    it('Submit form with only mandatory fields filled + validations', () => {
        // Test steps for filling in ONLY mandatory fields
        // Assert that submit button is enabled
        // Assert that after submitting the form, the success message is visible
    });

    it('Mandatory fields are absent + validations', () => {
        // Test steps for not filling in mandatory fields
        // Assert that submit button is not enabled
        // Use a function to enter correct data and then clear the input fields you are testing
    });

    it('Update country should remove city choice if city is already chosen', () => {
        // Test steps for choosing a city and updating the country
        // Assert that city choice is removed
    });

    it('Add file (bonus task)', () => {
        // Test steps for uploading a file
        // Assert that the file is successfully uploaded
    });
});

describe('Registration Form 3: Visual Tests', () => {

    it('Check radio buttons and their content', () => {
        // Test steps to check radio buttons and their content
    });

    it('Check dropdown and dependencies between 2 dropdowns', () => {
        // Test steps to check dropdown and dependencies
    });

    it('Check checkboxes, their content, and links', () => {
        // Test steps to check checkboxes, their content, and links
    });

    it('Check email format', () => {
        // Test steps to check email format
    });
});
