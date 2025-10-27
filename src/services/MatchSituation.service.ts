

import type { MatchSituation } from "../models/MatchSituations.entity.js"
import { matchSituationRepository } from "../repositories/MatchSituation.repository.js"
import { NotFoundException } from "../exceptions/application/NotFoundException.exception.js"

class MatchSituationService {

  findAll(): MatchSituation[] {
    const getAllMatchesSituation: MatchSituation[] = matchSituationRepository.findAll()
    if(!getAllMatchesSituation || getAllMatchesSituation.length === 0)
      throw new NotFoundException("Não há situações de partida cadastradas!")
    return getAllMatchesSituation
  }

  findById(matchId: number): undefined | MatchSituation {
    const matchSituationFromThisMatch: undefined | MatchSituation = matchSituationRepository.findById(matchId)
    if(!matchSituationFromThisMatch)
      throw new NotFoundException("Partida com ID buscado não existe, ID de situação da partida não encontrado")
    return matchSituationFromThisMatch
  }

  mapBySituation(matchId: number): undefined | string {
    const matchSituation: undefined | string = matchSituationRepository.mapBySituation(matchId)
    if(!matchSituation)
      throw new NotFoundException("Partida com ID buscado não existe, situação da partida não encontrada")
    return matchSituation
  }

}

const matchSituationService: MatchSituationService = new MatchSituationService()

export {
    matchSituationService, MatchSituationService
}
