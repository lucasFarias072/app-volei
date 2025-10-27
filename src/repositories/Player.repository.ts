

import type { MatchReport } from "../models/MatchReport.entity.js"
import { players, type VolleyPlayer } from "../models/Player.entity.js"
import { matchReportService } from "../services/MatchReport.service.js"

// Funções aqui não são assíncronas, por estarem apenas em memória
// O dado em memória é "players", que são dados "mock"

export class PlayerRepository {
  
  findAll(): VolleyPlayer[] {
    return players
  }

  findByUsername(username: string): VolleyPlayer | undefined {
    const playerWithThisUsername: VolleyPlayer | undefined = players.find((player: VolleyPlayer) => player.username === username)
    return playerWithThisUsername
  }

  mapByPlayerId(): number[] {
    const allPlayersIds: number[] = this.findAll().map((player: VolleyPlayer) => player.playerId)
    return allPlayersIds
  }

  mapByUsername(): string[] {
    const allPlayersUsernames: string[] = this.findAll().map((player: VolleyPlayer) => player.username)
    return allPlayersUsernames
  }
  
  // Existe algo muito estranho aqui
  // No nível do controlador, os dados são recebidos como string (sempre)
  // Desde o controlador, passando pelo serviço e chegando ao repositório, ele é convertido p/ número
  // Mas de alguma forma que eu não entendo, ele reverte para string quando chega ao repositório
  // Portanto, a conversão aqui é essencial, pra evitar esse loucura esquisita
  findByMatch(matchId: number): MatchReport[] | undefined {
    const matchIdAsNumber = Number(matchId)
    return matchReportService.findAll().filter(match => match.matchId === matchIdAsNumber)
  }

  findByMatchKeys(matchId: number): number[] {
    return this.findByMatch(matchId)!.map((matchReport: MatchReport) => matchReport.playerId)
  }

  // Se [VolleyPlayer(4), VolleyPlayer(5), VolleyPlayer(1)] está em [1, 2, 3]
  findPlayerByMatch(matchId: number): VolleyPlayer[] {
    return this.findAll().filter((player: VolleyPlayer) => this.findByMatchKeys(matchId).includes(player.playerId))
  }

}

const playerRepository: PlayerRepository = new PlayerRepository()

export {
  playerRepository
}