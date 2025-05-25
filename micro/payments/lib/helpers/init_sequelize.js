import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    'smm_payments',
    'smm',
    'QY2$>yIAxHrm1?TxBS@27:%2lb@etd', {
    host: 'db',
    port: '1999',
    dialect: 'mysql' 
});

await sequelize.authenticate();

export default sequelize;