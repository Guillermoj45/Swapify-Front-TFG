import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Aquí iría la lógica para autenticar al usuario
  };

  useEffect(() => {
    document.title = "Swapify - Iniciar sesión";
  }, []);

  return (
    <div className="swapify-container">
      <div className="logo-container">
        <div className="logo-circle">
          <div className="inner-circle"></div>
        </div>
        <h1 className="logo-text">swapify</h1>
      </div>

      <div className="login-card sombras">
        <h2 className="login-title">Bienvenido!</h2>
        <p className="login-subtitle">Inicia sesión para entrar</p>

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="social-login">
            <button type="button" className="social-btn x-btn">
              X
            </button>
            <button type="button" className="social-btn google-btn">
              G
            </button>
            <button type="button" className="social-btn discord-btn">
              <img src='src\assets\discord.png' style={{width: "30px"}}></img>
            </button>
          </div>

          <button type="submit" className="login-btn">
            Iniciar Sesión
          </button>
        </form>

        <p className="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </p>
        
        <p className="register-link">
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;