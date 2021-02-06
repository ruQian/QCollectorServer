'use strict';

module.exports = app => {
   const { STRING, INTEGER, DATE } = app.Sequelize;

   const qmessage = app.model.define('qmessage_D_P', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        //群号 
        groupid: STRING(30),
        //车主 还是 乘客 
        DOrP: INTEGER,
        //电话号码 
        telNO: STRING(30),
        //消息时间 
        messageData: DATE,
        //原始消息内容
        rawMessage: STRING(1024),
   });

   return qmessage;
};