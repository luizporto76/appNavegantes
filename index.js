require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const handle404Error = require('./src/middlewares/handle404Error');
const app = express(); 

const eventoRouter = require('./src/routes/evento.router')
const usuarioRouter = require('./src/routes/usuario.router');
const eventoReportRouter = require('./src/routes/evento-report.router');
const handleError = require('./src/middlewares/handleError');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/usuarios', usuarioRouter);
app.use('/api/eventos', eventoRouter);
app.use('/api/eventos-report', eventoReportRouter);
app.use(handle404Error);
app.use(handleError);
app.listen(process.env.PORTA, () => { console.log('rodando') });
