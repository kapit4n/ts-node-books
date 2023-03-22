import { Sequelize, DataTypes } from 'sequelize';

const db = new Sequelize(process.env.MYSQLDB_DATABASE as string, process.env.MYSQLDB_USER as string, process.env.MYSQLDB_ROOT_PASSWORD as string, {
  host: process.env.MYSQLDB_HOST,
  dialect: 'mysql',
});

const User = db.define('User', {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});



User.sync();

export default db;
