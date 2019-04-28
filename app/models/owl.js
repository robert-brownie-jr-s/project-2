module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.define("Sequelize", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Sequelize;
};
