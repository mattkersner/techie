'use strict';
module.exports = function(sequelize, DataTypes) {
  var Categories = sequelize.define('Categories', {
    name: DataTypes.STRING(50)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Categories;
};
