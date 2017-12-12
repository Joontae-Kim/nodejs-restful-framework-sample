'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    //define all columns in Tasks, including id, createdAt, and updatedAt as well as foreign keys (see ContextId)
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      done: {
        type: Sequelize.BOOLEAN
      },
      ContextId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Contexts',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};
