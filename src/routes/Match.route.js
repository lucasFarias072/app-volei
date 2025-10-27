

import express from "express"
import { matchController } from "../../dist/src/controllers/MatchController.controller.js"

const matchRoutes = express.Router()

matchRoutes.get('/', matchController.findAll)

export {
  matchRoutes
}
