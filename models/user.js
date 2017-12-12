'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('Users', {
    id : {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    email : {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Context, {
          foreignKey: 'UserId',
	        onDelete: 'CASCADE'
        })
      }
    }
  });
  return User;
};
