const bcrypt = require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
    let users = [];

    for(let i=1; i <= 5; i++){
      users.push(
        {
        id: i,
        nome: `Usuário ${i}`,
        email: `usuario${i}@teste.com`,
        senha: bcrypt.hashSync('123456', 10),
        telefone:``,
        foto: `perfil_${i}.jpg`,
        createdAt: (new Date()).toJSON().substring(0,19)
        }
      )
    }
     await queryInterface.bulkInsert('users', users,{});

    },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {}); 
  }
};
