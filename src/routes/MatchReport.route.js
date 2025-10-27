

import express from "express"
import { matchReportController } from "../../dist/src/controllers/MatchReportController.controller.js"
import { playerController } from "../../dist/src/controllers/PlayerController.controller.js"

const matchesReportRoutes = express.Router()

matchesReportRoutes.get('/', matchReportController.findAll)

// Rota controlada pelos serviços do jogador, pois ele está envolvido
matchesReportRoutes.get("/:matchId", playerController.findByMatch)

export {
  matchesReportRoutes
}
