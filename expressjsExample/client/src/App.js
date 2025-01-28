import React from 'react'; 
import Register from './components/Register'; 
import Login from './components/Login'

const App = () => { 
  return ( 
    <div className="App"> 
      <h1>
        User Registration
      </h1> 
      <Register /> 
      <h1>
        User Login
      </h1>
      <Login />
    </div> 
  ); 
}; 

export default App;