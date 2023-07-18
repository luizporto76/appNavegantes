const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');


const criar = function(){
    return[
    body('NomeUsuario', validatorMessage('Nome')).exists().bail().isString(),
    body('Telefone', validatorMessage('Telefone')).exists().bail().isString(),
    body('Senha', validatorMessage('Senha')).exists().bail().isString(),
    ]
}

const atualizar = function(){
    return[
    body('NomeUsuario', validatorMessage('Nome')).exists().bail().isString(),
    body('Telefone', validatorMessage('Telefone')).exists().bail().isString(),
    param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

const encontrarPorId = function(){
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

const deletar = function(){
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

module.exports = {
    criar: criar,
    encontrarPorId: encontrarPorId,
    atualizar: atualizar,
    deletar: deletar,
};