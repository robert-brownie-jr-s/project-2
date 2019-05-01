module.exports = function (sequelize, DataTypes) {
  var Bid = sequelize.define("Bid", {
    // Giving the Bid model a name of type STRING
    name: DataTypes.STRING
  });
  // Associating Bid with Posts
  // When a Bid is deleted, also delete any associated Posts
  // Bid.associate = function (models) {

  //   Bid.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

  return Bid;
};
