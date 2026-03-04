# Cypress automation example
 
 ## URL
https://www.saucedemo.com

---

## Project Structure

```
Cypress-automation/
├── README.md
├── package.json
├── package-lock.json
├── yarn.lock
├── cypress/
│   ├── cypress.config.js
│   ├── fixtures/
│   ├── support/
│   └── e2e/
│       ├── loginSpec.cy.js
│       ├── productDetailSpec.cy.js
│       ├── addProductInTheCartSpec.cy.js
│       ├── removeProductsSpec.cy.js
│       ├── buyProductsSpec.cy.js
│       └── verifyPriceConsistencySpec.cy.js
└── node_modules/
```

## User Story 1
As a Swag Labs admin, I need to access/logout of the platform with the 4 different user types.

## Acceptance Criteria 1
Ensure the Swag Labs admins are able to:
1. Log in/Log out of Swag Labs (standard_user)
2. Not log in to Swag Labs and get an error (locked_out_user)
3. Log in/Log out of Swag Labs (problem_user)
4. Log in/Log out of Swag Labs (performance_glitch_user)

## User Story 2
As a Swag Labs standard_user, I need to open the product detail page in the Swag Labs ordering platform so that I can get more information about the products.

## Acceptance Criteria 2
Ensure the Swag Labs standard_user is able to:
1. Log in to Swag Labs
2. Navigate to the Products page
3. Access the product details view

## User Story 3
As a Swag Labs standard_user, I need to add products to the cart in the Swag Labs ordering platform so that I can buy them.

## Acceptance Criteria 3
Ensure the Swag Labs standard_user is able to:
1. Log in to Swag Labs
2. Navigate to the Products page
3. Add product(s) to the cart
4. Navigate to the Products details page
5. Add product(s) to the cart

## User Story 4
As a Swag Labs standard_user, I need to review my previously added cart products in the Swag Labs ordering platform so that I can remove them.

## Acceptance Criteria 4
Ensure the Swag Labs standard_user is able to:
1. Log in to Swag Labs
2. Navigate to the Products page
3. Add product(s) to the cart
4. Remove product(s)
5. Navigate to the Products details page
6. Remove product(s)
7. Navigate to the shopping cart
8. Remove product(s)

## User Story 5
As a Swag Labs standard_user, I need to buy all the products added to the shopping cart in the Swag Labs ordering platform.

## Acceptance Criteria 5
Ensure the Swag Labs standard_user is able to:
1. Log in to Swag Labs
2. Navigate to the shopping cart
3. Checkout
4. Complete a form with personal data
5. See an overview of the order (qty, name, description, unit price, payment information, shipping information, item total price, tax, total price)
6. See a confirmation page

# New User Story and Acceptance Criteria
As a Swag Labs standard_user, I need to verify that prices are the correct ones throught the E2E buying process in the Swag Labs ordering platform.

## Acceptance Criteria
1. Log in to Swag Labs
2. Add to cart one or more items
3. Navigate to the shopping cart
4. Verify items prices are similars form the ones added in step 2
5. Checkout
6. Complete a form with personal data
7. Verify items prices are similars form the ones added in step 2
8. See an overview of the order, total prices must equal to all items's prices summatory


# Test Cases
Section where the different test cases of the challenge will be defined.

## User Story 1

### Test case 1 - Log in Swag Labs using "standard_user"

| Number | Step | Expected result|
| :--- | :---- | :--- |
| 1 | Navigate to "https://www.saucedemo.com" | Page is loaded |
| 2 | Insert "standard_user" in the Username text field | User name is inserted |
| 3 | Insert "secret_sauce" in the Password text field | Password is inserted |
| 4 | Click Login button | User access the application, the Inventory view is loaded |
| 5 | Click the left upper corner burger button | Navigation menu is visible |
| 6 | Click in Logout option | User is loged out, the login web is loaded, no error message is visble |

### Test case 2 - Log in Swag Labs using "locked_out_user"

| Number | Step | Expected result|
| :--- | :---- | :--- |
| 1 | Navigate to "https://www.saucedemo.com" | Page is loaded |
| 2 | Insert "locked_out_user" in the Username text field | User name is inserted |
| 3 | Insert "secret_sauce" in the Password text field | Password is inserted |
| 4 | Click Login button | Error message "Epic sadface: Sorry, this user has been locked out." is visible |

### Test case 3 - Log in Swag Labs using "problem_user"

| Number | Step | Expected result|
| :--- | :---- | :--- |
| 1 | Navigate to "https://www.saucedemo.com" | Page is loaded |
| 2 | Insert "standard_user" in the Username text field | User name is inserted |
| 3 | Insert "secret_sauce" in the Password text field | Password is inserted |
| 4 | Click Login button | User access the application, the Inventory view is loaded |
| 5 | Click the left upper corner burger button | Navigation menu is visible |
| 6 | Click About option | Application navigates to a web showing a 404 error message |
| 7 | Navigate back using browser's functionality | Navigation menu is visible |
| 8 | Click in Logout option | User is loged out, the login web is loaded, no error message is visble |

### Test case 4 - Log in Swag Labs using "performance_glitch_user"

