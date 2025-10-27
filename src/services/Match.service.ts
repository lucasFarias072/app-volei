

import { Match } from "../models/Match.entity.js"
import { matchRepository } from "../repositories/Match.repository.js"
import { NotFoundException } from "../exceptions/application/NotFoundException.exception.js"

class MatchService {
  
  findAll(): Match[] {
    const getAllMatches: Match[] = matchRepository.findAll()
    if(!getAllMatches || getAllMatches.length === 0) 
      throw new NotFoundException("Não há partidas cadastradas!")
    return getAllMatches
  }

  findById(matchId: number): undefined | Match {
    const getMatchWithThisId: Match | undefined = matchRepository.findById(matchId)
    if(getMatchWithThisId)
      throw new NotFoundException("Não há partida com esse ID")
    return getMatchWithThisId
  }

  findByIdMapBySituationId(matchId: number): undefined | number {
    const thisMatchSituationId: undefined | number = matchRepository.findByIdMapBySituationId(matchId)
    if(!thisMatchSituationId)
      throw new NotFoundException("Não há ID da situação da partida para a partida com esse ID")
    return thisMatchSituationId
  }

}

const matchService: MatchService = new MatchService()

export {
    matchService, MatchService
}
