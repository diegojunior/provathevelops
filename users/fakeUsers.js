var mongoose = require('mongoose')
var faker = require('faker');
var User = require('./user');

for (var i = 0; i < 50; i++) {

    var newuser = new User(
      { email: faker.internet.email(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        personal_phone: faker.phone.phoneNumber()
      });

     User.create(newuser, function (err) {
         if (err) {
           console.log(err);
           return;
         }
     });
  }
