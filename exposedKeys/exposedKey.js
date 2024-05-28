const express = require('express'); 
const cors = require("cors");

const app = express(); 
const port = 3000; 
const apiKey = process.env.API_KEY; // Store your API key in an environment variable 

app.use(cors());

app.get('/datainsecure', async (req, res) => { 
    res.json({message:"success!"})
}); 

app.get('/datasecure', async (req, res) => { 
    console.log("securly fetching data")
    try { 
        const response = await fetch(`http://localhost:3000/datainternal?api_key=${apiKey}`); 
        const data = await response.json(); 
        res.json(data); 
    } catch (error) { 
        console.error('Error:', error); 
        res.status(500).send('Internal Server Error'); 
    } 
}); 


app.get('/datainternal', async (req, res) => { 
    console.log("fetching internally")
    res.json({message:"success!"})
}); 

app.listen(port, () => { 
    console.log(`Server running at http://localhost:${port}`); 
});