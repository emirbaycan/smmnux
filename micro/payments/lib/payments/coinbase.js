import crypto from 'crypto';
import axios from 'axios';
import coinbase from 'coinbase-commerce-node';

export class Coinbase {
    constructor() {
        this.client = coinbase.Client;
        this.resources = coinbase.resources;
        this.clientObj = this.client.init(process.env.COINBASE_API_KEY);
    }
    
    async create_order() {
        amount = 20;
        currency = "USDT";
        order_id = 20;

        const charge = await resources.Charge.create({
            name: "Test Charge",
            description: "Test charge",
            local_price: {
                amount: amount,
                currency: currency
            },
            pricing_type: "fixed_price",
            metadata: {
                order_id: order_id
            }
        })

        return charge;
    }
}