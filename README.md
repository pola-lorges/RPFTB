# RPFTB
This is a project for UI and API test automation on the site https://automationexercise.com/

I automated the following UI tests:

- UI Test1 - Register user
- UI Test2 - Login user
- UI Test3 - Add to Cart (Data-Driven Tests from External file)
- API Test1: POST To Create/Register User Account
- API Test2: POST To Verify Login with valid details
- API Test3: POST To Verify Login with invalid details
- API Test4: POST To Search Product

Unfortunately playwright is not suitable for API testing (it does not allow you to modify the content-type when sending requests)
this is why the api tests don't work

karate api is best

### Installing

- Clone the project
- Install npm with "npm install"
- Install playwright with "npm init playwright@latest"
- Run the tests with "npx playwright test  --project='chromium'"

If the reporting is not displayed, run this command "npx playwright show-report" to see it


