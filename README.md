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

Use Name: 12345 and Pass: 12345 to access the application, the Name and Pass can be changed insite the app.js file (line 16):
```
app.use(function (req, res, next) {
  var credentials = auth(req);
  if (!credentials || credentials.name !== '12345' || credentials.pass !== '12345') {
    res.status(401);
    res.header('WWW-Authenticate', 'Basic realm="example"');
    res.send('Access denied');
  } else {
    next();
  }
});
```

Using the functions of the application will only be possible after the database is initiated.

## Generating fake users

### Running Script
It is possible to generate 50 fake users with the following command line:
```
npm run fakeUsers
```

## API documentation in Swagger
You can access the API documentation here:
https://app.swaggerhub.com/apis/Andrefff17/provathevelops/1.0.0#/
