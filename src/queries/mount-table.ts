

import { isMatchOver } from "../../src/utils/functions.js"

import { playerService } from "../services/Player.service.js"
import { playerCategoryService } from "../services/PlayerCategory.service.js"
import { siteService } from "../services/Site.service.js"
import { matchSituationService } from "../services/MatchSituation.service.js"
import { matchCategoryService } from "../services/MatchCategory.service.js"
import { matchService } from "../services/Match.service.js"

function mountGetAllPlayers(where: HTMLElement | null) {
  try {

    const getAllPlayersCategory = playerCategoryService.findAll()
    const getAllPlayers = playerService.findAll()
    
    let template = ''
    getAllPlayers.forEach(player => {
      const playerCategory = getAllPlayersCategory.filter(cat => cat.categoryId === player.playerCat)
      template += `
        <div class="player-style flex column going-left">
          <p class="player-name">${player.username}</p>
          <span class="player-category" style="background: ${playerCategory.map(cat => cat.color)}">${playerCategory.map(cat => cat.description)}</span>
        </div>
      `
    })

    if(where) where.innerHTML = template
  
  } catch(err) {
      console.log(`Erro na função getAllPlayers: ${err}`)
      throw err
  }
}

function mountGetAllMatches(where: HTMLElement | null): void {
  try {

    // Get keys from "Match"
    const getAllMatches = matchService.findAll()

    // Get keys from "MatchCategory"
    const getAllMatchCategories = matchCategoryService.findAll()

    // Get keys from "MatchSituation"
    const getAllMatchSituations = matchSituationService.findAll()
    
    // Get keys from "Site"
    const getAllSites = siteService.findAll()
    
    // Get keys from "VolleyPlayer"
    const getAllPlayers = playerService.findAll()
    
    let template = ''

    getAllMatches.forEach(match => {
      const matchId = match.matchId
      const matchSiteThisMatch = getAllSites.filter(site => site.siteId === match.siteId)
      const matchSituationThisMatch = getAllMatchSituations.filter(matchSit => matchSit.matchSituationId === match.situationId)
      const matchCategoriesThisMatch = getAllMatchCategories.filter(matchCat => matchCat.matchCategoryId === match.matchCategoryId)
      const matchOrganizerThisMatch = getAllPlayers.filter(player => player.playerId === match.organizerId)

      const isMatchOverAssertion = isMatchOver(match.date) || matchSituationThisMatch[0]?.description === "encerrada" ? "match-over-style" : "match-style"
      const brazilDate = match.date.split("-")
      const brazilianDate = brazilDate.map(md => `${brazilDate[2]}/${brazilDate[1]}/${brazilDate[0]}`)
      
      template += `
        <div class="${isMatchOverAssertion} flex column going-left">
          
          <div class="flex row going-left big-gap">
            
            <div class="flex column going-left gap">
              <span class="match-site">${matchSiteThisMatch.map(site => site.description)}</span>
              <p class="match-category">partida ${matchCategoriesThisMatch.map(matchCat => matchCat.description)}</p>
            </div>

            <div class="flex column going-right date-hour-sit">
              <p class="match-date">${brazilianDate[0]}</p>
              <p class="match-hour">${match.hour}</p>
              <p class="match-situation">${matchSituationThisMatch.map(matchSit => matchSit.description)}</p>
            </div>

          </div>
          
          <div class="flex row going-left gap">
            <span class="organizer">organizador</span>
            <span class="match-organizer">${matchOrganizerThisMatch.map(matchOrg => matchOrg.username)}</span>
          </div>
          
          <a href="/api/players/match/${matchId}" class="see-players" data-matchid=${matchId}>ver participantes</a>
          
        </div>
      `
    })

    if(where) where.innerHTML = template

  } catch(err) {
    console.log(`Erro interno no servidor: ${err}`)
    throw err
  }
}

export {
    mountGetAllPlayers, mountGetAllMatches
}