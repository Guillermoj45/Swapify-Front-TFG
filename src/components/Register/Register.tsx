import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    nombre: "",
    email: "",
    fechaNacimiento: "",
    contrasena: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aquí iría la lógica para enviar los datos al backend
  };

  useEffect(() => {
    document.title = "Swapify - Registrarse";
  }, []);

  return (
    <div className="swapify-container">
      <div className="logo-container">
        <div className="logo-circle">
          <div className="inner-circle"></div>
        </div>
        <h1 className="logo-text">swapify</h1>
      </div>

      <div className="register-card">
        <h2 className="register-title">Registrarse</h2>
        <p className="register-subtitle">
          Rellena el formulario para registrarse
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              name="nickname"
              placeholder="Nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

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
              type="date"
              name="fechaNacimiento"
              placeholder="Fecha de Nacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <input
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              value={formData.contrasena}
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
              <img src="src\assets\discord.png" style={{ width: "30px" }}></img>
            </button>
          </div>

          <button type="submit" className="register-btn">
            Registrarse
          </button>
        </form>

        <p className="login-link">
          ¿Tienes cuenta? <Link to="/login">pincha aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
