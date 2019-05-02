module.exports = function (sequelize, DataTypes) {
  const Bid = sequelize.define('user', {
    // attributes
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    betType: {
      type: DataTypes.STRING,
      allowNull: false    }
  }, {
    // options
  });

  return Bid;
};
