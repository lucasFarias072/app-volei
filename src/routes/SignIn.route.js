

import express from "express"
import { 
  validateSignInFields, validatePlayerId, validateUsername, createUser 
} from "../../dist/src/middlewares/validateSignIn.middleware.js"

const signInRoute = express.Router()

signInRoute.post('/', validateSignInFields, validatePlayerId, validateUsername, createUser)

export {
    signInRoute
}