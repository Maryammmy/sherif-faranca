import Cookies from "js-cookie";

const TOKEN_KEY = "token";

export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, {
    expires: 365,
    secure: true,
    sameSite: "strict",
  });
};

export const getToken = () => {
  return Cookies.get(TOKEN_KEY) || null;
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};
