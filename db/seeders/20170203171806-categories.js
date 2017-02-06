'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      { name: 'Languages',  createdAt: '2017-02-03', updatedAt: '2017-02-03' },
      { name: 'Libraries',        createdAt: '2017-02-03', updatedAt: '2017-02-03' },
      { name: 'Frameworks',             createdAt: '2017-02-03', updatedAt: '2017-02-03' },
      { name: 'Styling',             createdAt: '2017-02-03', updatedAt: '2017-02-03' },
      { name: 'Modules_and_Components',         createdAt: '2017-02-03', updatedAt: '2017-02-03' },
      { name: 'Plugins', createdAt: '2017-02-06', updatedAt: '2017-02-06' },
      { name: 'APIs', createdAt: '2017-02-06', updatedAt: '2017-02-06'},
      { name: 'Collaboration_Tools', createdAt: '2017-02-06', updatedAt: '2017-02-06'},
      { name: 'Text_Editors', createdAt: '2017-02-06', updatedAt: '2017-02-06'},
      { name: 'Productivity', createdAt: '2017-02-06', updatedAt: '2017-02-06'}
    ], {});
  }
};
