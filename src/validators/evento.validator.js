const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');


const criar = function(){
    return[
    body('titulo', validatorMessage('titulo')).exists().bail().isString(),

    ]
}

const atualizar = function(){
    return[
    body('titulo', validatorMessage('titulo')).exists().bail().isString(),
    param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

const encontrarPorId = function(){
    return [
        param('id', validatorMessage('id')).exists().bail().isInt(),
    ]
}

const deletar = function(){
    return [
        param('id', validatorMessage('id')).exists().bail().isInt(),
    ]
}


module.exports = {
    criar: criar,
    encontrarPorId: encontrarPorId,
    atualizar: atualizar,
    deletar: deletar,
};