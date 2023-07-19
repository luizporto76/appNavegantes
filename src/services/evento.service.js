const eventoRepository = require('../repositories/envento.repository');
const createError = require('http-errors');



const criar = async function(evento){
    const existeEvento = await eventoRepository.encontrarUmPorWhere({titulo: evento.titulo});

    if(existeEvento){
        return createError(409, 'Evento já existe');
    }
    const eventoCriado = await eventoRepository.criar(evento);
        return eventoCriado;
    }

const atualizar = async function(evento, id){
    const existeEvento = await eventoRepository.encontrarPorId(id);

    if (!existeEvento) {
        return createError(404, 'Evento não cadastrado');
    }
    await eventoRepository.atualizar(evento, id); 
    
    return await eventoRepository.encontrarPorId(id);
}

const encontrarTodos = async function(){
    const eventos = await eventoRepository.encontrarTodos();
    return eventos;
}


const encontrarPorId = async function(id){
    const evento = await eventoRepository.encontrarPorId(id);
    if (!evento){
        return createError(404, 'Evento não encontrado');
    }
    return evento;
}

const deletar = async function(id){
    const evento = await eventoRepository.encontrarPorId(id);
    if (!evento){
        return createError(404, 'Usuário não encontrado');
    }
    await eventoRepository.deletar(id);
    return evento;
}



module.exports = {
    criar: criar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    atualizar: atualizar,
    deletar: deletar,

}