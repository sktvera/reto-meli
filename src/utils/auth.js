// utils/auth.js
export function login(username, password) {
  // Simular login exitoso
  if (username === 'julian' && password === '1234') {
    const fakeToken = btoa(`${username}:${Date.now()}`);
    localStorage.setItem('auth_token', fakeToken);
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem('auth_token');
}

export function isAuthenticated() {
  return !!localStorage.getItem('auth_token');
}