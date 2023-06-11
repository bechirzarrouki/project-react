import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Admin from './pages/admin/admin';
import Designer from './pages/designer/designer';
import Chefprojet from './pages/chefprojet/chefprojet';
import Community from './pages/community/community';
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/chefprojet" element={<Chefprojet />} />
          <Route path="/designer" element={<Designer />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
