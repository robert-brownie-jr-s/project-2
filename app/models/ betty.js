module.exports = function (sequelize, DataTypes) {
  const Bid = sequelize.define('user', {
    // attributes
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    betType: {
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
