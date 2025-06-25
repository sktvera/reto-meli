/**
 * @author Julian David Vera Godoy
 * @description Login form component for user authentication
* @date 2025-06-24
 */

import React from 'react'
//HOOKS_________
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//ASSETS________
import styles from './styles/FormLoginStyles';
//UTILS________
import { useAuth } from '../../../Context/AuthContext';



const FormLogin = () => {


const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/');
    } else {
      alert('Login inválido');
    }
  };


  return (
    <>
         <styles.Main>
        <styles.Form onSubmit={handleSubmit} >
          <styles.Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario"
          />
          <styles.Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          <styles.Button type="submit" >Entrar</styles.Button>
        </styles.Form>
      </styles.Main>
    </>
  )
}

export default FormLogin
