

import type { MatchReport } from "../models/MatchReport.entity.js"
import type { VolleyPlayer } from "../models/Player.entity.js"
import { playerRepository } from "../repositories/Player.repository.js"
import { NotFoundException } from "../exceptions/application/NotFoundException.exception.js"

class PlayerService {
  findAll(): VolleyPlayer[] {
    const getAll: VolleyPlayer[] = playerRepository.findAll()
    if(getAll.length === 0)
      throw new NotFoundException("Não há jogadores cadastrados!")
    return getAll
  }

  findByUsername(username: string): VolleyPlayer | undefined {
      const playerWithThisUsername: VolleyPlayer | undefined = playerRepository.findByUsername(username)
      if(!playerWithThisUsername)
        throw new NotFoundException("Erro: Nome de usuário não encontrado entre os jogadores.")
      return playerWithThisUsername
  }

  mapByPlayerId(): number[] {
    const allPlayersIds: number[] = playerRepository.mapByPlayerId()

    if(allPlayersIds.length === 0)
      throw new NotFoundException("Erro: Não há jogadores cadastrados, não é possível obter suas chaves.")

    return allPlayersIds
  }

  mapByUsername(): string[] {
    const allPlayersUsernames: string[] = playerRepository.mapByUsername()
    if(allPlayersUsernames.length === 0)
      throw new NotFoundException("Erro: Não há jogadores cadastrados, não é possível obter seus nomes.")
    return allPlayersUsernames
  }

  findByMatch(matchId: number): MatchReport[] {
    const getAllPlayersFromThisMatch: MatchReport[] | undefined = playerRepository.findByMatch(matchId)
    if(!getAllPlayersFromThisMatch || getAllPlayersFromThisMatch.length === 0)
      throw new NotFoundException("Não há jogadores cadastrados na partida com esse ID")
    return getAllPlayersFromThisMatch
  }

  findByMatchKeys(matchId: number): number[] {
    const getAllPlayersKeysFromThisMatch: number[] = playerRepository.findByMatchKeys(matchId)
    if(getAllPlayersKeysFromThisMatch.length === 0)
      throw new NotFoundException("Não há jogadores cadastrados nessa partida, portanto não é possível obter seus IDs")
    return getAllPlayersKeysFromThisMatch
  }

  findPlayerByMatch(matchId: number): VolleyPlayer[] {
    const getAllPlayersFromThisMatch: VolleyPlayer[] = playerRepository.findPlayerByMatch(matchId)
    if(getAllPlayersFromThisMatch.length === 0)
      throw new NotFoundException("Não há jogadores vinculados com esta partida!")
    return getAllPlayersFromThisMatch
  }
}

const playerService: PlayerService = new PlayerService()

export {
    playerService
}