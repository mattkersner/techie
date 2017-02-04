'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Technologies', 'category_name', { type: Sequelize.STRING(50)} )
  },

  down: function (queryInterface, Sequelize) {

  }
};
