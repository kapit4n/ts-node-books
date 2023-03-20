/**
 * Data Model Interfaces
 */

import { BaseItem, Item } from "./item.interface"
import { Items } from "./items.interface"

/**
 * In-Memory Store
 */
let items: Items = {
  1: {
    id: 1,
    name: "Burger",
    price: 599,
    description: "Tasty",
    image: "https:"
  }
}

/**
 * Service Methods
 */
export const findAll = async (): Promise<Item[]> => Object.values(items)

export const find = async (id: number): Promise<Item> => items[id]

export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf()

  items[id] = {
    id,
    ...newItem
  }

  return items[id]
}

