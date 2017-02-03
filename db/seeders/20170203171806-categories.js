'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      { name: 'Language',  createdAt: '2017-02-03', updatedAt: '2017-02-03' },
      { name: 'Library',        createdAt: '2017-02-03', updatedAt: '2017-02-03' },
      { name: 'Framework',             createdAt: '2017-02-03', updatedAt: '2017-02-03' },
      { name: 'Styling',             createdAt: '2017-02-03', updatedAt: '2017-02-03' },
      { name: 'Module',         createdAt: '2017-02-03', updatedAt: '2017-02-03' }
    ], {});
  }
};
