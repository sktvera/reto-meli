/**
 * @author Julian David Vera Godoy
 * @description main entry point
* @date 2025-06-24
 */

import users from '../mocks/users.json';

export function login(credential, password) {
  // Buscar por username o email
  const foundUser = users.find(
    (user) =>
      (user.username === credential || user.email === credential) &&
      user.password === password
  );

  if (foundUser) {
    const fakeToken = btoa(`${foundUser.username}:${Date.now()}`);
    
    //  Eliminar la contraseña del objeto antes de guardar
    const { password, ...safeUser } = foundUser;

    localStorage.setItem('auth_token', fakeToken);
    localStorage.setItem('user', JSON.stringify(safeUser));

    return true;
  }

  return false;
}

export function logout() {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user');
}

export function isAuthenticated() {
  return !!localStorage.getItem('auth_token');
}

//alerta del navegador , referente a la contraseña, archivo de pruebas mocks 
//la contraseña utilizanda se ha filtrado previamente en una violación de seguridad de datos conocida
//ya se encuentra en bases de datos públicas filtradas en internet tras brechas de seguridad.
//El Administrador de contraseñas de Google detecta esta coincidencia a través de servicios como Have I Been Pwned o su propio sistema de monitoreo de filtraciones.