const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const { encontrarTodos } = require('../services/usuario.service');

router.post('/', usuarioController.criar);

router.get('/', usuarioController.encontrarTodos);

router.get('/:id', usuarioController.encontrarPorId);

module.exports = router;  