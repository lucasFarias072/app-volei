

import type { MatchSituation } from "../models/MatchSituations.entity.js"
import { matchDescriptions } from "../models/MatchSituations.entity.js"

class MatchSituationRepository {

  findAll(): MatchSituation[] {
    return matchDescriptions
  }

  findById(matchId: number): undefined | MatchSituation {
    const matchSituationFromThisMatch: undefined | MatchSituation = this.findAll().find((matchSit: MatchSituation) => matchSit.matchSituationId === matchId)
    return matchSituationFromThisMatch
  }

  mapBySituation(matchId: number): undefined | string {
    const matchSituation = this.findById(matchId)?.description
    return matchSituation
  }

}

const matchSituationRepository: MatchSituationRepository = new MatchSituationRepository()

export {
    matchSituationRepository
}