'use strict';
module.exports = function(sequelize, DataTypes) {
  var Technology = sequelize.define('Technology', {
    name: DataTypes.STRING(255),
    description: DataTypes.STRING(255),
    documentation: DataTypes.STRING(255),
    use_case: DataTypes.STRING(255)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Technology;
};