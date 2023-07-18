const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Categories = db.define("categories", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement:true,
    },
  title: {
    type: DataTypes.STRING(40),
    allowNull: true,
  },
},
{
  tableName: "categories",
  timestamps: false
}
);
// Categories.associate = (models) => {
//   Categories.hasMany(models.Task, { foreignKey: "categoriesId" });
// };
module.exports = Categories;
