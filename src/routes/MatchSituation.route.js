

import express from "express"
// import { matchDescriptions } from "../../dist/src/models/match-situations.js"
import { matchSituationController } from "../../dist/src/controllers/MatchSituationController.controller.js"
const matchSituationsRoutes = express.Router()

/* matchSituationsRoutes.get('/', (req, res) => {
  try {
    const getAllMatchSituations = matchDescriptions
    if(!getAllMatchSituations) return res.status(404).json({msg: "Sem situações de partida registradas"})
    // const getAllMatchSituations = await getAllMatchSituationsQuery.json()
    return res.status(200).send(getAllMatchSituations)
  } catch(err) {
    console.log(`Erro interno no servidor: ${err}`)
  }
}) */

matchSituationsRoutes.get('/', matchSituationController.findAll) // /api/partida-situacoes

export {
  matchSituationsRoutes
}
