

import type { MatchReport } from "../models/match-report.js"
import type { VoleyPlayer } from "../models/player.js"
import { playerRepository } from "../repositories/PlayerRepository.repository.js"
import { NotFoundException } from "../exceptions/application/NotFoundException.exception.js"

class PlayerService {
  findAll(): VoleyPlayer[] {
    const getAll: VoleyPlayer[] = playerRepository.findAll()
    if(getAll.length === 0)
      throw new NotFoundException("Não há jogadores cadastrados!")
    return getAll
  }

  findByUsername(username: string): VoleyPlayer | undefined {
      const getByUsername: VoleyPlayer | undefined = playerRepository.findByUsername(username)
      if(!getByUsername)
        throw new NotFoundException("Não há usuário com este nome!")
      return getByUsername
  }

  findAllKeys(): number[] {
    const getAllPlayersKeys: number[] = playerRepository.findAllKeys()

    if(getAllPlayersKeys.length === 0)
      throw new NotFoundException("Não é possível obter os IDs se não há jogadores cadastrados!")

    return getAllPlayersKeys
  }

  findAllUsernames(): string[] {
    const getAllPlayersUsernames: string[] = playerRepository.findAllUsernames()
    if(getAllPlayersUsernames.length === 0)
      throw new NotFoundException("Não é possível obter os nomes dos jogadores se não há jogadores cadastrados!")
    return getAllPlayersUsernames
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

  findPlayerByMatch(matchId: number): VoleyPlayer[] {
    const getAllPlayersFromThisMatch: VoleyPlayer[] = playerRepository.findPlayerByMatch(matchId)
    if(getAllPlayersFromThisMatch.length === 0)
      throw new NotFoundException("Não há jogadores vinculados com esta partida!")
    return getAllPlayersFromThisMatch
  }
}

const playerService: PlayerService = new PlayerService()

export {
    playerService
}