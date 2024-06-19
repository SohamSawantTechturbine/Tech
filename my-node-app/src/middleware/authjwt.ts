import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';
const REFRESH_SECRET_KEY = 'your_refresh_secret_key';
const EXPIRES_IN = '1h';  // Token expiry time
const REFRESH_EXPIRES_IN = '7d';  // Refresh token expiry time

export const generateToken = (user:any) => {
  const payload = { id: user.id, email: user.Email };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });
};

export const generateRefreshToken = (user:any) => {
  const payload = { id: user.id, email: user.Email };
  return jwt.sign(payload, REFRESH_SECRET_KEY, { expiresIn: REFRESH_EXPIRES_IN });
};

export const verifyToken = (token:any) => {
  return jwt.verify(token, SECRET_KEY);
};

export const verifyRefreshToken = (token:any) => {
  return jwt.verify(token, REFRESH_SECRET_KEY);
};
