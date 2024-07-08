require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users.router');
const {sequelize} = require('./models');

const port = process.env.APP_PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use('/users', userRouter);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Start listening on port: ${port}`);
    });
});

