import mysql from 'mysql2/promise';

export async function connection() {
    var user = "smm";
    var password = "QY2$>yIAxHrm1?TxBS@27:%2lb@etd";
    return (await mysql.createConnection({
        host: 'db',
        port:'1999',
        user: user,
        password: password,
        database: "smm_payments"
    }));
}