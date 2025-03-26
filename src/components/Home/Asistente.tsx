import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Asistente.css';

const Asistente: React.FC = () => {
    const [userName] = useState('Usuario');

    useEffect(() => {
        document.title = "Swapify - Inicio";
        // Aquí podrías cargar el nombre del usuario desde una API o contexto de autenticación
    }, []);

    const quickActions = [
        { title: 'Nueva Venta', icon: '💰', route: '/nueva-venta' },
        { title: 'Productos', icon: '📦', route: '/productos' },
        { title: 'Clientes', icon: '👥', route: '/clientes' },
        { title: 'Reportes', icon: '📊', route: '/reportes' }
    ];

    return (
        <div className="swapify-container">
            <div className="logo-container">
                <div className="logo-circle">
                    <div className="inner-circle"></div>
                </div>
            </div>

                <h2 className="login-title">¡Hola, {userName}!</h2>

                <div className="quick-actions">
                    {quickActions.map((action, index) => (
                        <Link
                            key={index}
                            to={action.route}
                            className="quick-action-btn"
                        >
                            <span className="action-icon">{action.icon}</span>
                            <span className="action-title">{action.title}</span>
                        </Link>
                    ))}
                </div>

                <div className="home-stats">
                    <div className="stat-item">
                        <span className="stat-label">Ventas Hoy</span>
                        <span className="stat-value">$5,420</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Productos</span>
                        <span className="stat-value">42</span>
                    </div>
                </div>
            </div>
    );
};

export default Asistente;