const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Task = db.define(
  "tasks",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(400),
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "tasks",
    timestamps: false,
  }
);
// Task.associate = (models) => {
//   Task.belongsTo(models.User, { foreignKey: "userId" });
//   Task.belongsTo(models.Categories, { foreignKey: "categoriesId" });
// };
module.exports = Task;
