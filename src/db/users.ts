const { DataTypes, Model } = require('sequelize');
import db from './connection'

export default class UserModel extends Model { }

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { sequelize: db, modelName: 'Users' });

export async function createUsers() {

  await UserModel.create({
    username: "luisarce",
    email: "luis.arce22@gmail.com",
    password: "123456",
  });

  await UserModel.create({
    username: "juanclaros",
    email: "juan.claros22@gmail.com",
    password: "123456",
  });

}
