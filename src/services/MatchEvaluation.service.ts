

import type { MatchEvaluation } from "../models/MatchEvaluation.entity.js"
import { matchEvaluationRepository } from "../repositories/MatchEvaluation.repository.js"
import { NotFoundException } from "../exceptions/application/NotFoundException.exception.js"

export class MatchEvaluationService {

  findAll(): MatchEvaluation[] {
    const getAllMatchesEvaluation: MatchEvaluation[] = matchEvaluationRepository.findAll()
    if(!getAllMatchesEvaluation || getAllMatchesEvaluation.length === 0)
      throw new NotFoundException("Não há avaliações de partidas cadastradas!")
    return getAllMatchesEvaluation 
  }

  findPlayerEvaluation(playerId: number, matchId: number): MatchEvaluation | undefined {
    const getPlayerEvaluation: MatchEvaluation | undefined = matchEvaluationRepository.findPlayerEvaluation(
      playerId, matchId
    )
    if(!getPlayerEvaluation) throw new NotFoundException("Não há jogador com avaliação nessa partida")
    return getPlayerEvaluation
  }

  findPlayerEvaluationValue(playerId: number, matchId: number): number | undefined {
    const getPlayerEvaluationValue: number | undefined = matchEvaluationRepository.findPlayerEvaluationValue(
      playerId, matchId
    )
    if(!getPlayerEvaluationValue) throw new NotFoundException("Pontuação do jogador nessa partida, não existe, pois ele não está nela")
    return getPlayerEvaluationValue
  }

}

const matchEvaluationService: MatchEvaluationService = new MatchEvaluationService()

export {
    matchEvaluationService
}
