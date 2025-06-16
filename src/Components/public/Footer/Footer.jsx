import React from 'react';
import iconMeli from '../../../assets/icon-meli.svg'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './styles/FooterStyles';

export default function Footer() {
  return (
    <styles.FooterWrapper>
      <styles.TopSection>
        <styles.Column>
          <img src={iconMeli} alt="Mercado Libre" style={{ height: '40px' }} />
        </styles.Column>

        <styles.Column>
          <styles.ColumnTitle>Recursos</styles.ColumnTitle>
          <styles.LinkList>
            <li><styles.StyledLink href="/documentacion">Documentación</styles.StyledLink></li>
            <li><styles.StyledLink href="https://code-git-main-sktveras-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Portafolio</styles.StyledLink></li>
            <li><styles.StyledLink href="https://news.mercadolibre.com/" target="_blank" rel="noopener noreferrer">Página oficial de Mercado Libre</styles.StyledLink></li>
          </styles.LinkList>
        </styles.Column>

        <styles.Column>
          <styles.ColumnTitle>Follow us</styles.ColumnTitle>
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <a href="https://www.linkedin.com/in/sktvera/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={24} color="#0077b5" />
            </a>
            <a href="https://github.com/sktvera" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={24} color="#333" />
            </a>
          </div>
        </styles.Column>
      </styles.TopSection>

      <styles.BottomSection>
        <styles.LegalLink href="/privacidad">Política de privacidad</styles.LegalLink>
        <styles.LegalDivider>|</styles.LegalDivider>
        <styles.LegalLink href="/candidatos">Privacidad de candidatos</styles.LegalLink>
        <styles.Copyright>© 1999–2025 MercadoLibre S.R.L.</styles.Copyright>
      </styles.BottomSection>
    </styles.FooterWrapper>
  );
}

