import React, { useRef } from 'react'
import './Login.css' // Assuming you have a CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
       const params = {
        "email": email.current.value,
        "password": password.current.value
       }
       axios.post("http://localhost:3030/student/login", params).then(function(res){
        if (res.data.status === "success") {
            alert("Login successful");
            navigate("/home")
        }
        else {
            alert("Login failed")
        }
       })
         .catch(function(err){
        alert(err.message)
         })
    }


    return (
        <div className="login-container">
          <form className="login-form" onSubmit={handleClick}>
            <h2>Login</h2>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required ref={email}/>
    
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required ref={password}/>
    
            <button type="submit">Login</button>
    
            <p className="register-link">
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </form>
        </div>
      );
}

export default Login
