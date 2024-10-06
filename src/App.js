import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register'; // Asegúrate de que la ruta sea correcta
import Login from './components/Login'; // Asegúrate de que la ruta sea correcta
import Home from './components/Home'; // Asegúrate de que la ruta sea correcta

const App = () => {
    const handleRegister = (formData) => {
        console.log("User Registered", formData);
        // Aquí puedes agregar lógica para manejar el registro, como enviar datos a un servidor.
        // Después del registro exitoso, puedes redirigir a la página de inicio o de login.
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/register" />} /> {/* Redirige a /register */}
                <Route path="/register" element={<Register onRegister={handleRegister} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                {/* Otras rutas */}
            </Routes>
        </Router>
    );
};

export default App;
