const Sequelize = require('sequelize');

const DB_NAME = process.env.PG_DB_NAME;
const DB_HOST = process.env.PG_HOST || 'localhost';
const DB_PORT = process.env.PG_PORT || '5432';
const DB_USER = process.env.PG_USER;
const DB_PASSWORD = process.env.PG_PASSWORD;

const DEFAULT_AMOUNT = 10000;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    logging: false
});
const users = require('./user.model')(sequelize);

users.sync({ alter: true }).then(() => {
    users.findOne().then(async (user) => {
        if (user == null) {
            await users.create({balance: DEFAULT_AMOUNT});
        }
    });
});

module.exports = {
    sequelize,
    users
};
