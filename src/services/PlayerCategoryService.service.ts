

import type { PlayerCategory } from "../models/player-category.js"
import { playerCategoryRepository } from "../repositories/PlayerCategoryRepository.repository.js"
import { NotFoundException } from "../exceptions/application/NotFoundException.exception.js"


export class PlayerCategoryService {
    findAll(): PlayerCategory[] {
      const getByCategory: PlayerCategory[] = playerCategoryRepository.findAll()
      if(!getByCategory || getByCategory.length === 0)
      throw new NotFoundException("Não há categorias de jogadores cadastradas!")
      return getByCategory
    }

    findByCategory(playerCat: number): PlayerCategory {
      const getPlayerCategory: PlayerCategory | undefined = playerCategoryRepository.findByCategory(playerCat)
      if(!getPlayerCategory)
      throw new NotFoundException("Não há jogador cadastrado com essa categoria!")
      return getPlayerCategory
    }

    findCategoryName(playerCat: number): string | undefined {
      const playerCategoryName: string | undefined = playerCategoryRepository.findCategoryName(playerCat)
      if(!playerCategoryName)
        throw new NotFoundException("Não há categoria para esse jogador!")
      return playerCategoryName
    }

    findCategoryColor(playerCat: number): string | undefined {
      const playerCategoryColor: string | undefined = playerCategoryRepository.findCategoryColor(playerCat)
      if(!playerCategoryColor)
        throw new NotFoundException("Não há cor de categoria para esse jogador!")
      return playerCategoryColor
    }

}

const playerCategoryService: PlayerCategoryService = new PlayerCategoryService()

export {
    playerCategoryService
}