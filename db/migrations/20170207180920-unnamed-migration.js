'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Users', 'description', { type: Sequelize.STRING} )
  },

  down: function (queryInterface, Sequelize) {

  }
};
