app.post('/login', function (req, res){
    let user = String(req.body.username);
    let pass = String(req.body.password);

    let query = {
        username: user,
        password: pass
    }
 
    db.collection('user').findOne(query, function (err, user) {
        if (err || !user) {
            response.status(401).json({
                status: "error",
                message: "Invalid credentials.",
              });
        } else {
            res.json({username: user.username });
        }
    });
});

//What if we wanted to make sure the username was an email? 
//And the password is a strong password?