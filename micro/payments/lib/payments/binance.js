import crypto from 'crypto';
import axios from 'axios';

export class Binance {
    constructor() {
        this.apiKey = process.env.BINANCE_API_KEY;
        this.apiSecret = process.env.BINANCE_API_SECRET;
        this.baseURL = process.env.BINANCE_BASE_URL;
    }
    hash_signature(query_string) {
        return crypto
            .createHmac('sha512', apiSecret)
            .update(query_string)
            .digest('hex');
    }
    random_string() {
        return crypto.randomBytes(32).toString('hex').substring(0, 32);
    }
    async dispatch_request(http_method, path, payload = {}) {
        const timestamp = Date.now()
        const nonce = this.random_string()
        const payload_to_sign = timestamp + "\n" + nonce + "\n" + JSON.stringify(payload) + "\n"
        const url = this.baseURL + path
        const signature = this.hash_signature(payload_to_sign)
        return axios.create({
            baseURL,
            headers: {
                'content-type': 'application/json',
                'BinancePay-Timestamp': timestamp,
                'BinancePay-Nonce': nonce,
                'BinancePay-Certificate-SN': this.apiKey,
                'BinancePay-Signature': signature.toUpperCase()
            }
        }).request({
            'method': http_method,
            url,
            data: payload
        })
    }
    async create_payment(
        data
    ) {
        return dispatch_request(
            'POST',
            '/binancepay/openapi/v3/order',
            {
                'merchantId': process.env.BINANCE_MERCHANT_ID,
                'merchantTradeNo': data.order_id,
                'orderAmount': data.amount,
                'tradeType': 'WEB',
                'totalFee': '0.01',
                'currency': data.currency,
                'productType': 'Balance',
                'productName': 'Balance to ' + data.username,
                'productDetail': 'Balance to ' + data.username,
                'returnUrl': data.return_url,
                'cancelUrl': data.cancel_url,

            }
        )
    }
    async check_payment(
        data
    ) {
        return dispatch_request(
            'POST',
            '/binancepay/openapi/v2/order/query',
            {
                'merchantId': process.env.BINANCE_MERCHANT_ID,
                'merchantTradeNo': data.order_id,
                'prepayId': data.provider_payment_id 
            }
        )
    }
} 