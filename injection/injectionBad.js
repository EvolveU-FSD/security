app.post('/login', function (req, res){
    let query = {
        username: req.body.username,
        password: req.body.password
    }
 
    db.collection('user').find(query, function (err) {
        if (err) {
            response.status(401).json({
                status: "error",
                message: "Invalid credentials.",
              });
        } else {
            if (user.length >= 1) {
                res.json({username: user[0].username });
            }
        }
    });
});


//What would happen if password = "[$ne]=abc123"? (Query Selector Injection)
