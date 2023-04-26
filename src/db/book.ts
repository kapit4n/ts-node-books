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
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  feedback: {
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
  pages: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  readPages: {
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
    readPages: 320,

    image: "https://assets-libr.cantook.net/medias/8b/2c42e1b3fd0c20e4f462ac2c89a7d336aee459.jpg"
  });

  await BookModel.create({
    name: "El poder del metabolismo",
    description: "El libro define las causas y soluciones al problema del metabolismo lento que tiene algunos haciendo dieta de por vida mientras otros son flacos coman lo que coman. Por lo tanto se concluye que bajar de peso no tiene que ver solo con lo que usted come.",
    author: "Frank Suarez",
    feedback: "Frank Suarez",
    price: 50,
    pages: 388,
    readPages: 388,
    image: "https://m.media-amazon.com/images/I/81ufFIPZuaL.jpg"
  });

  await BookModel.create({
    name: "Tiende tu cama",
    description: "Sinopsis de Tiende tu cama y otros pequeños hábitos que cambiarán tu vida y el mundo: Si quieres cambiar el mundo, comienza por tender tu cama. Si tiendes tu cama al despertar, habrás cumplido con tu primera tarea.",
    author: "William H. McRaven",
    feedback: "William H. McRaven",
    price: 25,
    pages: 128,
    readPages: 128,
    image: "https://m.media-amazon.com/images/I/81Ae1rVs5vL.jpg"
  });

  await BookModel.create({
    name: "El Club de las 5 de la manana",
    description: "Nos narra las rutinas por las cuales las personas pueden alcanzar resultados asombrosos en su vida profesional y personal. Con estas rutinas veremos también cómo aumentan la felicidad y vitalidad. Esta es la maravillosa historia de dos personas que quieren aumentar la productividad, la serenidad y la prosperidad",
    author: "Robin Sharma",
    feedback: "Despuertar a las 5 de la manana nos ayuda a enfocarnos en las cosas mas importantes en la manana y estar realizados para comenzar en el trabajo",
    price: 60,
    pages: 396,
    readPages: 342,
    image: "https://www.trebolarium.com/wp-content/uploads/2018/11/club-de-las-cindo-de-la-ma%C3%B1ana.png"
  });

  await BookModel.create({
    name: "Las gafas de la felicidad",
    description: "Las infalibles soluciones de Rafael Santandreu para superar los complejos y los problemas que dificultan y amargan la vida de tantas personas.",
    author: "Rafael Santandreu",
    feedback: "Percepcion de las situaciones nos pueden ayudar a estar feliz ",
    price: 30,
    pages: 188,
    readPages: 128,
    image: "https://www.rafaelsantandreu.es/wp-content/uploads/2021/10/lasgafas-3d-1.png"
  });
}

export async function removeBooks() {
  await BookModel.destroy({
    where: {},
    truncate: true
  });
}
