'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  const DataTypes = app.Sequelize;
  await queryInterface.createTable('users', {
       id: { type: INTEGER, primaryKey: true, autoIncrement: true },
       groupid: DataTypes.STRING(30),
       DOrP: DataTypes.INTEGER,
       telNO: DataTypes.STRING(30),
       messageDate: DataTypes.DATE,
       rawMessage:DataTypes.STRING(1024)
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
