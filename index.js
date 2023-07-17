require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const handle404Error = require('./src/middlewares/handle404Error')
const app = express(); 

const itemRoute = require('./src/routes/item.route');
const usuarioRouter = require('./src/routes/usuario.router');
const handleError = require('./src/middlewares/handleError');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/usuarios', usuarioRouter);
app.use('/api/itens', itemRoute);
app.use(handle404Error);
app.use(handleError);
app.listen(process.env.PORTA, () => { console.log('rodando') });