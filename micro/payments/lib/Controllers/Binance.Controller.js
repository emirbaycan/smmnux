import { Binance } from '../payments/binance.js';

export async function create(req, res, next) {
    try {
        const data = req.body;
        const binance = new Binance();
        const payment = await binance.create_payment(data);
        res.send(payment)
    } catch (error) {
        if (error.isJoi === true) error.status = 422
        next(error)
    }
};

export async function status(req, res, next) {
    try {
        const data = req.body;
        const binance = new Binance();
        const payment = await binance.check_payment(data);
        res.send(payment)
    } catch (error) {
        if (error.isJoi === true) error.status = 422
        next(error)
    }
};