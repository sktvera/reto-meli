import React from 'react';
//HOOKS_________
import { useAuth } from '../../../Context/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//ASSETS________
import iconMeli from '../../../assets/icon-meli.svg'
import {
  HeaderContainer,
  LeftSection,
  Logo,
  CenterForm,
  SearchInput,
  SearchButton,
  RightSection,
  LinkSpan,
  SuggestionList,
  SuggestionItem
} from './styles/HeaderStyles';
//SERVICES________
import { searchKeywordSuggestions } from '../../../services/searchKeywordsService/searchKeywordsService';


export default function Header({ query = '', setQuery }) {
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
    <HeaderContainer>
      <LeftSection>
        <Logo
          src={iconMeli}
          alt="Mercado Libre"
          onClick={() => navigate('/')}
        />
      </LeftSection>

      <CenterForm onSubmit={handleSearch}>
        <SearchInput
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar productos, marcas y más..."
        />
        {suggestions.length > 0 && (
          <SuggestionList>
            {suggestions.map((s, index) => (
              <SuggestionItem
                key={index}
                onClick={() => handleSuggestionClick(s)}
              >
                {s}
              </SuggestionItem>
            ))}
          </SuggestionList>
        )}
        <SearchButton type="submit">🔍</SearchButton>
      </CenterForm>

      <RightSection>
        {isLoggedIn ? (
          <LinkSpan onClick={handleLogout}>Cerrar sesión</LinkSpan>
        ) : (
          <LinkSpan onClick={handleLogin}>Ingresa</LinkSpan>
        )}
      </RightSection>
    </HeaderContainer>
  );
}

