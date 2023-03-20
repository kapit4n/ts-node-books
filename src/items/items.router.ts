/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";

import * as ItemService from "./items.service"

import { BaseItem, Item } from "./item.interface"



/**
 * Router Definition
 */
export const itemsRouter = express.Router()

/**
 * Controller Definitions
 */

// GET items
itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll()

    res.status(200).send(items)


  } catch (e) {
    res.status(500).send(e.message)
  }
})

// GET items/:id

// POST items

// PUT items/:id

// DELETE items/:id