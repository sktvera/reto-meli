import iconMeli from '../../../assets/icon-meli.svg'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={topSection}>
        {/* Logo */}
        <div style={column}>
          <img src={iconMeli} alt="Mercado Libre" style={{ height: '40px' }} />
        </div>

        {/* Careers */}
        <div style={column}>
          <h4 style={columnTitle}>Recursos</h4>
          <ul style={linkList}>
            <li><a href="/oportunidades" style={link}>Documentación</a></li>
            <li><a href="/https://code-git-main-sktveras-projects.vercel.app/" style={link}>Portafolio</a></li>
            <li><a href="/https://news.mercadolibre.com/" style={link}>Página oficial de Mercado Libre</a></li>
          </ul>
        </div>

        {/* Follow us */}
        <div style={column}>
            <h4 style={columnTitle}>Follow us</h4>
            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <a
                href="https://www.linkedin.com/in/sktvera/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                >
                <FaLinkedin size={24} color="#0077b5" />
                </a>
                <a
                href="https://github.com/sktvera"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                >
                <FaGithub size={24} color="#333" />
                </a>
            </div>
        </div>

      </div>

      {/* Footer legal */}
      <div style={bottomSection}>
        <a href="/privacidad" style={legalLink}>Política de privacidad</a>
        <span style={legalDivider}>|</span>
        <a href="/candidatos" style={legalLink}>Privacidad de candidatos</a>
        <p style={copyright}>
          © 1999–2025 MercadoLibre S.R.L.
        </p>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#f2f2f2',
  padding: '40px 20px',
  fontFamily: 'Arial, sans-serif',
};

const topSection = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  margin: '0 auto',
  paddingBottom: '30px',
};

const bottomSection = {
  borderTop: '1px solid #ddd',
  textAlign: 'center',
  paddingTop: '20px',
  color: '#666',
  fontSize: '13px',
};

const column = {
  flex: '1',
  minWidth: '180px',
  marginBottom: '20px',
};

const columnTitle = {
  fontWeight: 'bold',
  fontSize: '14px',
  marginBottom: '10px',
};

const linkList = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const link = {
  color: '#333',
  textDecoration: 'none',
  fontSize: '13px',
  display: 'block',
  marginBottom: '8px',
};

const legalLink = {
  color: '#666',
  margin: '0 8px',
  textDecoration: 'none',
  fontSize: '13px',
};

const legalDivider = {
  margin: '0 5px',
  color: '#999',
};

const copyright = {
  marginTop: '10px',
  color: '#999',
};