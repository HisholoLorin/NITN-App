import { Buffer } from "safe-buffer";

export const decodeToken = (refreshToken) => {
  const arrayToken = refreshToken.split(".");
  const tokenPayload = JSON.parse(
    Buffer.from(arrayToken[1], "base64").toString("utf8")
  );
  return tokenPayload;
};

export const isTokenExpired = (refreshToken) => {
  const tokenPayload = decodeToken(refreshToken);
  const currentTime = Math.floor(Date.now() / 1000);
  return currentTime + 10 > tokenPayload.exp;
};

