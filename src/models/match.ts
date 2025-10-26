

import { matchDescriptions } from "./match-situations.js"

export class Match {
    // data, hora, situacao, localFK, categoriaPFK, organizadorFK
    matchId: number
    siteId: number
    matchCategoryId: number
    organizerId: number
    situationId: number
    date: string
    hour: string
    situations: string[]
    
    constructor(
      matchId: number, siteId: number, matchCategoryId: number, organizerId: number, situationId: number,
      date: string, hour: string,  
    )
    {
      this.matchId = matchId
      this.siteId = siteId
      this.matchCategoryId = matchCategoryId
      this.organizerId = organizerId
      this.situationId = situationId
      this.date = date
      this.hour = hour
      this.situations = matchDescriptions.map(matchDesc => matchDesc.description)
    }
}

const matches: Match[] = [
  new Match(1, 3, 2, 2, 4, '2025-09-20', '18:00'),
  new Match(2, 7, 1, 5, 4, '2025-09-21', '16:00'),
  new Match(3, 2, 2, 7, 1, '2026-04-01', '17:00'),
  new Match(4, 4, 2, 3, 1, '2026-04-02', '18:00'),
]

export {
  matches
}