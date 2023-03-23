const { Sequelize, DataTypes, Model } = require('sequelize');
import db from '../db/connection'

export default class BookModel extends Model { }

BookModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, { sequelize: db, modelName: 'Books' });

export async function createBooks() {
  await BookModel.create({
    name: "Elon Musk",
    description: "Elon Reeve Musk FRS is a business magnate and investor.",
    price: 60,
    image: "https://www.investopedia.com/thmb/sFi7zDFVLekmI6JiMcrLsNOyKAU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-elon-musk-became-elon-musk_final-43ef802cd2414d14a8bf3967f319ce18.png"
  });

  await BookModel.create({
    name: "Tiende tu Cama",
    description: "Elon Reeve Musk FRS is a business magnate and investor.",
    price: 60,
    image: "https://m.media-amazon.com/images/I/81Ae1rVs5vL.jpg"
  });

}
