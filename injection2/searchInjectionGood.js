userRoutes.route('/search').post(function(req, res) {
    let search = String(req.query.search);
    let query = {plants: search}

    db.collection('plants').find(query, function (err, plants) {
        if (err) {
            res.json(err);
        } else {
            res.render('plants', { title: 'Plants', plants: plants });
        }
    });
});


//What if we wanted to make sure it was alphanumeric? 
//what about a date?