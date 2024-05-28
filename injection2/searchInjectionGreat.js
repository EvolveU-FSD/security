const sanitize = require('mongo-sanitize');
const validator = require('validator');

userRoutes.route('/search').post(function(req, res) {
    const validatedQuery = validator.isAlphanumeric(req.query.search) // should return true
    let search = sanitize(req.query.search);
    let query = {plants: search}
    if(validatedQuery){
        db.collection('plants').find(query, function (err, plants) {
            if (err) {
                res.json(err);
            } else {
                res.render('plants', { title: 'Plants', plants: plants });
            }
        });
    }
});


//What if we wanted to make sure it was alphanumeric? 
//what about a date?