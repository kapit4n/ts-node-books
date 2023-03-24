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
    type: DataTypes.TEXT,
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
    name: "El Poder de lo Habitos",
    description: "En esencia, El poder de los hábitos contiene un mensaje estimulante: la clave para hacer ejercicio con regularidad, perder peso, ser más productivo y conseguir el éxito consiste en entender el modo en que funcionan los hábitos.",
    feedback: "",
    author: "Charles Duhigg",
    price: 50,
    pages: 320,
    image: "https://assets-libr.cantook.net/medias/8b/2c42e1b3fd0c20e4f462ac2c89a7d336aee459.jpg"
  });

  await BookModel.create({
    name: "El poder del metabolismo",
    description: "El libro define las causas y soluciones al problema del metabolismo lento que tiene algunos haciendo dieta de por vida mientras otros son flacos coman lo que coman. Por lo tanto se concluye que bajar de peso no tiene que ver solo con lo que usted come.",
    author: "Frank Suarez",
    price: 50,
    pages: 388,
    image: "https://m.media-amazon.com/images/I/81ufFIPZuaL.jpg"
  });

  await BookModel.create({
    name: "Tiende tu cama",
    description: "Sinopsis de Tiende tu cama y otros pequeños hábitos que cambiarán tu vida y el mundo: Si quieres cambiar el mundo, comienza por tender tu cama. Si tiendes tu cama al despertar, habrás cumplido con tu primera tarea.",
    author: "William H. McRaven",
    price: 25,
    pages: 128,
    image: "https://m.media-amazon.com/images/I/81Ae1rVs5vL.jpg"
  });
}
