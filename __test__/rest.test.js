//jest.mock(`../request`)
//const users = require('./user-test');
const request = require('supertest');
const express = require('express');
const app = express();

describe('Users delete ', function() {
    it('all users', function() {
    	return request('http://localhost:3000')
    				.get('/users')
    				.auth('12345', '12345')
    				.expect(200)
      				.then(response => {
          				if (response.body.length > 0) {
          					expect(response.body[0].first_name).toBeDefined();	
          				}
      				})
  				});
    });

/*describe('List all users using Promises', () => {
	it ('should list all users', () => {
		return users
					.listUser(`/`)
					.then(data => {
						expect(data.entity).toBeDefined();
						expect(data.entity.list.length).toEqual(3);
						expect(data.entity.list[0].first_name).toEqual('André');
					})
	})
});*/