import React, { useState } from 'react'; 
import axios from 'axios'; 

const Register = () => { 
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleSubmit = async (e) => { e.preventDefault(); 
        try { 
            const response = await axios.post(
                'http://localhost:5000/api/register', 
                { username, email, password }
            ); 
            console.log(response.data); 
            alert('User registered successfully'); 
        } catch (error) { 
            console.error(error); 
            alert('Error registering user'); 
        } 
    }; 
    return ( 
        <form onSubmit={handleSubmit}> 
            <div> 
                <label>
                    Username:
                </label> 
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                /> 
            </div> 
            <div> 
                <label>
                    Email:
                </label> 
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                /> 
            </div> 
            <div> 
                <label>
                    Password:
                </label> 
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                /> 
            </div> 
            <button type="submit">
                Register
            </button> 
        </form> 
    ); 
}; 

export default Register;