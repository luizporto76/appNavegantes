const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/evento.controller');
const eventoValidator = require('../validators/evento.validator');
const verifyJWT = require('../middlewares/authorizator');

router.post('/', verifyJWT, eventoValidator.criar(), eventoController.criar);

router.get('/', verifyJWT, eventoController.encontrarTodos);

router.get('/:id', verifyJWT, eventoValidator.encontrarPorId(), eventoController.encontrarPorId);

router.put('/:id', verifyJWT, eventoValidator.atualizar(), eventoController.atualizar);

router.delete('/:id', verifyJWT, eventoValidator.deletar(), eventoController.deletar);

module.exports = router;