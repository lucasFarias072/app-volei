

import type { Request, Response, NextFunction } from "express"
import type { Match } from "../models/Match.entity.js";
import { matchService } from "../services/Match.service.js";

class MatchController {

  findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllMatches: Match[] = matchService.findAll()
      res.status(200).json(getAllMatches)
    } catch(error) {
      next(error)
    }
  }

  findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params
      const getMatchWithThidId: Match | undefined = matchService.findById(Number(matchId))
      return res.status(200).json(getMatchWithThidId)
    } catch(error) {
      next(error)
    }
  }

  findByIdMapBySituationId(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params
      const thisMatchSituationId: undefined | number = matchService.findByIdMapBySituationId(Number(matchId))
      return res.status(200).json(thisMatchSituationId)
    } catch(error) {
      next(error)
    }
  }

}

const matchController: MatchController = new MatchController()

export {
    matchController
}
