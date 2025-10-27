

import type { MatchEvaluation } from "../models/MatchEvaluation.entity.js"
import { matchesEvaluations } from "../models/MatchEvaluation.entity.js"

class MatchEvaluationRepository {

  findAll(): MatchEvaluation[] {
    return matchesEvaluations
  }

  findPlayerEvaluation(playerId: number, matchId: number): MatchEvaluation | undefined {
    return this.findAll().find((eva: MatchEvaluation) => eva.playerId === playerId && eva.matchId === matchId)
  }

  findPlayerEvaluationValue(playerId: number, matchId: number): number | undefined {
    return this.findPlayerEvaluation(playerId, matchId)?.value
  }

}

const matchEvaluationRepository: MatchEvaluationRepository = new MatchEvaluationRepository()

export {
    matchEvaluationRepository
}