const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');

router.post('/', itemController.criar);
router.post('/teste', itemController.criar);

module.exports = router;

// Teste de git 
