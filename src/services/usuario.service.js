const usuarioRepository = require("../repositories/usuario.repository");
const createError = require('http-errors');
require('dotenv').config(); 
const bcrypt = require('bcrypt');

const criar = async function(usuario){
    const existeUsuario = await usuarioRepository.encontrarUmPorWhere({Telefone: usuario.Telefone});

    if(existeUsuario){
        return createError(409, 'Usuário já existe');
    }
    
    usuario.Senha = await bcrypt.hash(usuario.Senha, ~~process.env.SALT)
    const usuarioCriado = await usuarioRepository.criar(usuario);
    return usuarioCriado;
}

const atualizar = async function(usuario, id){
    const existeUsuario = await usuarioRepository.encontrarPorId(id);

    if (!existeUsuario) {
        return createError(404, 'Usuário não existe');
    }

    await usuarioRepository.atualizar(usuario, id); 
    return await usuarioRepository.encontrarPorId(id);
}

const encontrarTodos = async function(){
    const usuarios = await usuarioRepository.encontrarTodos();
    return usuarios;
}


const encontrarPorId = async function(id){
    const usuario = await usuarioRepository.encontrarPorId(id);
    if (!usuario){
        return createError(404, 'Usuário não encontrado');
    }
    return usuario;
}

const deletar = async function(id){
    const usuario = await usuarioRepository.encontrarPorId(id);
    if (!usuario){
        return createError(404, 'Usuário não encontrado');
    }
    await usuarioRepository.deletar(id);
    return usuario;
}



module.exports = {
    criar: criar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    atualizar: atualizar,
    deletar: deletar,
}