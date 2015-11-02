// a middleware test if user is authenticated
module.exports = function(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
};