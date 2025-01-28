import React, { useState } from 'react'; 
import axios from 'axios'; 

const Register = () => { 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleSubmit = async (e) => { e.preventDefault(); 
        try { 
            const response = await axios.post(
                'http://localhost:8080/api/login', 
                { username, password }
            ); 
            console.log(response.data); 
            alert('User logged in successfully'); 
        } catch (error) { 
            console.error(error); 
            alert('Error with user login'); 
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
                login
            </button> 
        </form> 
    ); 
}; 

export default Register;