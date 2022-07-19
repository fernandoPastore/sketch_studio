'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let comentarios = [];
    for(let i=1; i <= 5; i++){
      comentarios.push(
        {
          id:i,
          texto: `texto do comentário ${i}`,
          users_id: i,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      )
    }
    await queryInterface.bulkInsert('comentarios', comentarios, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('comentarios', null, {});
     
  }
};
