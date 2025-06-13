describe('Verify data driven test with empty field validation', () => {
  it('should loop through users and validate form behavior', () => {
    cy.fixture('userData.json').then((jsonData) => {
      jsonData.users.forEach((user) => {
        cy.visit('https://apply.aut.ac.nz/');

         // Step 1: Initial Start
        cy.get('.leftBox > div > .jss124').click();

        // Step 2: Click continue/start on next page
        cy.get('[style="margin-top: 50px; text-align: right; margin-right: 20px;"] > .jss124').click();

        // Step 3: Check for alert dialog after clicking start
        cy.get('body').then(($body) => {
          if ($body.find('#alert-dialog-title').length > 0) {
            // Alert exists
            cy.get('#alert-dialog-title').should('be.visible');
          } else {
            // No alert, continue by clicking the next section cy.get('.completeNow > .jss99')
            cy.get('.completeNow > .jss99').click();

cy.wait(1000);
            
            // Step 4: Fill form fields if they exist
            if (user.firstName) {
              cy.get('#LegalFirstName').clear().type(user.firstName).should('have.value', user.firstName);
            }
            if (user.lastName) {
              cy.get('#LegalFamilyName').clear().type(user.lastName).should('have.value', user.lastName);
            }
            if (user.email) {
              cy.get('#Email').clear().type(user.email).should('have.value', user.email);
            }
            
            if (user.dob && user.dob.trim() !== '' ){
            let dob=user.dob.split('-');
            cy.get('#birthDay').select(dob[2]);
            cy.get('#birthMonth').select(dob[1]);
            cy.get('#birthYear').select(dob[0]);
            }
            
            
            cy.wait(1000);
            // Step 4: Randomly select one radio option
            const radioOptions = [
              '.radio-group > :nth-child(1) > label > span',
              ':nth-child(2) > label > span',
              ':nth-child(3) > label > span'
            ];
            const randomIndex = Math.floor(Math.random() * radioOptions.length);
            cy.get(radioOptions[randomIndex]).click();

            //country drop down cy.get(':nth-child(7) > .jss342 > .jss346')
           //cy.get(':nth-child(7) > .jss342 > .jss346 label span').eq(0).click();

          if (user.country && user.country.trim() !== '') {
          cy.get('#ADCountryIDCitizen').select(user.country);
          }
//handle the new options under the country field 

cy.get('#ADCountryIDCitizen')
  .invoke('val')
  .then((val) => {
    const numericVal = Number(val);
    if (numericVal > 0) {
      // Value is 0 or less, select fallback radio option 
      cy.get('.jss1 > :nth-child(8)').within(() => {
        cy.get('.radio-group > :nth-child(3) > label > span').click();
    
  });
    }
  });
  cy.get('body').then(($body) => {
    if ($body.find('.jss1 > :nth-child(9)').length >0
  ){

    cy.get('.jss1 > :nth-child(9)').within(() => {
      cy.get('.radio-group > :nth-child(3) > label > span').click();
  });
}
  })

          //  Click continue button after form   
          cy.get('[style="margin-top: 50px; text-align: right; margin-right: 20px;"] > .jss124 > .jss99').click();
          cy.wait(1000);
          cy.get('.backBtn > .jss99').click();
          cy.wait(1000);
          }
          })
        
      });
    });
  });
});