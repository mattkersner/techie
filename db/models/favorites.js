'use strict';
module.exports = function(sequelize, DataTypes) {
  var Favorites = sequelize.define('Favorites', {
    user_id: DataTypes.BIGINT,
    tech_id: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Favorites;
};