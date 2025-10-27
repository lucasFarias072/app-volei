

export class MatchCategory {
    matchCategoryId: number
    description: string

    constructor(matchCategoryId: number, description: string) {
      this.matchCategoryId = matchCategoryId
      this.description = description
    }
}

const matchCategories: MatchCategory[] = [
    new MatchCategory(1, "não mista"),
    new MatchCategory(2, "mista"),
]

export {
    matchCategories
}