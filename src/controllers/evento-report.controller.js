const eventoReportService = require('../services/evento-report.service');

const xlsx = async function(req, res, next){
    try {
        const evento = await eventoReportService.criarXlsx(req.query);
        res.send(eventos);
    } catch (error) {
        return next(error);
    }
}
module.exports = {
    xlsx: xlsx,
}