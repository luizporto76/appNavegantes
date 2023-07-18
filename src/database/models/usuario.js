'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    NomeUsuario: DataTypes.STRING,
    Clube: DataTypes.STRING,
    Telefone: DataTypes.STRING,
    Senha: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    paranoid: true,
  });
  return Usuario;
};