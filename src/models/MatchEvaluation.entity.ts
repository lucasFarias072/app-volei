

class MatchEvaluation {
  // partidaFK, organizadorPK, jogadorFK, avaliacao
  evaluationId: number
  matchId: number
  // organizerId: number (I will take it off, cuz it can be retrieved through "matchId") (bad: more joins)
  playerId: number
  value: number

  // organizerId: number,
  constructor(evaluationId: number, matchId: number, playerId: number, value: number) {
    this.evaluationId = evaluationId
    this.matchId = matchId
    // this.organizerId = organizerId
    this.playerId = playerId
    this.value = value
  }
}

// MatchReport e MatchEvaluation estão conectadas pelas chaves (passar mesmos valores em: par2, par3)
const matchesEvaluations: MatchEvaluation[] = [
  // Avaliações da partida 1
  new MatchEvaluation(1, 1, 1, 6), new MatchEvaluation(2, 1, 2, 3), new MatchEvaluation(3, 1, 3, 4),
  new MatchEvaluation(4, 1, 4, 7), new MatchEvaluation(5, 1, 5, 7), new MatchEvaluation(6, 1, 6, 10),
  new MatchEvaluation(7, 1, 7, 6), new MatchEvaluation(8, 1, 8, 4), new MatchEvaluation(9, 1, 9, 8), 
  new MatchEvaluation(10, 1, 10, 7),
  
  // Avaliações da partida 2
  new MatchEvaluation(11, 2, 6, 5), new MatchEvaluation(12, 2, 8, 9), new MatchEvaluation(13, 2, 14, 8),
  new MatchEvaluation(14, 2, 1, 8), new MatchEvaluation(15, 2, 5, 7), new MatchEvaluation(16, 2, 10, 6),
  new MatchEvaluation(17, 2, 9, 6), new MatchEvaluation(18, 2, 4, 3), new MatchEvaluation(19, 2, 3, 6),
  new MatchEvaluation(20, 2, 12, 4), 

  // Avaliações da partida 3
  new MatchEvaluation(21, 3, 5, 5), new MatchEvaluation(22, 3, 2, 2), new MatchEvaluation(23, 3, 6, 3),
  new MatchEvaluation(24, 3, 4, 4), new MatchEvaluation(25, 3, 10, 7), new MatchEvaluation(26, 3, 15, 5),
  new MatchEvaluation(27, 3, 12, 9), new MatchEvaluation(28, 3, 9, 6), new MatchEvaluation(29, 3, 8, 4),
  new MatchEvaluation(30, 3, 7, 7), 

  // Avaliações da partida 4
  new MatchEvaluation(31, 4, 2, 8), new MatchEvaluation(32, 4, 4, 9), new MatchEvaluation(33, 4, 10, 5),
  new MatchEvaluation(34, 4, 11, 10), new MatchEvaluation(35, 4, 7, 4), new MatchEvaluation(36, 4, 6, 8),
  new MatchEvaluation(37, 4, 13, 8), new MatchEvaluation(38, 4, 3, 6), new MatchEvaluation(39, 4, 1, 10),
  new MatchEvaluation(40, 4, 9, 7)
]

export {
    matchesEvaluations, MatchEvaluation
}

/*
new MatchEvaluation(0, 2, 6), new MatchEvaluation(0, 2, 8), new MatchEvaluation(0, 2, 14),
new MatchEvaluation(0, 2, 1), new MatchEvaluation(0, 2, 5), new MatchEvaluation(0, 2, 10),
new MatchEvaluation(0, 2, 9), new MatchEvaluation(0, 2, 4), new MatchEvaluation(0, 2, 3),
new MatchEvaluation(0, 2, 12), 
*/