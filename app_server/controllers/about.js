/* GET about page */
module.exports.about = function(req,res) {
	res.render('pages/about', { page: 'About'});
};
