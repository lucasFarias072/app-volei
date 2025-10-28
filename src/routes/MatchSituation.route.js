

import express from "express"
import { matchSituationController } from "../../dist/src/controllers/MatchSituation.controller.js"

const matchSituationsRoutes = express.Router()

/**
 * @swagger
 * /api/matches-situations:
 *   get:
 *     summary: Retorna todas as instâncias de situação de partida
 *     tags: [Matches]
 *     responses:
 *       200:
 *         description: Todas as instâncias de situação de partida - MatchSituation[]
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MatchSituation'
 */
matchSituationsRoutes.get('/', matchSituationController.findAll)

export {
  matchSituationsRoutes
}
