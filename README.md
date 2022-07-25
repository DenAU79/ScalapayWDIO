# Scalapay_DZ

### \_Welcome to Scalapay_DZ

## 📄 Description

An automated tests for the Scalapay API and Merchant Web Portal

## ⚙️ Requirements

Node version v13.14.0 or higher.

## 🎮 Usage

1. Git clone https://github.com/DenAU79/ScalapayWDIO.git
2. Open terminal in newly cloned folder (ScalapayWDIO)
3. Run following command in a terminal: npm i
4. To run all tests - npm run wdio
5. To run one specific test - npx wdio run ./wdio.conf.js --spec integration\specs\api\payment.spec.js
6. To run tests in a browser mode comment line 60 in wdio.conf.js
   //args: ["--headless"],

## 😋 Who cooked it?

Denys Zdielnik a highly passionate QA automation engineer 😊

## ⚖️ Recommendation on how to use the above tests across Development, Staging and Production environments.

I would recommend automating the CI environment first with mocking external services and databases. As soon as you merge the code it tells you whether it’s safe or not.
Running these tests in Development environment will help to understand does the service we test work with the other services it will need to connect to?
Staging environment, almost the same as in production, so this is the last gate before production to test the implementation, migration, configuration and business requirements.
Running tests in production will help better see how the service performs under real-world conditions. Testing code change against real users is the best way to be sure that all edge cases are covered.
