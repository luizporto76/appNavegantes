const usuarioSevice = require('../services/usuario.service');

const criar = async function(req, res) {
    const usuario = await usuarioSevice.criar(req.body);
    res.send(usuario);
}

const encontrarTodos = async function (req, res){
    const usuarios = await usuarioSevice.encontrarTodos();
    res.send(usuarios)
}

const encontrarPorId = async function(req, res){
    const usuario = await usuarioSevice.encontrarPorId(req.params.id);
    res.send(usuario)
}

module.exports = {
    criar: criar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
}