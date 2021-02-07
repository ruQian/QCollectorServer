/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const User = app.model.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'users'
  });

  User.associate = function() {
    console.log("1111---------------------------");
  };
  User.findByLogin = async function(login) {
    console.log("1111---------------------------");
  }

  return User;
};
