
const usuarioSevice = require('../services/usuario.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const criar = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            throw createError(422, {errors: errors.array()})
        }
        const response = await usuarioSevice.criar(req.body);

        if(response && response.message){
            throw response;
        }
        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const login = async function(req, res, next){
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            throw createError(422, {errors: errors.array()})
        }
        const response = await usuarioSevice.login(req.body);

        if(response && response.message){
            throw response;
        }
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
        const response = await usuarioSevice.atualizar({
            NomeUsuario: req.body.NomeUsuario,
            Telefone: req.body.Telefone
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
        const response = await usuarioSevice.encontrarTodos();
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
        const response = await usuarioSevice.encontrarPorId(req.params.id);
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
        const response = await usuarioSevice.deletar(req.params.id);
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
    login: login,
}