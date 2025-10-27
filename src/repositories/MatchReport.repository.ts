

import type { MatchReport } from "../models/MatchReport.entity.js"
import { matchesReport } from "../models/MatchReport.entity.js"

class MatchReportRepository {

  findAll(): MatchReport[] {
    return matchesReport
  }

  findByMatchReportId(matchId: number): MatchReport[] {
    return this.findAll().filter(matchReport => matchId === matchReport.matchReportId)
  }

}

const matchReportRepository: MatchReportRepository = new MatchReportRepository()

export {
    matchReportRepository
}
