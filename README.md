# provathevelops
Prova Iniciante da theVelops - André Faria Formagio Fonseca

## Getting started

### Prerequisites

This application requires NodeJS, NPM and MongoDB installed to run properly.

### Installing

Use the following line to install the dependencies of the app:
```
npm install
```

## Starting Database

To start the database, go to the following folder using the command line:
~/MongoDB/Server/"Version"/bin
Where ~ is the place where MongoDB is installed.

From there, use the following line to initiate the database:
```
mongod --dbpath ~\provathevelops\data\
```
Using ~ as the path to the "provathevelops" folder.

## Starting Server

To start the server, type the following in the command line:
```
npm start
```

### Accessing application

Once the server is running, it is possible to access the applications in:
http://localhost:3000

Using the functions of the application will only be possible after the database is initiated.

## Generating fake users

### Running Script
It is possible to generate 50 fake users with the following command line:
```
npm run fakeUsers
```

### Documentation
Inside the "scriptEx JSDoc" folder, it is possible to see the documentation of the fakeUsers script.

## API documentation in Swagger
You can access the API documentation here:
https://app.swaggerhub.com/apis/Andrefff17/provathevelops/1.0.0#/
