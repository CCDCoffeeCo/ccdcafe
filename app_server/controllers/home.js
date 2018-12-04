/* GET home page */
module.exports.homelist = function(req,res) {
	res.render('pages/index',{page: 'Home'});
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req,res) {
	res.render('pages/index', { title: 'Location info'});
};

/* GET 'Add review' page */
module.exports.addReview = function(req,res) {
	res.render('pages/index', { title: 'Add review'});
};
