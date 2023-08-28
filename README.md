# UserLoginSystem-ExpressJS

This repository contains an API using Node.js and Express.js. The API connects to a Postgres database and allows you to perform CRUD operations on a "users" table.

Installation
To set up the project locally, follow these steps:

Clone the repository to your local machine using the following command:


git clone <repository_url>
Install the required dependencies by running the following command within the project directory:


npm install pg
Install MySQL and set up a database named "test" on your Postgres server.

#Configure the database connection by editing the config.js file and providing the necessary credentials for your MySQL server.

Usage
#Step 1: Connecting to the Database
To establish a connection between Node.js and the Postgres database, ensure that you have installed MySQL and completed the configuration step mentioned in the Installation section.

#Step 2: Renaming the Route
To improve API naming conventions, rename the routing convention of the highlighted line to "/api/users" in the relevant file. This will make the API more professional and organized.

#Step 3: Retrieving Users via the API
Update the user_service.js file to fetch the list of users from the Postgres database using the GET method. This step involves retrieving data (Retrieve in CRUD) and utilizing the established database connection.

#Step 4: Testing the API
To test the API you've built, you can use a tool like Postman. Follow these steps:

Launch Postman (if not already installed, download it from Postman website).

--Enter the URL of your API endpoint: http://localhost:3000/api/users. Choose the HTTP method as GET.

Send the request and observe the response. The response should contain the list of users retrieved from the database.
