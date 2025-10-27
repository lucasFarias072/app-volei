

import { PlayerCategory, playersCategory } from "../models/PlayerCategory.entity.js"

class PlayerCategoryRepository {
    
  findAll(): PlayerCategory[] {
    return playersCategory
  }

  findByCategory(playerCat: number): PlayerCategory | undefined {
    return this.findAll().find((cat: PlayerCategory) => cat.categoryId === playerCat)
  }

  findCategoryName(playerCat: number): string | undefined {
    const getPlayerCategory = this.findByCategory(playerCat)
    return getPlayerCategory?.description
  }

  findCategoryColor(playerCat: number): string | undefined {
    const getPlayerCategory = this.findByCategory(playerCat)
    return getPlayerCategory?.color
  }

}

const playerCategoryRepository: PlayerCategoryRepository = new PlayerCategoryRepository()

export {
    playerCategoryRepository
}