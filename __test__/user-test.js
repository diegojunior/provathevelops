
var  req = require('../request');

var path = 'http://localhost:3000/users'

function listUser (suffix) {
	return req.request(path + suffix);
}

function updateUser(userId, data) {
	var list = this.listUser('/');
	console.log(list)
	list.forEach(function(user){
		if (user.id == userId) {
			console.log(user.first_name)
			return user;
		}
	});
}


module.exports = {listUser, updateUser}; 