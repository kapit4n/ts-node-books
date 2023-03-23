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
      name: b.name,
      description: b.description,
      image: b.image,
      price: b.price
    }
  })
}

export const find = async (id: number): Promise<Book> => books[id]

export const create = async (newItem: BaseBook): Promise<Book> => {
  const id = new Date().valueOf()

  books[id] = {
    id,
    ...newItem
  }

  return books[id]
}

export const update = async (
  id: number,
  booksUpdate: BaseBook
): Promise<Book | null> => {
  const book = await find(id)

  if (!book) {
    return null
  }

  books[id] = { id, ...booksUpdate }

  return books[id]
}

export const remove = async (id: number): Promise<null | void> => {
  const book = await find(id)

  if (!book) {
    return null
  }

  delete books[id]
}
