

import express from "express"
import { matchCategoryController } from "../../dist/src/controllers/MatchCategoryController.controller.js"

const matchCategoriesRoutes = express.Router()

matchCategoriesRoutes.get('/', matchCategoryController.findAll)

export {
  matchCategoriesRoutes
}
