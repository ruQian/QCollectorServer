/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Qmessagedata = app.model.define('qmessagedata', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    groupid: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DOrP: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    telNO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    messageDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rawMessage: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    tableName: 'qmessagedata'
  });

  Qmessagedata.associate = function() {

  }

  return Qmessagedata;
};
