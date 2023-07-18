const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const User = db.define(
  "users",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement:true,
      },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);
// User.associate = (models)=>{
//   User.hasMany(models.Task, { foreignKey: "userId" });
// }

module.exports = User;
