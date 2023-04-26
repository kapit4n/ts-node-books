/**
 * Data Model Interfaces
 */

 import BookLogModel from "../db/bookLog"
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
   return created
 }
 
 export const remove = async (id: number): Promise<null | void> => {
   const book = await BookLogModel.findByPk(id)
 
   if (!book) {
     return null
   }
 
   book.destroy()
 }
 