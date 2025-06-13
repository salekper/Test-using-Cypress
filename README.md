# Cypress Form Automation – AUT Application

This Cypress project automates the testing of the application form at [https://apply.aut.ac.nz/](https://apply.aut.ac.nz/).  
The test script performs **data-driven validation**, **dynamic field handling**, and **UI behavior checks** across multiple user inputs.

---

## ✅ Features

- 🚀 Automated navigation and form entry for multiple users
- 🧪 Data-driven testing using `userData.json`
- 🔁 Loops through test users to populate form fields
- 📌 Verifies alert behavior when required fields are empty
- 🎲 Random selection of radio button options
- 🧩 Dynamic dropdown handling based on selected country
- ✅ Validates input field values match user data


## Test Execution Steps
1. Navigate to https://apply.aut.ac.nz/
2. Click Start/Continue buttons to begin the application
3. If required fields are missing, assert presence of alert: #alert-dialog-title
4. Go back to the form page and populate the mandatory fields- Loop through the list of user data in the JSON file 
5. Fill in:
First Name (#LegalFirstName)
Last Name (#LegalFamilyName)
Email (#Email)
Country (#ADCountryIDCitizen)
Date of Birth (split into day/month/year fields)
If #ADCountryIDCitizen is  (value > 0), fall back to selecting a default radio option
Handle dynamically loaded dropdowns based on country selection
Log progress and optionally capture screenshots for failed users
