import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Asegúrate de que la ruta a tu CSS sea correcta
import imagenRegistro from '../assets/register-image.jpg'; // Cambia esta ruta a tu imagen

const Register = ({ onRegister }) => {
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [contraseña, setContraseña] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { email, nombre, fecha, contraseña };
        if (onRegister) {
            onRegister(formData);
            navigate('/login');
        } else {
            console.error("onRegister function is not defined");
        }
    };

    return (
        <div className="register-container">
            <div className="register-image">
                <img src={imagenRegistro} alt="Registro" />
            </div>
            <div className="register-form">
                <h2>Crear Cuenta</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombre">Nombre Completo</label>
                        <input
                            id="nombre"
                            type="text"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="fecha">Fecha de Nacimiento</label>
                        <input
                            id="fecha"
                            type="date"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="contraseña">Contraseña</label>
                        <input
                            id="contraseña"
                            type="password"
                            placeholder="Contraseña"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Registrar</button>
                </form>
                <p className="register-footer">¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
            </div>
        </div>
    );
};

export default Register;
