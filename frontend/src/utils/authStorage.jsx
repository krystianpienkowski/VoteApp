import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "token";
const USER_KEY = "user";

export function saveAuthData(authData) {
  localStorage.setItem(TOKEN_KEY, authData.token);
  localStorage.setItem(USER_KEY, JSON.stringify(authData.user));
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function clearAuthData() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function decodeToken() {
  const token = getToken();

  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Failed to decode token", error);
    return null;
  }
}

export function isTokenValid() {
  const decodedToken = decodeToken();

  if (!decodedToken || !decodedToken.exp) return false;

  const expiry = decodedToken.exp * 1000;
  return Date.now() < expiry;
}