userRoutes.route('/search').post(function(req, res) {
    let search = req.query.search;
    let query = { $where: `this.plants == '${search}'` }

    db.collection('plants').find(query, function (err, users) {
        if (err) {
            res.json(err);
        } else {
            res.render('plants', { title: 'Plants', plants: plants });
        }
    });
});


//What would happen if the search query is '"\;{}() ?
//What if the search query is ';while(true){}' ?