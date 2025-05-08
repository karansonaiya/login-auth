import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

const RegisterPage = () => {
    const name = useRef();
    const email = useRef();
    const pass = useRef();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            "name": name.current.value,
            "email": email.current.value,
            "password": pass.current.value,
        };
        axios.post("http://localhost:3030/student" , user).then(function(res){
            if (res.data.status === "success") {
                alert("Registration successful")
                navigate("/login")
            }
        })
        .catch(function(err){
            console.log(err)
        })
    }


  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" required ref={name}/>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required ref={email}/>

        <label>Password</label>
        <input type="password" placeholder="Create a password" required ref={pass}/>

        <button type="submit">Register</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
