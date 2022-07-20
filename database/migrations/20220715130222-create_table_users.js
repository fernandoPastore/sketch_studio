'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable(
      'users',{
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING(200),
        unique: true,
        allowNull: false
      },
      senha: {
        type: Sequelize.DataTypes.STRING(170),
        allowNull: false
      },
      telefone: {
        type: Sequelize.DataTypes.STRING(11),
        allowNull: false
      },
      foto: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: true
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
      deletedAt: Sequelize.DataTypes.DATE

    });
        
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('users');

  }
};
