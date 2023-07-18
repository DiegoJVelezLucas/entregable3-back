const { Sequelize } = require("sequelize");

const db = new Sequelize({
  host: "dpg-cijpce5gkuvjvn6qu36g-a.oregon-postgres.render.com",
  database: "segundo_entregable",
  port: 5432,
  username: "draktan",
  password: "IjcEY7sMuf4yiOf2vImJJSHnO8yEyenY",
  dialect: "postgres",
  dialectOptions: {ssl:{ require: true, rejectUnauthorized: false }}
});
(async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}); 

module.exports = db;