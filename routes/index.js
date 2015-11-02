var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// if user has logged in, redirect
	if (req.user) {
		return res.redirect('/orders');
	}
	var vm = {
		title: 'Login',
		error: req.flash('error')
	};
	res.render('index', vm);
});

module.exports = router;