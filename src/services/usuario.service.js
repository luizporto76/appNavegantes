const usuarioRepository = require("../repositories/usuario.repository");
require('dotenv').config();
const bcrypt = require('bcrypt');

const criar = async function(usuario){
    usuario.Senha = await bcrypt.hash(usuario.Senha, ~~process.env.SALT)
    const usuarioCriado = await usuarioRepository.criar(usuario);
    return usuarioCriado;
}

const encontrarTodos = async function(){
    const usuarios = await usuarioRepository.encontrarTodos();
    return usuarios;
}

const encontrarPorId = async function(id){
    const usuario = await usuarioRepository.encontrarPorId(id);
    return usuario;
}

module.exports = {
    criar: criar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
}