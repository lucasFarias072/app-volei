

import { Match } from "../models/match.js"
import { matchRepository } from "../repositories/MatchRepository.repository.js"
import { NotFoundException } from "../exceptions/application/NotFoundException.exception.js"

class MatchService {
  
  findAll() {
    const getAllMatches: Match[] = matchRepository.findAll()
    if(!getAllMatches || getAllMatches.length === 0) 
      throw new NotFoundException("Não há partidas cadastradas!")
    return getAllMatches
  }

}

const matchService: MatchService = new MatchService()

export {
    matchService
}
