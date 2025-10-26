

import type { MatchCategory } from "../models/match-category.js";
import { matchCategoryRepository } from "../repositories/MatchCategoryRepository.repository.js"
import { NotFoundException } from "../exceptions/application/NotFoundException.exception.js"

class MatchCategoryService {

  findAll(): MatchCategory[] {
    const getAllMatchesCategory = matchCategoryRepository.findAll()
    if(!getAllMatchesCategory || getAllMatchesCategory.length === 0)
      // throw new Error("Não há categorias de partidas cadastradas!")
      throw new NotFoundException("Não há categorias de partidas cadastradas!")
    return getAllMatchesCategory
  }

}

const matchCategoryService: MatchCategoryService = new MatchCategoryService()

export {
    matchCategoryService
}