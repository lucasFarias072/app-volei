

import { matchCategories } from "../models/MatchCategory.entity.js"
import type { MatchCategory } from "../models/MatchCategory.entity.js"

class MatchCategoryRepository {

  findAll(): MatchCategory[] {
    return matchCategories
  }

}

const matchCategoryRepository: MatchCategoryRepository = new MatchCategoryRepository()

export {
  matchCategoryRepository
}
