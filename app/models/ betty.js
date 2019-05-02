module.exports = function (sequelize, DataTypes) {
  const Bid = sequelize.define('user', {
    // attributes
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false    
  }, 
    betAmount: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Bid;
};
