const { Sequelize } = require('sequelize');

const db = new Sequelize("ts_db", "root", "root", {
  host: process.env.MYSQLDB_HOST,
  dialect: 'mysql',
});

/*const db = new Sequelize(process.env.MYSQLDB_DATABASE as string, process.env.MYSQLDB_USER as string, process.env.MYSQLDB_ROOT_PASSWORD as string, {
  host: process.env.MYSQLDB_HOST,
  dialect: 'mysql',
});
*/
console.log("DB CREATED")

export default db;
