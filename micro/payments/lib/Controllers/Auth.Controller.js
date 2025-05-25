import createError from 'http-errors';
import User from '../Models/User.Model.js';
import authSchema from '../helpers/validation_schema.js';
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from '../helpers/jwt_helper.js';
import client from '../helpers/init_redis.js';
import bcrypt from 'bcrypt';

export async function register(req, res, next) {
  try {
    // const { email, password } = req.body
    // if (!email || !password) throw createError.BadRequest()
    const result = await authSchema.validateAsync(req.body)

    const doesExist = await User.findOne({ where: { username: result.username } })
    if (doesExist)
      throw createError.Conflict(`${result.username} is already been registered`)

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(result.password, salt)

    let user = await User.create({ username: result.username, password: hashedPassword });
    const savedUser = await user.save()
    const accessToken = await signAccessToken(savedUser.id)
    const refreshToken = await signRefreshToken(savedUser.id)
    res.send({ accessToken, refreshToken })
  } catch (error) {
    if (error.isJoi === true) error.status = 422
    next(error)
  }
};

export async function login(req, res, next) {
  try {
    const result = await authSchema.validateAsync(req.body)
    const user = await User.findOne({ where: { username: result.username } })
    if (!user) throw createError.NotFound('User not registered')

    const isMatch = bcrypt.compareSync(result.password, user.password)
    if (!isMatch)
      throw createError.Unauthorized('Username/password not valid')

    const accessToken = await signAccessToken(user.id)
    const refreshToken = await signRefreshToken(user.id)

    res.send({ accessToken, refreshToken })
  } catch (error) {
    if (error.isJoi === true)
      return next(createError.BadRequest('Invalid Username/Password'))
    next(error)
  }
}

export async function refreshToken(req, res, next) {
  try {
    const { refreshToken } = req.body
    if (!refreshToken) throw createError.BadRequest()
    const userId = await verifyRefreshToken(refreshToken)

    const accessToken = await signAccessToken(userId)
    const refToken = await signRefreshToken(userId)
    res.send({ accessToken: accessToken, refreshToken: refToken })
  } catch (error) {
    next(error)
  }
}

export async function logout(req, res, next) {
  try {
    const { refreshToken } = req.body
    if (!refreshToken) throw createError.BadRequest()
    const userId = await verifyRefreshToken(refreshToken)
    client.DEL(userId, (err, val) => {
      if (err) {
        console.log(err.message)
        throw createError.InternalServerError()
      }
      console.log(val)
      res.sendStatus(204)
    })
  } catch (error) {
    next(error)
  }
}
