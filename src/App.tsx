import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Asistente from "./components/Home/Asistente.tsx";
import Products from "./components/Products/Products.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/asistente" element={<Asistente/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/" element={<Navigate to="/login" replace/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;