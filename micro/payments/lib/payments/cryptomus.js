import { createHash } from 'crypto';
import axios from 'axios';

const merchantId = process.env.CRYPTOMUS_MERCHANT_ID;
const apiKey = process.env.CRYPTOMUS_API_KEY;
const baseURL = process.env.CRYPTOMUS_BASE_URL;

function makeSignatue(data) {
    const signatue = createHash('md5')
        .update(
            Buffer.from(
                JSON.stringify(data).replace(/\//g, '\\/'),
            ).toString('base64') + apiKey,
        )
        .digest('hex');

    return signatue;
}

function dispatch_request(http_method, path, payload = {}) {
    const url = baseURL + path
    const signature = makeSignatue(payload);
    return axios.create({
        baseURL,
        headers: {
            'content-type': 'application/json',
            'merchant': merchantId,
            'sign': signature
        }
    }).request({
        'method': http_method,
        url,
        data: payload
    })
}

function create_order() {
    var amount = 10;
    var currency = 'USDT';
    var order_id = 20;
    var returnUrl = "emirbaycan.com.tr/back/to/deposit"
    var successUrl = "emirbaycan.com.tr/go/to/orders"
    var callback = "emirbaycan.com.tr/payment/status/processer";

    dispatch_request(
        'POST',
        '/v1/payment',
        {
            'amount': amount,
            'currency': currency,
            'order_id': order_id,
            'network': null,
            'url_return': returnUrl,
            'url_success': successUrl,
            'url_callback': callback,
            'is_payment_multiple': false,
            'lifetime': 3600,
            'currencies': [
                {
                    "currency": "USDT",
                    "network": ""
                }
            ],
            'except_currencies': null,
            'from_referral_code': null,
            'discount_percent': null

        }
    ).then(response => console.log(response.data)).catch(error => console.log(error))
}

create_order();