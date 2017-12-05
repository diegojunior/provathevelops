function pop(n) {
  var faker = require('faker')
  var User = require('../models/user');


  for (var i = 0; i < n+1; i++) {

    var newuser = new User(
      { email: faker.internet.email(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        personal_phone: faker.phone.phoneNumber()
      });
    newuser.save(function (err) {
        if (err) {
          console.log('erro');
          return;
        }
    });
  }
}
