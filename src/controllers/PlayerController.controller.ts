

import type { Request, Response, NextFunction } from 'express'
import type { VoleyPlayer } from '../models/player.js'
import type { MatchReport } from '../models/match-report.js'
import { playerService } from '../services/PlayerService.service.js'
import { HTTPException } from '../exceptions/presentation/HTTPException.exception.js'

class PlayerController {
    
  // "req" não está sendo usado, pois os dados de serviços que não precisam de parâmetro, puxam direto do ORM
  // Como ainda não há ORM configurado, ele fica sem uso, por enquanto
  // Se não têm parâmetro pra consulta,  então também não há tratamento de erros de apresentação (HTTP/REST)
  findAll(res: Response, next: NextFunction) {
    try {
      const getAllPlayers: VoleyPlayer[] = playerService.findAll()
      return res.status(200).json(getAllPlayers)
    } catch(error) {
      next(error)
    }
  }

  findByUsername(req: Request, res: Response, next: NextFunction) {
    try {
      const { username } = req.params
      if(!username || username.trim() === '') 
        throw new HTTPException("Nome do jogador não foi fornecido!")
      const getByUsername: VoleyPlayer | undefined = playerService.findByUsername(username)
      return res.status(201).json(getByUsername)
    } catch(error) {
      next(error)
    }
  }

  findAllKeys(res: Response, next: NextFunction) {
    try {
      const getAllPlayersKeys: number[] = playerService.findAllKeys()
      return res.status(200).json(getAllPlayersKeys)
    } catch(error) {
      next(error)
    }
  }

  findAllUsernames(res: Response, next: NextFunction) {
    try {
      const getAllPlayersUsernames: string[] = playerService.findAllUsernames()
      return res.status(200).json(getAllPlayersUsernames)
    } catch(error) {
      next(error)
    }
  }

  findByMatch(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params
      if(!matchId)
        throw new HTTPException("Número da partida não foi fornecido!")
      const getAllPlayersFromThisMatch: MatchReport[] = playerService.findByMatch(parseInt(matchId!))
      return res.status(200).json(getAllPlayersFromThisMatch)
    } catch(error) {
      next(error)
    }
  }

  findByMatchKeys(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params

      if(!matchId || matchId.trim() === '')
        throw new HTTPException("Número da partida não foi fornecido!")

      const getAllPlayersKeysFromThisMatch: number[] = playerService.findByMatchKeys(parseInt(matchId!))
      return res.status(200).json(getAllPlayersKeysFromThisMatch)
    } catch(error) {
      next(error)
    }
  }

  findPlayerByMatch(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params

      if(!matchId || matchId.trim() === '')
        throw new HTTPException("Número da partida não foi fornecido!")

      const getAllPlayersFromThisMatch: VoleyPlayer[] = playerService.findPlayerByMatch(parseInt(matchId!))
      return res.status(200).json(getAllPlayersFromThisMatch)
    } catch(error) {
      next(error)
    }
  }

}

const playerController: PlayerController = new PlayerController()

export { playerController }
