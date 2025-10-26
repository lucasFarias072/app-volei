

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
  new MatchEvaluation(11, 2, 11, 9),

  // Avaliações da partida 3
  new MatchEvaluation(21, 3, 2, 5)
]

export {
    matchesEvaluations, MatchEvaluation
}
