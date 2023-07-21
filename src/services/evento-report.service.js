const eventoReport = require('../repositories/evento-report.repository');

const criarXlsx = async function(filtros){
    const eventos = await eventoReport.filtrar(filtros);
    return eventos;
}

module.exports = {
    criarXlsx: criarXlsx
}