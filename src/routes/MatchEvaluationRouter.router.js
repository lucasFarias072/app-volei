

import express from "express"
// import { matchesEvaluations } from "../../dist/src/models/match-evaluation.js"
import { matchEvaluationController } from "../../dist/src/controllers/MatchEvaluationController.controller.js"

const matchesEvaluationsRoutes = express.Router()

/* matchesEvaluationsRoutes.get('/', (req, res) => {
  try {
    const getAllMatchesEvaluations = matchesEvaluations
    if(!getAllMatchesEvaluations) return res.status(404).json({msg: "Sem avaliações de jogadores registradas nesta partida"})
    return res.status(200).send(getAllMatchesEvaluations)
  } catch(err) {
    console.log(`Erro interno no servidor: ${err}`)
  }
}) */

matchesEvaluationsRoutes.get('/', matchEvaluationController.findAll)

export {
    matchesEvaluationsRoutes
}