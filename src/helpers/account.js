import { setCookie, getCookie, removeCookie } from "./storage";

const expires = new Date();
expires.setFullYear(expires.getFullYear() + 1);

const options = { expires };

export const COOKIE_ACCOUNT = "acc";
export const COOKIE_TOKEN = "tk";
export const COOKIE_REFRESH_TOKEN = "rtk";

export const setAccount = (account) => {
  setCookie(COOKIE_ACCOUNT, account, options);
};

export const getAccount = () => {
  getCookie(COOKIE_ACCOUNT); // Pode precisar de um retorno futuro
};

export const removeAccount = () => {
  removeCookie(COOKIE_ACCOUNT);
};

// Cookies para o Token
export const setToken = (token) => {
  setCookie(COOKIE_TOKEN, token, options);
};

export const getToken = () => {
  return getCookie(COOKIE_TOKEN);
};

export const removeToken = () => {
  removeCookie(COOKIE_TOKEN);
};

// Cookies para  o Refresh Token
export const setRefreshToken = (refreshToken) => {
  setCookie(COOKIE_REFRESH_TOKEN, refreshToken, options);
};

export const getRefreshToken = () => {
  return getCookie(COOKIE_REFRESH_TOKEN);
};

export const removeRefreshToken = () => {
  removeCookie(COOKIE_REFRESH_TOKEN);
};
