

import { matchCategories } from "../models/match-category.js"
import type { MatchCategory } from "../models/match-category.js"

class MatchCategoryRepository {

  findAll(): MatchCategory[] {
    return matchCategories
  }

}

const matchCategoryRepository: MatchCategoryRepository = new MatchCategoryRepository()

export {
  matchCategoryRepository
}
