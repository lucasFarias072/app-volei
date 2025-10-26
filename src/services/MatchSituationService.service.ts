

import type { MatchSituation } from "../models/match-situations.js"
import { matchSituationRepository } from "../repositories/MatchSituationRepository.repository.js"
import { NotFoundException } from "../exceptions/application/NotFoundException.exception.js"

class MatchSituationService {

  findAll(): MatchSituation[] {
    const getAllMatchesSituation: MatchSituation[] = matchSituationRepository.findAll()
    if(!getAllMatchesSituation || getAllMatchesSituation.length === 0)
      throw new NotFoundException("Não há situações de partida cadastradas!")
    return getAllMatchesSituation
  }

}

const matchSituationService: MatchSituationService = new MatchSituationService()

export {
    matchSituationService
}
