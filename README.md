# Unit-Testing
Jackson and Naomy's fifth homework assignment in COMP333. This includes files for Unit Testing and Continuous Integration. Much of the testing involves the code from hw3. 
Work Split: 50/50

## Database
Structure the local database as it appears in the images in the images folder (the only difference is an iditional 'id' column in users_table that works as a primary key)

## Problem 3
1. Follow the instructions from the testing tutorial in https://sebastianzimmeck.de/teaching/comp333/comp333.html to set up the PHPUnit testing environment
2. Include all backend files from https://github.com/Jmac041/MusicRaterApp in local htdocs folder
3. Make the following changes to the Controller/UserController file: Alter the loginAction function - remove the line "$strErrorHeader = 'HTTP/1.1 401 Unauthorized';"
4. Add additional 'testing' file in root directory, which will include the StackTest.php file
5. There are alterations to the test functions in what response codes they should recieve based on the existing backend code. testPost_LoginUser is 200 instead of 201. testPost_FailedLogin is 200 instead of 201. testPost_DeleteSong is 204 instead of 200. 


## Problem 6
For this, we used ChatGPT as a source of generative AI to create unique test cases for both the frontend and backend. <br>
1. For the frontend,
2. For the backend, we did so by providing the entire 'StackTest.php' file and asking it to "create new test cases for usercreate, songcreate, and songupdate following the same structure." 
