import JWT from 'jsonwebtoken';
import createError from 'http-errors';
import client from './init_redis.js';

export async function signAccessToken(userId) {
  return new Promise((resolve, reject) => {
    const payload = {}
    const secret = process.env.ACCESS_TOKEN_SECRET
    const options = {
      expiresIn: '1h',
      issuer: 'redis',
      audience: userId.toString(),
    }
    JWT.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.log(err.message)
        reject(createError.InternalServerError())
        return
      }
      resolve(token)
    })
  })
};

export async function verifyAccessToken(req, res, next) {
  if (!req.headers['authorization']) return next(createError.Unauthorized())
  const authHeader = req.headers['authorization']
  const bearerToken = authHeader.split(' ')
  const token = bearerToken[1]
  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      const message =
        err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
      return next(createError.Unauthorized(message))
    }
    req.payload = payload
    next()
  })
};

export async function signRefreshToken(userId) {
  return new Promise((resolve, reject) => {
    userId = userId.toString();
    const payload = {}
    const secret = process.env.REFRESH_TOKEN_SECRET
    const options = {
      expiresIn: '1h',
      issuer: 'redis',
      audience: userId,
    }
    JWT.sign(payload, secret, options, async (err, token) => {
      if (err) {
        console.log(err.message)
        // reject(err)
        reject(createError.InternalServerError())
      }

      await client.SET(userId, token, { EX: 365 * 24 * 60 * 60 });
      resolve(token);
      
    })
  })
};

export async function verifyRefreshToken(refreshToken) {
  return new Promise((resolve, reject) => {
    JWT.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, payload) => {
        if (err) return reject(createError.Unauthorized())
        const userId = payload.aud
        const result = await client.GET(userId);
        if (refreshToken === result) resolve(userId)
        reject(createError.Unauthorized())
      }
    )
  })
};
