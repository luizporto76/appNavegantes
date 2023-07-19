
const eventoService = require('../services/evento.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const criar = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            throw createError(422, {errors: errors.array()})
        }
        const response = await eventoService.criar({
            titulo: req.body.titulo,
            dataInicial: req.body.dataInicial,
            dataFinal: req.body.dataFinal,
            end: req.body.end,
            estado: req.body.estado,
            cidade: req.body.cidade,
            usuario_id: req.usuario_id
        });

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const atualizar = async function(req, res, next){
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            throw createError(422, {errors: errors.array()})
        }
        const response = await eventoService.atualizar({
            titulo: req.body.titulo,

        },req.params.id);
        
        if(response && response.message){
            throw response;
        }
        res.send(response);        
    } catch (error) {
        return next(error);        
    }
}
  

const encontrarTodos = async function (req, res, next){
    try {
        const response = await eventoService.encontrarTodos();
        res.send(response);    
    } catch (error) {
        next(error);
    }
}

const encontrarPorId = async function(req, res, next){
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            throw createError(422, {errors: errors.array()})
        }
        const response = await eventoService.encontrarPorId(req.params.id);
        if (response && response.message){
            throw response;
        }
        res.send(response);
    } catch (error) {
        next(error)
    }
}

const deletar = async function(req, res, next){
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            throw createError(422, {errors: errors.array()})
        }
        const response = await eventoService.deletar(req.params.id);
        
        if (response && response.message){
            throw response;
        }
        res.send(response);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    criar: criar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    atualizar: atualizar,
    deletar: deletar,
}