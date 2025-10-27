

import type { MatchReport } from "../models/MatchReport.entity.js"
import { matchReportRepository } from "../repositories/MatchReport.repository.js"
import { NotFoundException } from "../exceptions/application/NotFoundException.exception.js"

class MatchReportService {

  findAll(): MatchReport[] {
    const getAllMatchesReport: MatchReport[] = matchReportRepository.findAll()
    if(!getAllMatchesReport || getAllMatchesReport.length === 0) 
      throw new NotFoundException("Não há relatórios de partida cadastrados!")  
    return getAllMatchesReport 
  }

  findByMatchReportId(matchId: number): MatchReport[] {
    const getPlayersFromThisMatch: MatchReport[] = matchReportRepository.findByMatchReportId(matchId)
    if(!getPlayersFromThisMatch || getPlayersFromThisMatch.length === 0)
      throw new NotFoundException("Não há jogadores cadastrados nessa partida!")
    return getPlayersFromThisMatch
  }

}

const matchReportService: MatchReportService = new MatchReportService()

export {
    matchReportService
}