

import type { VolleyPlayer } from "../models/Player.entity.js"
import { setPerformance } from "../utils/functions.js"

import { matchEvaluationService } from "../services/MatchEvaluation.service.js"
import { playerCategoryService } from "../services/PlayerCategory.service.js"

import { PlayerCategoryService } from "../services/PlayerCategory.service.js"
import { MatchEvaluationService } from "../services/MatchEvaluation.service.js"

import { matchService } from "../services/Match.service.js"  
import { MatchService } from "../services/Match.service.js"
import { matchSituationService } from "../services/MatchSituation.service.js"
import { MatchSituationService } from "../services/MatchSituation.service.js"

export interface ServicesGroup {
  playerCategoryService: PlayerCategoryService,
  matchEvaluationService: MatchEvaluationService,
  matchService: MatchService  
  matchSituationService: MatchSituationService
}

export interface PlayerTableRow {
  username: string, catColor: string, catName: string, evaluation: number
}

export class IntroductionComponent {
  div: string

  constructor() {
    this.div = ``
  }

  mount(matchId: number): string {
    this.div += `
    <div class="flex row going-center gap">
      <a href="/user-panel" class="return-index">voltar</a>
      <h2 class="match-players-title">Jogadores da partida ${matchId}</h2>
    </div>
    `
    return this.div
  }

}

export class TableComponent {
  table: string
  body: string
  
  constructor() {
    this.table = this.createHead()
    this.body = ``
  }

  createHead() {
    return `
    <table class="mt">
      <thead>
        <tr>
          <th>Jogador</th>
          <th>Categoria</th>
          <th>Avaliação na partida</th>
        </tr>
      </thead>
      <tbody>
    `
  }

  createTail() {
    return "</tbody></table>"
  }

  mount(players: VolleyPlayer[], matchId: number) {

    const services: ServicesGroup = {
      playerCategoryService: playerCategoryService,
      matchEvaluationService: matchEvaluationService,
      matchService: matchService,
      matchSituationService: matchSituationService  
    }
    
    // Situação da partida clicada (passar pro frontend não deixar avaliar jogadores em partidas não encerradas)
    const matchIdForThisTag = services.matchService.findByIdMapBySituationId(matchId)
    const matchSituation = services.matchSituationService.mapBySituation(matchIdForThisTag!)

    players.forEach(player => {
      const playerCategory = services.playerCategoryService.findByCategory(player.playerCat)
      const playerCategoryName = playerCategory.description
      const playerCategoryColor = playerCategory.color
      const playerEvaluation = services.matchEvaluationService.findPlayerEvaluationValue(player.playerId, matchId)
      
      const tableRow: PlayerTableRow = {
        username: player.username,
        catColor: playerCategoryColor,
        catName: playerCategoryName,
        evaluation: playerEvaluation ?? 0
      }

      this.body += this.createRow(tableRow, matchSituation!)
      // const playerCategory = playersCategories.filter(cat => cat.categoryId === player.playerCat)
      // const playerCategoryName = playerCategory.map(cat => cat.description)
      // const playerCategoryColor = playerCategory.map(cat => cat.color)
      // const playerEvaluation = playersEvaluation.filter(eva => eva.playerId === player.playerId && eva.matchId === parseInt(matchId)).map(eva => eva.value)
      
    })
    this.body += this.createTail()
    this.table += this.body
  }

  createRow(playerData: PlayerTableRow, matchSituation: string) {
    const playerEvaluation = matchSituation === "encerrada" ? `nota ${playerData.evaluation}` : "a definir"
    const playerEvaluationBackground = matchSituation === "encerrada" ? setPerformance(playerData.evaluation) : "rgba(255, 255, 255, .5)"
    
    return `
    <tr>
      <td class="player-style-simple">${playerData.username}</td>
      <td class="player-category" style="background: ${playerData.catColor}">${playerData.catName}</td>
      <td class="player-performance" style="background: ${playerEvaluationBackground}">${playerEvaluation}</td>
    <tr>
    `
  }

}

export class TemplateModelForMatch {

  introductionComponent: IntroductionComponent
  tableComponent: TableComponent

  constructor() {
    this.introductionComponent = new IntroductionComponent()
    this.tableComponent = new TableComponent()
  }

  mount(players: VolleyPlayer[], matchId: string) {
    this.tableComponent.body += this.introductionComponent.mount(parseInt(matchId)) 
    this.tableComponent.mount(players, parseInt(matchId))
    return this.tableComponent.table
  }

}