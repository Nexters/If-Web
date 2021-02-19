import decode from 'jwt-decode';

export const checkAuth = () => {
  const token = localStorage.getItem('token');

  // No token
  if (!token) {
    return false;
  }

  try {
    // Check if expired
    // { exp: 1608797099 }
    const decodedToken: any = decode(token);
    if (decodedToken.exp < new Date().getTime() / 1000) {
      localStorage.removeItem('token');
      return false;
    }
  } catch (e) {
    return false;
  }

  // Have token & Not expired
  return true;
};
