const sanitize = require('mongo-sanitize');
const validator = require('validator');

app.post('/login', function (req, res){
    let user = sanitize(req.body.username);
    let validatedUser = validator.isEmail(user); //should return true
    let pass = sanitize(req.body.password);
    let validatedPass = validator.isStrongPassword(pass); //should return true
    let query = {
        username: user,
        password: pass
    }
 if(validatedUser && validatedPass){
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
}
});

//What if we wanted to make sure the username was an email? 
//And the password is a strong password?