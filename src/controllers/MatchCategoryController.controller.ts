

import type { Request, Response, NextFunction } from 'express'
import type { MatchCategory } from '../models/match-category.js'
import { matchCategoryService } from '../services/MatchCategoryService.service.js'

class MatchCategoryController {

  findAll(req: Request, res: Response, next: NextFunction) {
    try {
      // "req" ainda não usado, pois os dados estão locais
      const getAllMatchesCategory: MatchCategory[] = matchCategoryService.findAll()
      return res.status(200).json(getAllMatchesCategory)
    } catch(error) {
      next(error)
    }
  }

}

const matchCategoryController: MatchCategoryController = new MatchCategoryController()

export {
    matchCategoryController
}