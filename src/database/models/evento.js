'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Evento.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario'})
    }
  }
  Evento.init({
    titulo: DataTypes.STRING,
    dataInicial: DataTypes.DATE,
    dataFinal: DataTypes.DATE,
    end: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    fly: DataTypes.STRING,
    descricao: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Evento',
    tableName: 'eventos',
    paranoid: true,
  });
  return Evento;
};