const handle404Error = function (req, res){
    res.status(404);
    res.send(['não encontrado'])
}
module.exports = handle404Error;