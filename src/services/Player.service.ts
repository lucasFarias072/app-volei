

import type { MatchReport } from "../models/MatchReport.entity.js"
import type { VolleyPlayer } from "../models/Player.entity.js"
import { playerRepository } from "../repositories/Player.repository.js"
import { NotFoundException } from "../exceptions/application/NotFoundException.exception.js"

class PlayerService {
  findAll(): VolleyPlayer[] {
    const getAll: VolleyPlayer[] = playerRepository.findAll()
    if(getAll.length === 0)
      throw new NotFoundException("Erro: encontrar todos os jogadores retornou: vazio.")
    return getAll
  }

  findByUsername(username: string): VolleyPlayer | undefined {
      const playerWithThisUsername: VolleyPlayer | undefined = playerRepository.findByUsername(username)
      if(!playerWithThisUsername)
        throw new NotFoundException("Erro: encontrar jogador com esse nome retornou: vazio.")
      return playerWithThisUsername
  }

  mapByPlayerId(): number[] {
    const allPlayersIds: number[] = playerRepository.mapByPlayerId()
    if(allPlayersIds.length === 0)
      throw new NotFoundException("Erro: mapear chaves dos jogadores retornou: vazio.")
    return allPlayersIds
  }

  mapByUsername(): string[] {
    const allPlayersUsernames: string[] = playerRepository.mapByUsername()
    if(allPlayersUsernames.length === 0)
      throw new NotFoundException("Erro: mapear nomes dos jogadores retornou: vazio.")
    return allPlayersUsernames
  }

  findByMatchId(matchId: number): MatchReport[] {
    const allPlayersFromThisMatch: MatchReport[] = playerRepository.findByMatchId(matchId)
    if(allPlayersFromThisMatch.length === 0)
      throw new NotFoundException("Erro: encontrar jogadores nesse relatório de partida retornou: vazio.")
    return allPlayersFromThisMatch
  }

  findByMatchIdMapByPlayerId(matchId: number): number[] {
    const allPlayersKeysFromThisMatch: number[] = playerRepository.findByMatchIdMapByPlayerId(matchId)
    if(allPlayersKeysFromThisMatch.length === 0)
      throw new NotFoundException("Erro: encontrar chaves dos jogadores nessa partida retornou: vazio.")
    return allPlayersKeysFromThisMatch
  }

  findAllByMatch(matchId: number): VolleyPlayer[] {
    const allPlayersFromThisMatch: VolleyPlayer[] = playerRepository.findAllByMatch(matchId)
    if(allPlayersFromThisMatch.length === 0)
      throw new NotFoundException("Erro: encontrar jogadores nessa partida retornou: vazio.")
    return allPlayersFromThisMatch
  }
}

const playerService: PlayerService = new PlayerService()

export {
    playerService
}