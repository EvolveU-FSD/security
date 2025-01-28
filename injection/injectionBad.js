app.post('/api/login', async (req, res) => {
    let query = {
        username: req.body.username,
        password: req.body.password
    }
    try {
        // Find the user by username and password
        const user = await User.find(query);

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


//What would theoretically happen if password = { "$ne": "randomValue" }? (Query Selector Injection)
