export default function isAuth() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  return username !== "terlan" || password !== "terlan123";
}

export function removeAuth() {
  localStorage && localStorage.removeItem("username");
  localStorage && localStorage.removeItem("password");
}
