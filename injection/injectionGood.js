app.post('/api/login', async (req, res) => {
    let user = String(req.body.username);
    let pass = String(req.body.password);

    let query = {
        username: user,
        password: pass
    }
    
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
});

//What if we wanted to make sure the username was an email? 
//And the password is a strong password?