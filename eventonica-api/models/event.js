const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
const sequelize = new Sequelize('postgres://localhost:5432/eventonica')



// module.exports = function (sequelize, DataTypes, Model) {
class Event extends Model {}

Event.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
  },
  description: {
    type: DataTypes.STRING
  },
  category: {
    type: DataTypes.STRING
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Event', 
  tableName: 'Events',
  timestamps: false
});

module.exports = Event;