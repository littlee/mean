var express = require('express');
var router = express.Router();

/* GET orders page. */
router.get('/', function(req, res, next) {
	var vm = {
		title: 'This is order',
		firstName: req.user ? req.user.firstName : null
	};
	res.render('orders/index', vm);
});

module.exports = router;