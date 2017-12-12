'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Tasks', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 50],
          msg: "Your to-do item name must be between 3 and 50 characters.  Please try again."
        }
      }
    },
    done: DataTypes.BOOLEAN,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Task.belongsTo(models.Context, {
          foreignKey: 'ContextId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Task;
};
