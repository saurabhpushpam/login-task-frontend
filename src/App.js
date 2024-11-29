import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Errror from './components/Error';


const App = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path='*' element={<Errror />} />

      </Routes>
    </Router>
  );
};

export default App;
