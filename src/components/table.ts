

import type { VoleyPlayer } from "../models/player.js"
import { setPerformance } from "../utils/functions.js"

import { matchEvaluationService } from "../services/MatchEvaluationService.service.js"
import { playerCategoryService } from "../services/PlayerCategoryService.service.js"

import { PlayerCategoryService } from "../services/PlayerCategoryService.service.js"
import { MatchEvaluationService } from "../services/MatchEvaluationService.service.js"

export interface ServicesGroup {
  playerCategoryService: PlayerCategoryService,
  matchEvaluationService: MatchEvaluationService
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
      <a href="/" class="return-index">voltar</a>
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
          <th>Desempenho</th>
        </tr>
      </thead>
      <tbody>
    `
  }

  createTail() {
    return "</tbody></table>"
  }

  mount(players: VoleyPlayer[], matchId: number) {

    const services: ServicesGroup = {
      playerCategoryService: playerCategoryService,
      matchEvaluationService: matchEvaluationService
    }

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

      this.body += this.createRow(tableRow)
      // const playerCategory = playersCategories.filter(cat => cat.categoryId === player.playerCat)
      // const playerCategoryName = playerCategory.map(cat => cat.description)
      // const playerCategoryColor = playerCategory.map(cat => cat.color)
      // const playerEvaluation = playersEvaluation.filter(eva => eva.playerId === player.playerId && eva.matchId === parseInt(matchId)).map(eva => eva.value)
      
    })
    this.body += this.createTail()
    this.table += this.body
  }

  createRow(playerData: PlayerTableRow) {
    return `
    <tr>
      <td class="player-style-simple">${playerData.username}</td>
      <td class="player-category" style="background: ${playerData.catColor}">${playerData.catName}</td>
      <td class="player-performance" style="background: ${setPerformance(playerData.evaluation)}">nota ${playerData.evaluation}</td>
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

  mount(players: VoleyPlayer[], matchId: string) {
    this.tableComponent.body += this.introductionComponent.mount(parseInt(matchId)) 
    this.tableComponent.mount(players, parseInt(matchId))
    return this.tableComponent.table
  }

}