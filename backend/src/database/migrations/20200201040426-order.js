module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipient', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      recipient_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryman_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      signature_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      product: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      canceled_at: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      start_date: {
        type: Sequelize.STRING(2),
        allowNull: true,
      },
      end_date: {
        type: Sequelize.INTEGER(8),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('recipient');
  },
};
