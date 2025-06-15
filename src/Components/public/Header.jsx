

import { useAuth } from '../../Context/AuthContext';
import iconMeli from '../../assets/icon-meli.svg'


import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';


export default function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLogin = () => navigate('/login');
  const handleRegister = () => navigate('/register');

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (query) navigate(`/productos?search=${encodeURIComponent(query)}`);
  };

  return (
    <header style={styles.header}>
      {/* Logo + Ubicación */}
      <div style={styles.left}>
        <img
          src={iconMeli}
          alt="Mercado Libre"
          style={styles.logo}
          onClick={() => navigate('/')}
        />
      
      </div>

      {/* Buscador */}
      <form onSubmit={handleSearch} style={styles.center}>
        <input
          name="search"
          placeholder="Buscar productos, marcas y más..."
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>🔍</button>
      </form>

      {/* Menú usuario */}
      <div style={styles.right}>
        {isLoggedIn ? (
          <>
            <span style={styles.link} onClick={() => navigate('/mis-compras')}>Mis compras</span>
            <span style={styles.link} onClick={handleLogout}>Cerrar sesión</span>
          </>
        ) : (
          <>
           
            <span style={styles.link} onClick={handleLogin}>Ingresa</span>
            <span style={styles.link} onClick={() => navigate('/mis-compras')}>Mis compras</span>
          </>
        )}
        <FaShoppingCart size={20} style={{ marginLeft: '16px', cursor: 'pointer' }} onClick={() => navigate('/carrito')} />
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#fff159',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 24px',
    flexWrap: 'wrap',
    borderBottom: '1px solid #e0e0e0',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  logo: {
    height: '36px',
    cursor: 'pointer',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  locationIcon: {
    fontSize: '18px',
  },
  locationTextSmall: {
    fontSize: '12px',
    color: '#333',
  },
  locationTextBold: {
    fontSize: '13px',
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    display: 'flex',
    maxWidth: '600px',
    margin: '10px 20px',
  },
  searchInput: {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderRadius: '4px 0 0 4px',
    fontSize: '14px',
  },
  searchButton: {
    padding: '10px 16px',
    backgroundColor: '#ededed',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    fontSize: '16px',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  link: {
    fontSize: '13px',
    cursor: 'pointer',
    color: '#333',
  },
};