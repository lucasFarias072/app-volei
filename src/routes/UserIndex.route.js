

import express from "express"
import { userIndexRouteController } from "../../dist/src/controllers/UserIndexRouteController.controller.js"

const userIndexRoute = express.Router()

userIndexRoute.post('/', userIndexRouteController.login)
userIndexRoute.get('/', userIndexRouteController.goToIndex)

export {
    userIndexRoute
}
