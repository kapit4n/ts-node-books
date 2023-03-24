/**
 * Data Model Interfaces
 */

import BookModel from "../db/book"
import { BaseBook, Book } from "./book.interface"
import { Books } from "./books.interface"

/**
 * In-Memory Store
 */
let books: Books = {
  1: {
    id: 1,
    name: "Zero to One",
    author: "Zero to One",
    pages: 100,
    price: 100,
    description: "Bussiness related book",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51JkDEpHUQL.jpg"
  }
}

/**
 * Service Methods
 */
export const findAll = async (): Promise<Book[]> => {
  const allBooks = await BookModel.findAll()
  return allBooks.map((b: BookModel) => {
    return {
      id: b.id,
      name: b.name,
      author: b.author,
      description: b.description,
      image: b.image,
      price: b.price,
      pages: b.pages,
    }
  })
}

export const find = async (id: number): Promise<Book | null> => {
  const book = await BookModel.findByPk(id)

  if (!book) return null

  return book
}

export const create = async (newItem: BaseBook): Promise<Book> => {
  const created = await BookModel.create(newItem)
  return created
}

export const update = async (
  id: number,
  booksUpdate: BaseBook
): Promise<Book> => {
  const book = await BookModel.findByPk(id)

  const updated = await book.update({  ...booksUpdate })

  return updated
}

export const remove = async (id: number): Promise<null | void> => {
  const book = await BookModel.findByPk(id)

  if (!book) {
    return null
  }

  book.destroy()
}
