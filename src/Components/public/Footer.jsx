import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p>© 2025 Mi Aplicación. Todos los derechos reservados.</p>
        <nav style={navStyle}>
          <a href="/terms" style={linkStyle}>Términos</a>
          <a href="/privacy" style={linkStyle}>Privacidad</a>
          <a href="/contact" style={linkStyle}>Contacto</a>
        </nav>
      </div>
    </footer>
  );
}


const footerStyle = {
  backgroundColor: '#f1f1f1',
  padding: '20px 0',
  marginTop: 'auto',
  borderTop: '1px solid #ddd',
};

const contentStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  textAlign: 'center',
};

const navStyle = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
};

const linkStyle = {
  color: '#333',
  textDecoration: 'none',
};