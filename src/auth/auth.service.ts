/**
 * Data Model Interfaces
 */

import UserModel from "../db/users"
import { BaseAuth } from "./auth.interface"

/**
 * In-Memory Store
 */


/**
 * Service Methods
 */
export const signin = async (authInfo: BaseAuth): Promise<UserModel> => {
  const authData = await UserModel.findOne({ where: { username: authInfo.username, password: authInfo.password } });
  return authData
}
