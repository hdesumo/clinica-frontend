export function setToken(token: string) {
  localStorage.setItem("clinica_token", token);
}

export function getToken() {
  return localStorage.getItem("clinica_token");
}

export function logout() {
  localStorage.removeItem("clinica_token");
}
