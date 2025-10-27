

import type { Request, Response, NextFunction } from "express"
import type { MatchEvaluation } from "../models/MatchEvaluation.entity.js"
import { matchEvaluationService } from "../services/MatchEvaluation.service.js"
import { HTTPException } from "../exceptions/presentation/HTTPException.exception.js"

class MatchEvaluationController {
  
  findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllMatchesEvalution: MatchEvaluation[] = matchEvaluationService.findAll()
      return res.status(200).json(getAllMatchesEvalution)
    } catch(error) {
      next(error)
    }
  }

  findPlayerEvaluation(req: Request, res: Response, next: NextFunction) {
    try {
      const { playerId, matchId } = req.params 

      if(!playerId) throw new HTTPException("Id do jogador não foi fornecido!")
      if(!matchId) throw new HTTPException("Id da partida não foi fornecido!")

      const getPlayerEvaluation: MatchEvaluation | undefined = matchEvaluationService.findPlayerEvaluation(
        parseInt(playerId!), parseInt(matchId!)
      )
      return res.status(200).json(getPlayerEvaluation)
    } catch(error) {
      next(error)
    }
  }

  findPlayerEvaluationValue(req: Request, res: Response, next: NextFunction) {
    try {
      const { playerId, matchId } = req.params 

      if(!playerId) throw new HTTPException("Id do jogador não foi fornecido!")
      if(!matchId) throw new HTTPException("Id da partida não foi fornecido!")

      const getPlayerEvaluationValue: number | undefined = matchEvaluationService.findPlayerEvaluationValue(
        parseInt(playerId!), parseInt(matchId!)
      )
      return res.status(200).json(getPlayerEvaluationValue)
    } catch(error) {
      next(error)
    }
  }

}

const matchEvaluationController: MatchEvaluationController = new MatchEvaluationController()

export {
  matchEvaluationController
}