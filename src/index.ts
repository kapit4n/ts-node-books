/**
 * Required External variables
 */

import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"

import db from './db/connection'
import { itemsRouter } from "./items/items.router"
import { booksRouter } from "./books/books.router"
import { errorHandler } from './middleware/error.middleware'
import { notFoundHandler } from './middleware/not-found.middleware'

(async function() {
  try {
    await db.authenticate()
    console.log('Connection has been established successfully YYYYYY')
  } catch(error) {
    console.error('Unable to connecty to the database:', error)
  }
})()

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)


const app = express();

/**
 * App configuration
 */

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use("/api/menu/items", itemsRouter)
app.use("/api/books", booksRouter)

app.use(errorHandler)
app.use(notFoundHandler)

/**
 * Server activation
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
