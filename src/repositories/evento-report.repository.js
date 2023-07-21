const { sequelize } = require('../database/models/index');
const { QueryTypes } = require('sequelize');

const filtrar = function(filtros){
    let sqlFiltros = '';

    if (filtros.titulo && filtros.titulo.trim()){
        sqlFiltros += `and rl.titulo like  '%${filtros.titulo}%'`
    }
    if (filtros.cidade && filtros.cidade.trim()){
        sqlFiltros += `and rl.cidade like  '%${filtros.cidade}%'`
    }
    if (filtros.estado && filtros.estado.trim()){
        sqlFiltros += `and rl.estado like '%${filtros.estado}%'`
    }
    if (filtros.dataInicial && filtros.dataInicial.trim()){
        sqlFiltros += `and rl.dataInicial >= '${filtros.dataInicial} 00:00:00'`
    }
    return sqlFiltros;
}


module.exports = {
   //relatorio: relatorio,
    filtrar: filtrar,
}