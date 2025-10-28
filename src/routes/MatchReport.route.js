

import express from "express"
import { matchReportController } from "../../dist/src/controllers/MatchReport.controller.js"
import { playerController } from "../../dist/src/controllers/Player.controller.js"

const matchesReportRoutes = express.Router()

/**
 * @swagger
 * /api/matches-reports:
 *   get:
 *     summary: Retorna todas as instâncias de relatório de partida
 *     tags: [Matches]
 *     responses:
 *       200:
 *         description: Todas as instâncias de relatório de partida - MatchReport[]
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MatchReport'
 */
matchesReportRoutes.get('/', matchReportController.findAll)

// Rota controlada pelos serviços do jogador, pois ele está envolvido
/**
 * @swagger
 * /api/matches-reports/{matchId}:
 *   get:
 *     summary: Retorna todas as instâncias de relatório de partida através de um id de partida específico
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: matchId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Todas as instâncias de relatório de partida através de um id de partida específico - MatchReport[]
 *         example: 1
 *     responses:
 *       200:
 *         description: Relatórios da partida
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MatchReport'
 */
matchesReportRoutes.get("/:matchId", playerController.findByMatchId)

export {
  matchesReportRoutes
}
