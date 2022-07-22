'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {  
    await queryInterface.changeColumn(
      "users",
      "telefone",{
        type: Sequelize.DataTypes.STRING(11),
        allowNull: true
      } 
    )
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.changeColumn(
      "users",
      "telefone",{
        type: Sequelize.DataTypes.STRING(11),
        allowNull: true
      } 
    )
     
  }
};
