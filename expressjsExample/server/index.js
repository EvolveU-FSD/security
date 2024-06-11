import express from 'express'; 
import mongoose from 'mongoose'; 
import bodyParser from 'body-parser'; 
import cors from 'cors';
import easyWaf from 'easy-waf';
import { isDisposableEmail } from './disposableEmailChecker/disposableEmailChecker.js'

const app = express(); 
const PORT = 5000; 

// Middleware 
app.use(easyWaf({
    allowedHTTPMethods: ['GET', 'POST'],
    queryUrlWhitelist: ['github.com'],
    modules: {
        directoryTraversal: {
            enabled: true,
            excludePaths: /^\/exclude$/i,
        },
    },
    ipBlacklist: ['127.0.0.1', '::1'],
    dryMode: true
}));

app.use(bodyParser.json()); 
app.use(cors()); 

// MongoDB connection 
mongoose.connect('mongodb+srv://inceptionU:iv3zg3en7kQmPQTt@cluster0.rn8gnex.mongodb.net/', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
) 
.then(() => console.log('MongoDB connected')) 
.catch(err => console.log(err)); 

// User schema 
const UserSchema = new mongoose.Schema({ 
    username: { type: String, required: true }, 
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true } 
}); 
const User = mongoose.model('User', UserSchema); 

// Routes 

app.post('/api/register', async (req, res) => { 
    const { username, email, password } = req.body; 
    if(!isDisposableEmail(email)) {
        try { 
            
            const user = new User({ username, email, password }); 
            await user.save(); 
            res.status(201).send('User registered'); 
        } catch (error) { 
            res.status(400).send(error.message); 
        } 
    } else {
        console.log("user register attempt with disposable email")
        res.status(401).send("Invalid email domain, disposable emails restricted"); 
    }
}); 

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);