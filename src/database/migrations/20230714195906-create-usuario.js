'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.criarTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NomeUsuario: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Clube: {
        type: Sequelize.STRING
      },
      Telefone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Senha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      criardAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt:{
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};