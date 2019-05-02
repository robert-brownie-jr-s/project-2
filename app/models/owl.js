module.exports = function(sequelize, DataTypes) {
  var Sequelize = sequelize.define("Sequelize", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Sequelize;
};

var config = require(__dirname + "/../config/config.json")[process.env];

//creates 20 char random variable as result
function makeIdCode(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNPQRSTUVWXYabcdefghjkmnopqrstuvwxyz123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
var idCode = makeIdCode(20)
console.log(idCode);


