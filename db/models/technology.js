'use strict';
module.exports = function(sequelize, DataTypes) {
  var Technology = sequelize.define('Technology', {
    name: DataTypes.STRING(255),
    description: DataTypes.TEXT,
    documentation: DataTypes.TEXT,
    use_case: DataTypes.TEXT,

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Technology;
};
