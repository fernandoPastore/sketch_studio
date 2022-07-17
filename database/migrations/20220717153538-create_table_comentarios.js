'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable(
      'comentarios',
      { 
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        texto: {
          type: Sequelize.DataTypes.TEXT,
        },
        users_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model:{
              tableName: "users"
            },
            key:"id"
          }
        },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
      });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('comentarios');
  }
};
