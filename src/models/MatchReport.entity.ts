

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
    new MatchReport(7, 1, 7), new MatchReport(8, 1, 8), new MatchReport(9, 1, 9), 
    new MatchReport(10, 1, 10),

    // Partida 2
    new MatchReport(11, 2, 6), new MatchReport(12, 2, 8), new MatchReport(13, 2, 14),
    new MatchReport(14, 2, 1), new MatchReport(15, 2, 5), new MatchReport(16, 2, 10),
    new MatchReport(17, 2, 9), new MatchReport(18, 2, 4), new MatchReport(19, 2, 3),
    new MatchReport(20, 2, 12), 

    // Partida 3
    new MatchReport(21, 3, 5), new MatchReport(22, 3, 2), new MatchReport(23, 3, 6),
    new MatchReport(24, 3, 4), new MatchReport(25, 3, 10), new MatchReport(26, 3, 15),
    new MatchReport(27, 3, 12), new MatchReport(28, 3, 9), new MatchReport(29, 3, 8),
    new MatchReport(30, 3, 7), 

    // Partida 4
    new MatchReport(31, 4, 2), new MatchReport(32, 4, 4), new MatchReport(33, 4, 10),
    new MatchReport(34, 4, 11), new MatchReport(35, 4, 7), new MatchReport(36, 4, 6),
    new MatchReport(37, 4, 13), new MatchReport(38, 4, 3), new MatchReport(39, 4, 1),
    new MatchReport(40, 4, 9), 
]

export {
  matchesReport
}