'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Users', 'profile', { type: Sequelize.STRING} )
  },

  down: function (queryInterface, Sequelize) {

  }
};
