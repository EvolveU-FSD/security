import React, { useState } from 'react';
import axios from 'axios';
import zxcvbn from 'zxcvbn';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(null);

    const handlePasswordChange = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        
        // Calculate password strength
        const strength = zxcvbn(inputPassword);
        setPasswordStrength(strength);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(passwordStrength.score > 2 ){
            try {
                const response = await axios.post(
                    'http://localhost:8080/api/register',
                    { username, email, password }
                );
                console.log(response.data);
                alert('User registered successfully');
            } catch (error) {
                console.error(error);
                alert('Error registering user');
            }
        } else {
            alert('Please use a stronger password!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                {passwordStrength && (
                    <div style={{ marginTop: '8px' }}>
                        <strong>Password Strength: </strong>
                        {['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'][passwordStrength.score]}
                        <div
                            style={{
                                height: '10px',
                                width: `${(passwordStrength.score + 1) * 20}%`,
                                background: ['#ff4d4f', '#ff7a45', '#ffa940', '#52c41a', '#237804'][passwordStrength.score],
                                transition: 'width 0.3s ease-in-out',
                                borderRadius: '4px',
                                marginTop: '5px',
                            }}
                        ></div>
                    </div>
                )}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
