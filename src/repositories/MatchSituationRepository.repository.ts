

import type { MatchSituation } from "../models/match-situations.js"
import { matchDescriptions } from "../models/match-situations.js"

class MatchSituationRepository {

  findAll(): MatchSituation[] {
    return matchDescriptions
  }

}

const matchSituationRepository: MatchSituationRepository = new MatchSituationRepository()

export {
    matchSituationRepository
}