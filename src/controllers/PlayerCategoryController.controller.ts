

import type { Request, Response, NextFunction } from 'express'
import type { PlayerCategory } from '../models/player-category.js'
import { playerCategoryService } from '../services/PlayerCategoryService.service.js'
import { HTTPException } from '../exceptions/presentation/HTTPException.exception.js'

class PlayerCategoryController {
  
  findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const getAll: PlayerCategory[] = playerCategoryService.findAll()
      return res.status(200).json(getAll)
    } catch(error) {
      next(error)
    }
  }

  findByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { playerCat } = req.params
      if(!playerCat)
          throw new HTTPException("Categoria do jogador não foi fornecida!")
      const getPlayerCategory: PlayerCategory | undefined = playerCategoryService.findByCategory(parseInt(playerCat!))
      return res.status(200).json(getPlayerCategory)
    } catch(error) {
      next(error)
    }
  }

  findCategoryName(req: Request, res: Response, next: NextFunction) {
    try {
      const { playerCat } = req.params

      if(!playerCat)
        throw new HTTPException("Categoria do jogador não foi fornecida!")

      const playerCategoryName: string | undefined = playerCategoryService.findCategoryName(parseInt(playerCat!))
      return res.status(200).json(playerCategoryName)
    } catch(error) {
      next(error)
    }
  }

  findCategoryColor(req: Request, res: Response, next: NextFunction) {
    try {
      const { playerCat } = req.params

      if(!playerCat)
        throw new HTTPException("Categoria do jogador não foi fornecida!")

      const playerCategoryColor: string | undefined = playerCategoryService.findCategoryColor(parseInt(playerCat!))
      return res.status(200).json(playerCategoryColor)
    } catch(error) {
      next(error)
    }
  }

}

const playerCategoryController: PlayerCategoryController = new PlayerCategoryController()

export {
    playerCategoryController
}