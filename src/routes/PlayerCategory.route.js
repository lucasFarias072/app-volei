

import express from "express"
import { playerCategoryController } from "../../dist/src/controllers/PlayerCategory.controller.js"

const playersCategoryRoutes = express.Router()

/**
 * @swagger
 * /api/players-categories:
 *   get:
 *     summary: Retorna todas as instâncias de categoria de jogador
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: Todas as instâncias de categoria de jogador - PlayerCategory[]
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PlayerCategory'
 */
playersCategoryRoutes.get('/', playerCategoryController.findAll)

export {
    playersCategoryRoutes
}
