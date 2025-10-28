

import express from "express"
import { matchEvaluationController } from "../../dist/src/controllers/MatchEvaluation.controller.js"

const matchesEvaluationsRoutes = express.Router()

/**
 * @swagger
 * /api/matches-evaluations:
 *   get:
 *     summary: Retorna todas as instâncias de avaliação de partida
 *     tags: [Matches]
 *     responses:
 *       200:
 *         description: Todas as instâncias de avaliação de partida - MatchEvaluation[]
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MatchEvaluation'
 */
matchesEvaluationsRoutes.get('/', matchEvaluationController.findAll)

export {
    matchesEvaluationsRoutes
}