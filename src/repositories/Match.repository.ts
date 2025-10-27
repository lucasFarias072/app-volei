

import type { Match } from "../models/Match.entity.js"
import { matches } from "../models/Match.entity.js"
// import type { PlayerCategory } from "../models/player-category.js"

/* interface MatchData {
  playerCategory: PlayerCategory
} */

class MatchRepository {

  findAll(): Match[] {
    return matches
  }

  findById(matchId: number): undefined | Match {
    return this.findAll().find((match: Match) => match.matchId === matchId)
  }

  findByIdMapBySituationId(matchId: number): undefined | number {
    return this.findById(matchId)?.situationId
  }

}

const matchRepository: MatchRepository = new MatchRepository()

export {
    matchRepository
}
