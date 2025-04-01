import './Profile.css';

const Profile = () => {
    return (
        <div className="swapify-container">
            <div className="profile-header">
                <div className="profile-avatar">
                    <div className="profile-avatar-placeholder">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <h1 className="profile-username">@usuario_example</h1>
                <p className="profile-bio">¡Hola! Vendo artículos de tecnología, ropa y accesorios. Envíos a todo el
                    país. 🚀</p>
                <button className="profile-edit-btn">Editar perfil</button>
            </div>
            <div className="profile-stats">
                <div className="stat-item">
                    <span className="stat-value">42</span>
                    <span className="stat-label">Publicaciones</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value">125</span>
                    <span className="stat-label">Ventas</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value">4.8</span>
                    <span className="stat-label">Valoración</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value">198</span>
                    <span className="stat-label">Seguidores</span>
                </div>
            </div>
            <div className="user-listings">
                <div className="listings-header">
                    <h2 className="listings-title">Mis publicaciones</h2>
                    <a href="#" className="view-all">Ver todas</a>
                </div>
                <div className="listings-grid">
                    <div className="listing-item">
                        <img src="/api/placeholder/150/150" alt="Producto 1" className="listing-img"/>
                        <div className="listing-price">$150</div>
                    </div>
                    <div className="listing-item">
                        <img src="/api/placeholder/150/150" alt="Producto 2" className="listing-img"/>
                        <div className="listing-price">$299</div>
                    </div>
                    <div className="listing-item">
                        <img src="/api/placeholder/150/150" alt="Producto 3" className="listing-img"/>
                        <div className="listing-price">$85</div>
                    </div>
                    <div className="listing-item">
                        <img src="/api/placeholder/150/150" alt="Producto 4" className="listing-img"/>
                        <div className="listing-price">$420</div>
                    </div>
                    <div className="listing-item">
                        <img src="/api/placeholder/150/150" alt="Producto 5" className="listing-img"/>
                        <div className="listing-price">$75</div>
                    </div>
                    <div className="listing-item">
                        <img src="/api/placeholder/150/150" alt="Producto 6" className="listing-img"/>
                        <div className="listing-price">$199</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;