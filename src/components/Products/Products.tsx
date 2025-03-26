import React, { useState, useEffect } from 'react';
import './Products.css';

interface Product {
    id: number;
    name: string;
    image: string;
    quantity: number;
}

const Products: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [products] = useState<Product[]>([
        { id: 1, name: 'Objeto1', image: '', quantity: 100 },
        { id: 2, name: 'Objeto1', image: '', quantity: 100 },
        { id: 3, name: 'Objeto1', image: '', quantity: 100 },
        { id: 4, name: 'Objeto1', image: '', quantity: 100 },
        { id: 5, name: 'Objeto1', image: '', quantity: 100 },
        { id: 6, name: 'Objeto1', image: '', quantity: 100 },
        { id: 7, name: 'Objeto1', image: '', quantity: 100 },
        { id: 8, name: 'Objeto1', image: '', quantity: 100 },
        { id: 9, name: 'Objeto1', image: '', quantity: 100 },
        { id: 10, name: 'Objeto1', image: '', quantity: 100 },
        { id: 11, name: 'Objeto1', image: '', quantity: 100 },
        { id: 12, name: 'Objeto1', image: '', quantity: 100 },
        { id: 13, name: 'Objeto1', image: '', quantity: 100 },
        { id: 14, name: 'Objeto1', image: '', quantity: 100 },
        { id: 15, name: 'Objeto1', image: '', quantity: 100 },
        { id: 16, name: 'Objeto1', image: '', quantity: 100 },
    ]);

    useEffect(() => {
        document.title = "Swapify - Productos";
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="products-container">
            {/* Hamburger Menu Removed */}

            {/* Side Menu */}
            <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="side-menu-header">
                    <h2>Menú</h2>
                    <button className="close-menu" onClick={toggleMenu}>
                        &times;
                    </button>
                </div>
                <ul className="side-menu-list">
                    <li onClick={handleMenuItemClick}>
                        <a href="/posts">
                            <i className="icon-home"></i> Inicio
                        </a>
                    </li>
                    <li onClick={handleMenuItemClick}>
                        <a href="/asistente">
                            <i className="icon-add"></i> Asistente
                        </a>
                    </li>
                    <li onClick={handleMenuItemClick}>
                        <a href="/mensajes">
                            <i className="icon-messages"></i> Mensajes
                        </a>
                    </li>
                    <li onClick={handleMenuItemClick}>
                        <a href="/notification">
                            <i className="icon-notifications"></i> Notificaciones
                        </a>
                    </li>
                    <li onClick={handleMenuItemClick}>
                        <a href="/profile">
                            <i className="icon-profile"></i> Perfil
                        </a>
                    </li>
                    <li onClick={handleMenuItemClick}>
                        <a href="/settings">
                            <i className="icon-settings"></i> Ajustes del perfil
                        </a>
                    </li>
                    <li onClick={handleMenuItemClick}>
                        <a href="/logout">
                            <i className="icon-logout"></i> Cerrar Sesión
                        </a>
                    </li>
                </ul>
            </div>

            <div className="products-header">
                <div
                    className={`logo-circle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <div className="inner-circle"></div>
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="search-input"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <div className="labels-container">
                <button className="label-btn">Nueva Venta</button>
                <button className="label-btn">Productos</button>
                <button className="label-btn">Clientes</button>
                <button className="label-btn">Reportes</button>
                <button className="label-btn">Configuración</button>
            </div>

            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image-placeholder"></div>
                        <div className="product-details">
                            <span className="product-name">{product.name}</span>
                            <span className="product-quantity">{product.quantity} ptos</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;