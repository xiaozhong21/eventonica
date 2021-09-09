const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
const sequelize = new Sequelize('postgres://localhost:5432/eventonica')



// module.exports = function (sequelize, DataTypes, Model) {
class User extends Model {}

User.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', 
  tableName: 'Users',
  timestamps: false
});

module.exports = User;
