import React from 'react';
//HOOKS_________
import { useAuth } from '../../Context/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//ASSETS________
import { FaShoppingCart } from 'react-icons/fa';
import iconMeli from '../../assets/icon-meli.svg'
//SERVICES________
import { searchKeywordSuggestions } from '../../services/searchKeywordsService/searchKeywordsService';


export default function Header({ query, setQuery }) {
  const { isLoggedIn, logout } = useAuth();
  const [suggestions, setSuggestions] = useState([]);


useEffect(() => {
  if (query.trim() === '') {
    setSuggestions([]);
    return;
  }

  const results = searchKeywordSuggestions(query);
  setSuggestions(results);
}, [query]);

const handleSuggestionClick = (suggestion) => {
console.log(suggestion,'suggestion')

  setQuery(suggestion);
  setSuggestions([]); // ocultar lista
};

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLogin = () => navigate('/login');
  const handleRegister = () => navigate('/register');

const handleSearch = (e) => {
  e.preventDefault();
  const searchTerm = e.target.elements.search.value.trim();
  if (searchTerm) setQuery(searchTerm);
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
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos, marcas y más..."
        style={styles.searchInput}
        />
        {suggestions.length > 0 && (
  <ul style={styles.suggestionList}>
    {suggestions.map((s, index) => (
      <li
        key={index}
        onClick={() => handleSuggestionClick(s)}
        style={styles.suggestionItem}
      >
        {s}
      </li>
    ))}
  </ul>
)}
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
  position: 'relative',
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
  suggestionList: {
  position: 'absolute',
  backgroundColor: 'white',
  listStyle: 'none',
  padding: '8px',
  margin: '0',
  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
  width: '100%',
  zIndex: 200,
  borderRadius: '4px',
  top: '100%',
},

suggestionItem: {
  padding: '6px 10px',
  cursor: 'pointer',
  borderBottom: '1px solid #ddd',
},
};