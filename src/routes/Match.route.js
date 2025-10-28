

import express from "express"
import { matchController } from "../../dist/src/controllers/Match.controller.js"

const matchRoutes = express.Router()

/**
 * @swagger
 * /api/matches:
 *   get:
 *     summary: Retorna todas as instâncias de partida
 *     tags: [Matches]
 *     responses:
 *       200:
 *         description: Todas as instâncias de partida - Match[]
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Match'
 */
matchRoutes.get('/', matchController.findAll)

export {
  matchRoutes
}
