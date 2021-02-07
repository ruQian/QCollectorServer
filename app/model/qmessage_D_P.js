/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Qmessage_D_P = app.model.define('qmessage_D_P', {
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
    messageData: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rawMessage: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    tableName: 'qmessage_D_P'
  });
  
  Qmessage_D_P.findByLogin = async function(login) {
    console.log("1111---------------------------");
  }
  

  return Qmessage_D_P;
};
