'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.addColumn('eventos', 'fly',{
        type: Sequelize.STRING,
        allowNull: true,
      }, {transaction})

      await queryInterface.addColumn('eventos', 'descricao',{
        type: Sequelize.STRING,
        allowNull: true,
      }, {transaction})

      await transaction.commit()
    } catch (error) {
      await transaction.rollback();
      throw error;
      
    }

  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.removeColumn('eventos', 'fly', {transaction});
      await queryInterface.removeColumn('eventos', 'descricao', {transaction});
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};
