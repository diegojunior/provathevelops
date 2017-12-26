const fs = require('fs')
const path = require('path');

function request(url) {
	return new Promise((resolve, reject) => {
	  fs.readFile(path.join(__dirname) + '../__mockData__/' + `data.json`, 'utf8', (err, data) => {
	    if (err) {
	    	reject(err);
	    }
	    resolve({ entity: JSON.parse(data) })
	  });
	})
}

module.exports = {request}; 