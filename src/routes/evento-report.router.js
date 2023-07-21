const express = require('express');
const router = express.Router();
const eventoReportController = require('../controllers/evento-report.controller');
const verifyJWT = require('../middlewares/authorizator');

router.get('/', verifyJWT, eventoReportController.xlsx);

module.exports = router;