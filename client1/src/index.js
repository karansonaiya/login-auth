import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './Register';
import Home from './Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
  </>
);

