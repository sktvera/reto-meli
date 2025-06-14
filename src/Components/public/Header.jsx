import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

export default function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (query) {
      navigate(`/productos?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header style={styles.header}>
      {/* Icono o Logo */}
      <div style={styles.logo} onClick={() => navigate('/')}>
        🛒 MiApp
      </div>

      {/* Buscador */}
      <form style={styles.searchForm} onSubmit={handleSearch}>
        <input
          name="search"
          type="text"
          placeholder="Buscar productos..."
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>Buscar</button>
      </form>

      {/* Menú de botones */}
      <div style={styles.menu}>
        {isLoggedIn ? (
          <>
            <button style={styles.button} onClick={() => navigate('/productos')}>Productos</button>
            <button style={styles.button} onClick={() => navigate('/favoritos')}>Favoritos</button>
            <button style={styles.logoutButton} onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <button style={styles.button} onClick={handleLogin}>Login</button>
        )}
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ccc',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  searchForm: {
    display: 'flex',
    flex: 1,
    maxWidth: '400px',
    margin: '10px',
  },
  searchInput: {
    flex: 1,
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px 0 0 4px',
  },
  searchButton: {
    padding: '8px 12px',
    border: '1px solid #ccc',
    borderLeft: 'none',
    borderRadius: '0 4px 4px 0',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  button: {
    padding: '8px 12px',
    backgroundColor: '#eee',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  logoutButton: {
    padding: '8px 12px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};