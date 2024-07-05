export function getAuth() {
  const authStr = localStorage.getItem('auth');
  return authStr ? authStr.split(',').filter(Boolean) : [];
}

export function setAuth(auth: string) {
  return localStorage.setItem('auth', auth);
}

export function removeAuth() {
  localStorage.removeItem('auth');
}
