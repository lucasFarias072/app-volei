

export class MatchReport {
    matchReportId: number
    matchId: number
    playerId: number

    constructor(matchReportId: number, matchId: number, playerId: number) {
      this.matchReportId = matchReportId
      this.matchId = matchId
      this.playerId = playerId
    }
}

const matchesReport: MatchReport[] = [
    // Partida 1
    new MatchReport(1, 1, 1), new MatchReport(2, 1, 2), new MatchReport(3, 1, 3),
    new MatchReport(4, 1, 4), new MatchReport(5, 1, 5), new MatchReport(6, 1, 6),
    new MatchReport(7, 1, 7), new MatchReport(8, 1, 8), new MatchReport(9, 1, 9), new MatchReport(10, 1, 10),

    // Partida 2
    new MatchReport(11, 2, 11), 

    // Partida 3
    new MatchReport(12, 3, 2)
]

export {
  matchesReport
}