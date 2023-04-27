/**
 * Data Model Interfaces
 */

import BookLogModel from "../db/bookLog"
import BookModel from "../db/book"
import { BaseBookLog, BookLog } from "./bookLog.interface"

/**
 * In-Memory Store
 */

/**
 * Service Methods
 */
export const findAll = async (query: any): Promise<BookLog[]> => {
  const allBookLogs = await BookLogModel.findAll(query)
  return allBookLogs.map((b: BookLogModel) => {
    return {
      id: b.id,
      readPages: b.readPages,
      feedback: b.feedback,
      date: b.date,
    }
  })
}

export const create = async (newItem: BaseBookLog): Promise<BookLog> => {
  const created = await BookLogModel.create(newItem)
  // update book readPages field
  const book = await BookModel.findByPk(created.bookId)
  book.readPages = (book.readPages || 0) + created.readPages
  book.lastReadDate = new Date()
  await book.save()

  return created
}

export const remove = async (id: number): Promise<null | number> => {
  const bookLog = await BookLogModel.findByPk(id)
  // return error if there is not bookLog item

  const book = await BookModel.findByPk(bookLog.bookId)
  book.readPages = book.readPages - bookLog.readPages
  await book.save()

  if (!bookLog) {
    return null
  }
  const resultRemoving = await bookLog.destroy()
  return resultRemoving
}
