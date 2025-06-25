/**
 * @author Julian David Vera Godoy
 * @description Login page component for the authentication system
* @date 2025-06-24
 */

import React from 'react';
//COMPONENTES________
import Header from '../../Components/public/Header/Header';
import Footer from '../../Components/public/Footer/Footer';
import FormLogin from '../../Components/public/FormLogin/FormLogin';


export default function LoginPage() {

  return (
    <>
      <Header />
      <FormLogin/>
      <Footer />
    </>
  );
}


