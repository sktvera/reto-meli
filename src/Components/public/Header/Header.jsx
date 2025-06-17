import React from 'react';
//HOOKS_________
import { useAuth } from '../../../Context/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//ASSETS________
import iconMeli from '../../../assets/icon-meli.svg'
import { HeaderContainer, LeftSection, Logo, CenterForm, SearchInput, SearchButton, RightSection, LinkSpan, SuggestionList, SuggestionItem} from './styles/HeaderStyles';
//SERVICES________
import { searchKeywordSuggestions } from '../../../services/searchKeywordsService/searchKeywordsService';

export default function Header({ query = '', setQuery }) {

  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth(); //manejo de sesion, usuario logueado
  const [suggestions, setSuggestions] = useState([]);//catgorias disponibles
  const [category, setCategory] = useState('');//valor del input


//recibe los datos del buscador, despliega las categorias que coinciden con los datos escritos en el buscador 
useEffect(() => {
  if (category.trim() === '') {
    setSuggestions([]);
    return;
  }
  const results = searchKeywordSuggestions(category);
  setSuggestions(results);
}, [category]);


//Despliega las categorias y guarda una categoria
const handleSuggestionClick = (suggestion) => {
  setQuery(suggestion);
  setSuggestions([]); // ocultar lista
  
};

  //CERRAR SESION USUARIO
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  //Redicecciona al login
  const handleLogin = () => navigate('/login');
  
/*   const handleRegister = () => navigate('/register') */;

const handleSubmit = (e)=>{
   e.preventDefault();
  const inputValue = e.target.elements.search.value;
  setQuery(inputValue)
}

  return (
    <HeaderContainer>
      <LeftSection>
        <Logo
          src={iconMeli}
          alt="Mercado Libre"
          onClick={() => navigate('/')}
        />
      </LeftSection>

      <CenterForm onSubmit={handleSubmit} >
        <SearchInput
          name="search"
        onChange={(e) => setCategory(e.target.value)}
       value={category}
          placeholder="Buscar productos, marcas y más..."
        />
        <SearchButton type="submit">🔍</SearchButton>
        {/* ITERA Y SELECCIONA LAS CATEORIAS DISPONIBLES */}
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
       
      </CenterForm>

    {/* BOTONES DE ACCION NAVBAR  */}
      <RightSection>
        {isLoggedIn ? (
          <LinkSpan onClick={handleLogout}>Salir</LinkSpan>
        ) : (
          <LinkSpan onClick={handleLogin}>Ingresa</LinkSpan>
        )}
      </RightSection>
    </HeaderContainer>
  );
}

