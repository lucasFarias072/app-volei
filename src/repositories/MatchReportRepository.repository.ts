

import type { MatchReport } from "../models/match-report.js"
import { matchesReport } from "../models/match-report.js"

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
