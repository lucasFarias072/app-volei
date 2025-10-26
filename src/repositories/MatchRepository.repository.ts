

import type { Match } from "../models/match.js"
import { matches } from "../models/match.js"
// import type { PlayerCategory } from "../models/player-category.js"

/* interface MatchData {
  playerCategory: PlayerCategory
} */

class MatchRepository {

  findAll(): Match[] {
    return matches
  }

}

const matchRepository: MatchRepository = new MatchRepository()

export {
    matchRepository
}
