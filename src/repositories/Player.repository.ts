

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
  findByMatchId(matchId: number): MatchReport[] {
    const matchIdAsNumber = Number(matchId)
    const allPlayersFromThisMatch: MatchReport[] = matchReportService.findAll().filter(match => match.matchId === matchIdAsNumber)
    return allPlayersFromThisMatch
  }

  findByMatchIdMapByPlayerId(matchId: number): number[] {
    const allPlayersKeysFromThisMatch: number[] = this.findByMatchId(matchId).map((matchReport: MatchReport) => matchReport.playerId)
    return allPlayersKeysFromThisMatch
  }

  // Captura todas as chaves dos jogadores numa tal partida e filtra com todas as chaves de todos os jogadores
  findAllByMatch(matchId: number): VolleyPlayer[] {
    const allPlayersFromThisMatch: VolleyPlayer[] = this.findAll().filter((player: VolleyPlayer) => this.findByMatchIdMapByPlayerId(matchId).includes(player.playerId))
    return allPlayersFromThisMatch
  }

}

const playerRepository: PlayerRepository = new PlayerRepository()

export {
  playerRepository
}