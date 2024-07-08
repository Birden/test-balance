const Sequelize = require('sequelize');
module.exports = (sequelize) => sequelize.define('users', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    balance: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        defaultValue: 0
    }
}, {
    timestamps: false
});
