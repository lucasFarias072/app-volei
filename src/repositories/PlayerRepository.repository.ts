

import type { MatchReport } from "../models/match-report.js"
import { players, type VoleyPlayer } from "../models/player.js"
import { matchReportService } from "../services/MatchReportService.service.js"

// Funções aqui não são assíncronas, por estarem apenas em memória
// O dado em memória é "players", que são dados "mock"

export class PlayerRepository {
  
  findAll(): VoleyPlayer[] {
    return players
  }

  findByUsername(username: string): VoleyPlayer | undefined {
    return players.find((player: VoleyPlayer) => player.username === username)
  }

  findAllKeys(): number[] {
    return this.findAll().map((player: VoleyPlayer) => player.playerId)
  }

  findAllUsernames(): string[] {
    return this.findAll().map((player: VoleyPlayer) => player.username)
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

  // Se [VoleyPlayer(4), VoleyPlayer(5), VoleyPlayer(1)] está em [1, 2, 3]
  findPlayerByMatch(matchId: number): VoleyPlayer[] {
    return this.findAll().filter((player: VoleyPlayer) => this.findByMatchKeys(matchId).includes(player.playerId))
  }

}

const playerRepository: PlayerRepository = new PlayerRepository()

export {
  playerRepository
}