'use strict';
module.exports = function(sequelize, DataTypes) {
  var Categories = sequelize.define('Categories', {
    name: DataTypes.STRING(50),
    tech_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Categories;
};