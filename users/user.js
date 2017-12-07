var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/thevelops', {useMongoClient: true});
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
  email: "String",
  first_name: "String",
  last_name: "String",
  personal_phone: "String"
});

module.exports = mongoose.model("User", UserSchema);
