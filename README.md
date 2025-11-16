# automatic-A11y - an example app for automatic accessibility testing with React + TypeScript + Vite

Code used in Cecilie's Course Automatic Accessibility Testing for All
Slides: https://docs.google.com/presentation/d/1-KI2xtE9_PpKIKh-YOoZbppbQQsGfOll2AKm0WtTlUI/edit?usp=sharing


## Resources ##
* Git
Windows: Git for Windows 
Mac or Unix: do nothing, git’s already installed

* Code editor.
I will use Visual Studio Code, feel free to use what you want
https://code.visualstudio.com/

# Getting started 
* Download and install Node.js. Instructions here: https://nodejs.org/
* Clone project from Github: `git clone https://github.com/anneceh/automatic-A11y/`
* cd into the project catalog: `cd automatic-A11y`
* Install dependencies with `npm install`
* Start the app with `npm run dev`


# Part 0 - Semi-automatic testing with Google lighthouse
* Start the app with `npm run dev`. The command line will give you the address where you can see the app running. 
* Open Chrome or Edge and open the app 
* Open developer tools
Windows: Ctrl + Shift + I
Mac: Command + Option + I
* Select Accessibility and generate report
* Answer the following: 
* What is the accessibility score?
* What kind of errors did the audit find?
* What kind of errors did the audit not find?  

# Part 1 - Unit Testing with Vitest-Axe / Jest-Axe

Vitest-Axe is a fork of jest-axe. It shares that library's implementation and API. It is intended to make it easier to include its matchers without clashes between Vitest and Jest's environment or types.

## Exercise 1.1 -  Run the unit tests
* Run the unit tests with `npm test`
* How many errors are found?

## Exercise 1.2 - Look at and change the configuration
* Configure the unit tests to ignore the errors.   
* Tip: read the section on Axe configuration in the jest-axe documentation https://github.com/nickcolley/jest-axe

## Exercise 1.3 - Fix the errors
* Change the configuration back and fix the errors instead of ignoring them

# Part 2 - Linting

## Exercise 2.1 -  Run the linter
* Run eslint with `npm run lint`
* How many accessibility errors are found by eslint?

# Part 3 - Integration Testing with Playwright

## Exercise 3.1 - Run the example
* Open Playwright with `npx playwright test`
* Run the tests
* Read more about the errors found at https://dequeuniversity.com/rules/axe/4.10/

## Exercise 3.2 - Change the configuration
* Configure the tests to ignore the errors.  
* Tip: read the documentation: https://playwright.dev/docs/accessibility-testing

## Exercise 3.3 Write your own test
* Write your own test where you check accessibility, add a couple of todos and then check accessibility again. Look in the test-examples folder if you need help/inspiration for tests.

# Common errors #
* You get code ENOENT when you run `npm install`
* Problem: you are in the wrong directory
* Solution: cd into the project catalog: `cd automatic-A11y` and run `npm install`