| Number | Step | Expected result|
| :--- | :---- | :--- |
| 1 | Navigate to "https://www.saucedemo.com" | Page is loaded |
| 2 | Insert "performance_glitch_user" in the Username text field | User name is inserted |
| 3 | Insert "secret_sauce" in the Password text field | Password is inserted |
| 4 | Click Login button | Verify it takes more time than ussual. User access the application, the Inventory view is loaded |
| 4 | Click the left upper corner burger button | Navigation menu is visible |
| 5 | Click in Logout option | User is loged out, the login web is loaded, no error message is visble |

## User Story 2

### Test case - Open the product detail

| Number | Step | Expected result|
| :--- | :---- | :--- |
| 1 | Navigate to "https://www.saucedemo.com" | Page is loaded |
| 2 | Insert "standard_user" in the Username text field | User name is inserted |
| 3 | Insert "secret_sauce" in the Password text field | Password is inserted |
| 4 | Click Login button | User access the application, the Inventory view is loaded |
| 5 | Click in any product name | Application navigates to the produc detail view. No errors are visible |

## User Story 3

### Test case 3 - Add products to the cart

| Number | Step | Expected result|
| :--- | :---- | :--- |
| 1 | Navigate to "https://www.saucedemo.com" | Page is loaded |
| 2 | Insert "standard_user" in the Username text field | User name is inserted |
| 3 | Insert "secret_sauce" in the Password text field | Password is inserted |
| 4 | Click Login button | User access the application, the Inventory view is loaded |
| 5 | Click in any product Add to cart button | Button text changes to Remove. Upper right cart icon now contains a red badge with the 1 value |
| 6 | Click in the cart icon | Cart view is loaded, the selected product(s) is included |

## User Story 4

### Test case 4 - Verify remove product functionality

| Number | Step | Expected result|
| :--- | :---- | :--- |
| 1 | Navigate to "https://www.saucedemo.com" | Page is loaded |
| 2 | Insert "standard_user" in the Username text field | User name is inserted |
| 3 | Insert "secret_sauce" in the Password text field | Password is inserted |
| 4 | Click Login button | User access the application, the Inventory view is loaded |
| 5 | Click in any product Add to cart button | Button text changes to Remove. Upper right cart icon now contains a red badge with the 1 value |
| 6 | Click in the remove button | Button text changes to Add to cart. Upper right cart icon now not contains a red badge |
| 7 | Click in any product Add to cart button | Button text changes to Remove. Upper right cart icon now contains a red badge with the 1 value |
| 8 | Click in the selected product | Application navigates to the product detail view. No errors are visible |
| 9 | Click in the remove button | The product is no longer visible in the detail view |
| 10 | Click the left upper corner burger button | Navigation menu is visible |
| 11 | Click in All items option | The Inventory view is loaded |
| 12 | Click in any product Add to cart button | Button text changes to Remove. Upper right cart icon now contains a red badge with the 1 value |
| 13 | Click in the upper right cart icon | Application navigates to the product detail view. No errors are visible |
| 14 | Click in the remove button | The product is no longer visible in the cart view |

### Test case 5 - Buy all the products selected

| Number | Step | Expected result|
| :--- | :---- | :--- |
| 1 | Navigate to "https://www.saucedemo.com" | Page is loaded |
| 2 | Insert "standard_user" in the Username text field | User name is inserted |
| 3 | Insert "secret_sauce" in the Password text field | Password is inserted |
| 4 | Click Login button | User access the application, the Inventory view is loaded |
| 5 | Click in any product Add to cart button | Button text changes to Remove. Upper right cart icon now contains a red badge with the 1 value |
| 6 | Click in the cart icon | Cart view is loaded, the selected product(s) is included |
| 7 | Click the Checkout button | View showing personal info to fill is loaded |
| 8 | Fill First Name, Last Name and Zip/Postal Code using any values | Information is correctly inserted in the fields |
| 9 | Click Continue button | Application navigates to Overview |
| 10 | Verify that added product is the one(s) selected in step 5 | Product(s) is correct |
| 11 | Verify that Payment Info is filled | Payment info is filled |
| 12 | Verify that Shipping Info is filled | Shipping Info is filled |
| 13 | Verify that Price Info is filled | Price Info is filled |
| 14 | Click Finish button | Process is completed, message "Thank you for your order!" is visible. No errors are visible |


# How to Run the Tests
Section where the necessary instructions to run the tests will be added.

Prerequisites
- **Node.js** (v16+)
- **Yarn** (v1.22+)
- **Cypress**(15.10.0+)

Git command examples used for the project:
```bash
git clone https://github.com/luinungom/Cypress_automation_example.git
git status
git add .
git commit -m "feat: implementar tests para User Story 1-5"
git remote -v
git checkout -b feature/verify-price-consistency
git pull origin main
git log --oneline
git diff
git stash
git show -s --format="%H" HEAD
```

Using Cypress GUI:
1. Open a cmd and set it in the project's root folder
2. Insert command "yarn cypress open"
3. Navigate in Cypress application and run the different specs

Using terminal all specs:
1. Open a cmd and set it in the project's root folder
2. Insert command "yarn cypress run" for running all specs. Add "--headed" at the end for raising a web browser during execution

Using terminal, selected spec:
1. Open a cmd and set it in the project's root folder
2. Insert command "yarn cypress run --spec "cypress/e2e/XXXX.cy.js"" for running one spec. Add "--headed" at the end for raising a web browser during execution.  
XXXX can be any of the following spec:  
addProductInTheCartSpec  
buyProductsSpec  
loginSpec  
productDetailSpec  
removeProductsSpec  
verifyPriceConsistencySpec
