const bcrypt = require('bcryptjs');

/**
 * yarn sequelize db:seed:all
 * para inserir no banco
 */

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Distribuidora FastFeet',
          email: 'admin@fastfeet.com',
          password_hash: bcrypt.hashSync('123123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
