

import type { Request, Response, NextFunction } from 'express'
import type { VolleyPlayer } from '../models/Player.entity.js'
import type { MatchReport } from '../models/MatchReport.entity.js'
import { playerService } from '../services/Player.service.js'
import { HTTPException } from '../exceptions/presentation/HTTPException.exception.js'

class PlayerController {
  /*
    >> "req" não está sendo usado, pois os dados de serviços que não precisam de parâmetro, puxam direto do ORM
    >> Como ainda não há ORM configurado, ele fica sem uso, por enquanto
    >> Se não têm parâmetro pra consulta,  então também não há tratamento de erros de apresentação (HTTP/REST)
  */
  findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllPlayers: VolleyPlayer[] = playerService.findAll()
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
      const getByUsername: VolleyPlayer | undefined = playerService.findByUsername(username)
      return res.status(201).json(getByUsername)
    } catch(error) {
      next(error)
    }
  }

  mapByPlayerId(req: Request, res: Response, next: NextFunction) {
    try {
      const allPlayersIds: number[] = playerService.mapByPlayerId()
      return res.status(200).json(allPlayersIds)
    } catch(error) {
      next(error)
    }
  }

  mapByUsername(req: Request, res: Response, next: NextFunction) {
    try {
      const allPlayersUsernames: string[] = playerService.mapByUsername()
      return res.status(200).json(allPlayersUsernames)
    } catch(error) {
      next(error)
    }
  }

  findByMatchId(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params
      if(!matchId)
        throw new HTTPException("Número da partida não foi fornecido!")
      const allPlayersFromThisMatch: MatchReport[] = playerService.findByMatchId(parseInt(matchId!))
      return res.status(200).json(allPlayersFromThisMatch)
    } catch(error) {
      next(error)
    }
  }

  findByMatchIdMapByPlayerId(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params

      if(!matchId || matchId.trim() === '')
        throw new HTTPException("Número da partida não foi fornecido!")

      const allPlayersKeysFromThisMatch: number[] = playerService.findByMatchIdMapByPlayerId(parseInt(matchId!))
      return res.status(200).json(allPlayersKeysFromThisMatch)
    } catch(error) {
      next(error)
    }
  }

  findAllByMatch(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params

      if(!matchId || matchId.trim() === '')
        throw new HTTPException("Número da partida não foi fornecido!")

      const allPlayersFromThisMatch: VolleyPlayer[] = playerService.findAllByMatch(parseInt(matchId!))
      return res.status(200).json(allPlayersFromThisMatch)
    } catch(error) {
      next(error)
    }
  }

}

const playerController: PlayerController = new PlayerController()

export { playerController }
