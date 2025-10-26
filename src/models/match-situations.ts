

export class MatchSituation {
    matchSituationId: number
    description: string

    constructor(matchSituationId: number, description: string) {
      this.matchSituationId = matchSituationId,
      this.description = description
    }
}

const matchDescriptions: MatchSituation[] = [
    new MatchSituation(1, "em adesão"),
    new MatchSituation(2, "iniciada"),
    new MatchSituation(3, "parada"),
    new MatchSituation(4, "encerrada"),
]

export {
    matchDescriptions
}