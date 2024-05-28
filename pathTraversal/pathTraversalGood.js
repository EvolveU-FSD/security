const express = require('express'); 
const path = require('path'); 
const fs = require('fs'); 
const app = express(); 

// allowed files 
const allowedFiles = ['example.txt', 'sample.pdf', 'chicken.pdf']; 

app.get('/download', (req, res) => { 
    const fileName = req.query.file; 
    // Check if the requested file is in the list of allowed files 
    if (!allowedFiles.includes(fileName)) { 
        return res.status(400).send('Invalid file'); 
    } 

    const filePath = path.join(__dirname, 'files', fileName); 

    fs.readFile(filePath, (err, data) => { 
        if (err) { 
            return res.status(404).send('File not found'); 
        } 
        res.send(data); 
    }); 
});

app.listen(3000, () => { 
    console.log('Server running on port 3000'); 

});