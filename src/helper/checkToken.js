export const isTokenExpired = (token) => {
  const arrayToken = token.split(".");
  const tokenPayload = JSON.parse(atob(arrayToken[1]));
  return tokenPayload;
};
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTdiMjE0ZGFmOWU3MDA0ZTI2NWE3YyIsImV4cCI6MTcxNTQ1ODk5Mn0.nSkcVGTdyLbqomqBUCZSNV6WR34H6K1gEXxG0dFCItE";
console.log(isTokenExpired(token)); //true