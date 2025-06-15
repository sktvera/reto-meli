// utils/auth.js
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
    localStorage.setItem('auth_token', fakeToken);
    localStorage.setItem('user', JSON.stringify(foundUser));
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