const sanitize = require('mongo-sanitize');
const validator = require('validator');

app.post('/api/login', async (req, res) => {
    let user = sanitize(req.body.username);
    let validatedUser = validator.isEmail(user); //should return true
    let pass = sanitize(req.body.password);
    let validatedPass = validator.isStrongPassword(pass); //should return true
    let query = {
        username: user,
        password: pass
    }
 if(validatedUser && validatedPass){
    try {
        const user = await User.findOne(query);
    
        if (user.length === 0) {
            return res.status(401).json({
                status: "error",
                message: "Invalid credentials.",
            });
        }

        // Successful login
        res.status(200).json({ username: user[0].username });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "An internal server error occurred.",
        });
    }
}
});

//What if we wanted to make sure the username was an email? 
//And the password is a strong password?