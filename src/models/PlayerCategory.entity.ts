

export class PlayerCategory {
    categoryId: number
    description: string
    color: string

    constructor(categoryId: number, description: string, color: string) {
      this.categoryId = categoryId
      this.description = description
      this.color = color
    }
}

const playersCategory: PlayerCategory[] = [
  new PlayerCategory(1, "iniciante", "white"),
  new PlayerCategory(2, "intermediário", "#ff9"),
  new PlayerCategory(3, "avançado", "#ff2"),
  new PlayerCategory(4, "pseudopro", "orangered"),
  new PlayerCategory(5, "pro", "crimson"),
] 

/* module.exports = {
    categoriasJogador: categoriasJogador
} */

export {
  playersCategory
}