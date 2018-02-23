# MassSpec

## Commands

###1. Setup

`npm install`

###2. Compile
`npm run compile`

###3. Run Dev Server

Start the development server with this command:
 
`npm start`

## Setup Mocha testing framework

Once your project is loaded in IntelliJ go through the following steps to setup Mocha (JavaScript) tests.

1. Select the `Run/Debug Configuration` dropdown in the top right corner, and select "Edit Configurations"
1. Under "Defaults" select "Mocha" from the list
1. Under working directory, select the base of your JavaScript files (i.e. `/Users/pivotal/workspace/project-jigsaw/react-app`)
1. Under "User Interface" select "bdd"
1. Under "Extra Mocha options" enter `tools/testSetup.js`
1. Select the "File Patterns" radio box, and enter `spec/**/*.spec.js` in the "Test file patterns" textbox
1. Click "Apply" to save the changes
1. Now that the defaults exist, click "+" to add a Mocha configuration, name it "JS Tests" and click OK.
