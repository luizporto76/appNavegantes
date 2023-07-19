const { Evento } = require('../database/models/index');

const criar = async function(evento){
    const eventoCriado = await Evento.create(evento)
    return eventoCriado;
}

const atualizar = async function(evento, id){
    await Evento.update(evento, {
        where: {id: id}
    })
}

const encontrarTodos = async function(){
    const eventos = await Evento.findAll();
    return eventos;
}

const encontrarPorId = async function(id){
    const evento = await Evento.findByPk(id);
    return evento;
}

const encontrarUmPorWhere = async function(where){
    const evento = await Evento.findOne({where: where});
    return evento;
}

const deletar = async function(id){
    return await Evento.destroy({
        where: {id: id}
    })
}

module.exports = {
    criar: criar,
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    encontrarUmPorWhere: encontrarUmPorWhere,
    deletar: deletar,
}