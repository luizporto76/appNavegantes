const handle404Error = function (req, res){
    res.status(404);
    res.send(['nao encontrado'])
}
module.exports = handle404Error;