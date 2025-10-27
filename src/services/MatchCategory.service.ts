

import type { MatchCategory } from "../models/MatchCategory.entity.js";
import { matchCategoryRepository } from "../repositories/MatchCategory.repository.js"
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