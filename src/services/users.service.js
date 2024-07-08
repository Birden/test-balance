const {users} = require('../models');
const balanceCache = new Map();

function findAll () {
    return users.findAll();
}

async function findById (id) {
    const user = await users.findOne({where: {id}});
    if (user == null) {
        throw new Error('User not found');
    }
    return user;
}

async function update (id, amount) {
    const amountValue = Number(amount);
    const balance = balanceCache.get(id) || (await findById(id)).balance;
    const newBalance = balance + amountValue;
    if (newBalance < 0) {
        throw new Error('Not enough balance');
    }
    const user = await findById(id);
    await user.increment({ balance: amountValue });
    balanceCache.set(id, newBalance);
    return user;
}
module.exports = {findAll, findById, update};
