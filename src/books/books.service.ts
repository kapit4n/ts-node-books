/**
 * Data Model Interfaces
 */

import BookModel from "../db/book"
import { BaseBook, Book } from "./book.interface"

/**
 * In-Memory Store
 */


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
