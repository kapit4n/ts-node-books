/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";

import * as AuthService from "./auth.service"

import { BaseAuth } from "./auth.interface"

/**
 * Router Definition
 */
export const authRouter = express.Router()

/**
 * Controller Definitions
 */

// POST auth
authRouter.post("/", async (req: Request, res: Response) => {
  try {
    const book: BaseAuth = req.body;

    const authData = await AuthService.signin(book)

    res.status(201).json(authData)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
})
