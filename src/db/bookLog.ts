const { DataTypes, Model } = require('sequelize');
import db from './connection'

export default class BookLogModel extends Model { }

BookLogModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  bookId: {
    type: DataTypes.INTEGER,
    references: {
      model: { tableName: 'Books' },
      key: 'id'
    },
    allowNull: false,
    onUpdate: 'cascade',
    onDelete: 'cascade',
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  readPages: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: true
  },
}, { sequelize: db, modelName: 'BookLogs' });

export async function createBookLogs() {

  await BookLogModel.create({
    bookId: 1,
    feedback: "Como aliviar el dolor",
    date: new Date(),
    readPages: 5
  });
}

export async function removeBookLogs() {
  await BookLogModel.destroy({
    where: {},
    truncate: true
  });
}
