/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";

import * as BookLogService from "./bookLogs.service"

import { BaseBookLog, BookLog } from "./bookLog.interface"

/**
 * Router Definition
 */
export const bookLogsRouter = express.Router()

/**
 * Controller Definitions
 */

// GET books
bookLogsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const bookId = req.query.bookId;
    const bookLogs: BookLog[] = await BookLogService.findAll({
      where:
      {
        bookId: bookId
      }
    });
    
    res.status(200).send(bookLogs)


  } catch (e: any) {
    res.status(500).send(e.message)
  }
})


// POST books
bookLogsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const bookLog: BaseBookLog = req.body;

    const newBookLog = await BookLogService.create(bookLog)
    // process to increase the readPage of the book model with the bookLog.bookId

    res.status(201).json(newBookLog)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
})


// DELETE books/:id
bookLogsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10)
    await BookLogService.remove(id)

    res.sendStatus(204)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
})
