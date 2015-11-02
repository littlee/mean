var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

var userSchema = new Schema({
	firstName: String,
	lastName: String,
	roomNumber: Number,
	email: {
		type: String,
		required: 'Email is required'
	},
	password: {
		type: String,
		required: 'Password is required'
	},
	created: {
		type: Date,
		default: Date.now
	}
});

userSchema.path('email').validate(function(value, next) {
	userService.findUser(value, function(err, user) {
		if (err) {
			console.log(err);
			return next(false);
		}

		next(!user); // if user === null, return true
	});
}, 'Email already in use');

var User = mongoose.model('User', userSchema);

module.exports = {
	User: User
};