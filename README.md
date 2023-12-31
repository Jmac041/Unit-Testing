# Unit-Testing
Jackson and Naomy's fifth homework assignment in COMP333. This includes files for Unit Testing and Continuous Integration. Much of the testing involves the code from hw3. 
Work Split: 50/50

The latest update to this project was made at 2:00 PM by Naomy Chepngeno. Jackson completed the parts he was assigned before the 10:00 AM deadline. Unfortunately, laptop issues prevented me from completing my tasks on time and approving Jackson's pull requests until noon.

## Database
Structure the local database as it appears in the images in the images folder (the only difference is an iditional 'id' column in users_table that works as a primary key)

## Problem 2
To setup and run the tests in pytest: <br>
1. Install pytest with 'pip install -U pytest' (or 'pip3 install pytest')
2. Open terminal in directory of unit_testing_pytest.py
3. Run 'pytest unit_testing_pytest.py' or 'pytest unit_testing_pytest.py -v' for a more verbose response

## Problem 3
1. Follow the instructions from the testing tutorial in https://sebastianzimmeck.de/teaching/comp333/comp333.html to set up the PHPUnit testing environment
2. Include all backend files from https://github.com/Jmac041/MusicRaterApp in local htdocs folder
3. Make the following changes to the Controller/UserController file: Alter the loginAction function - remove the line "$strErrorHeader = 'HTTP/1.1 401 Unauthorized';"
4. Add additional 'testing' file in root directory, which will include the StackTest.php file
5. There are alterations to the test functions in what response codes they should recieve based on the existing backend code. testPost_LoginUser is 200 instead of 201. testPost_FailedLogin is 200 instead of 201. testPost_DeleteSong is 204 instead of 200. 
## Problem 4: Frontend Unit Testing

## Step 1: Environment Setup

### macOS
1. Follow the instructions provided in the [testing tutorial on the class website](https://sebastianzimmeck.de/teaching/comp333/comp333.html) for setting up the frontend unit test environment.

2. Ensure that you have Node.js and npm (Node Package Manager) installed on your macOS. If not, you can download them from the [Node.js official website](https://nodejs.org/).

## Step 2: Project Setup

1. Clone the `src` files from the music repository to your local machine if you haven't already.

2. Navigate to the project directory using your terminal or command prompt.

3. Install project dependencies by running the following command:

   ```bash
   npm install
Install Jest using
 ```
 yarn add --dev jest
or
```
npm install --save-dev jest




 ### Configuration files  
Ensure that the following configuration files are present in your project's root directory:
jest.config.js: Configuration file for Jest

It should looke like this:

module.exports = {
  preset: 'react-scripts',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

};

babel.config.js: Configuration file for Babel
It should look like this;

module.exports = {
  presets: ['react-app'],
  // Other Babel configuration options go here
};

Add the following to your package.json;

{
  "scripts": {
    "test": "jest"
  }
}

Finally save changes and run yarn test or npm test to the registration files


## Problem 6
For this, we used ChatGPT as a source of generative AI to create unique test cases for the backend. We did so by providing the entire 'StackTest.php' file and asking it to "create new test cases for usercreate, songcreate, and songupdate following the same structure." ChatGPT successfully mimiced the structure of the tests and provided functional test cases. 
