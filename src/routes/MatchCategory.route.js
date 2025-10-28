

import express from "express"
import { matchCategoryController } from "../../dist/src/controllers/MatchCategory.controller.js"

const matchCategoriesRoutes = express.Router()

/**
 * @swagger
 * /api/matches-categories:
 *   get:
 *     summary: Retorna todas as instâncias de categoria de partida
 *     tags: [Matches]
 *     responses:
 *       200:
 *         description: Todas as instâncias de categoria de partida - MatchCategory[]
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MatchCategory'
 */
matchCategoriesRoutes.get('/', matchCategoryController.findAll)

export {
  matchCategoriesRoutes
}
