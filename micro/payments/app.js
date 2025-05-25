import { connection } from './lib/mysql.js';
import fs from 'fs';
import express from 'express';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import sequelize from './lib/helpers/init_sequelize.js';
import { verifyAccessToken } from './lib/helpers/jwt_helper.js';
import client from './lib/helpers/init_redis.js';
import createError from 'http-errors';
import cors from 'cors';
import AuthRoute from './lib/Routes/Auth.Route.js';
import BinanceRoute from './lib/Routes/Binance.Route.js';

dotenv.config()

const app = express();

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({ credentials: true, origin: 'http://localhost:1998' }));
app.use('/auth', AuthRoute)
app.use('/api/payment/binance',BinanceRoute)

app.get('/api/payments', verifyAccessToken, async (req, res) => {
    var con = await connection();
    var [result] = (await con.query('SELECT * FROM payments'));
    res.json(result);
});

app.post('/api/payment/binance/create', verifyAccessToken, async (req, res) => {
    var data = req.body;
    var binance = new Binance();
    var response = await binance.create_payment(data);
    if (response && response.data) {
        res.json(response.data);
    }
    res.send(response)
});

app.post('/api/payment/binance/return', verifyAccessToken, async (req, res) => {
    var data = req.body;
    var binance = new Binance();
    var response = await binance.create_payment(data);
    if (response && response.data) {
        res.json(response.data);
    }
    res.send(response)
});

app.get('/api/payment/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    var con = await connection();
    var [result] = (await con.query('SELECT * FROM payments WHERE id=?', [id]));
    res.json(result);
});

app.post('/api/payments', async (req, res) => {
    var con = await connection();
    var [result] = (await con.query('SELECT * FROM payments'));
    res.json(result);
});

app.get('/api/payment_requests', async (req, res) => {
    var con = await connection();
    var [result] = (await con.query('SELECT * FROM payment_requests'));
    res.json(result);
});

app.get('/api/payment_requests_failed', async (req, res) => {
    var con = await connection();
    var [result] = (await con.query('SELECT * FROM payment_requests_failed'));
    res.json(result);
});

app.get('/api/payment_providers', verifyAccessToken, async (req, res) => {
    var con = await connection();
    var [result] = (await con.query('SELECT * FROM payment_providers'));
    res.json(result);
});

app.get('/api/payment_provider_categories', verifyAccessToken, async (req, res) => {
    var con = await connection();
    var [result] = (await con.query('SELECT * FROM payment_provider_categories'));
    res.json(result);
});

app.use(async (req, res, next) => {
    next(createError.NotFound())
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    })
})

// Start the server
const PORT = process.env.PORT || 1998;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Payment Gateway running on ${PORT}`);
});