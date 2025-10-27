

import type { Request, Response, NextFunction } from "express"
import type { MatchSituation } from "../models/MatchSituations.entity.js"
import { matchSituationService } from "../services/MatchSituation.service.js"

class MatchSituationController {

  findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllMatchesSituation: MatchSituation[] = matchSituationService.findAll()
      return res.status(200).json(getAllMatchesSituation)
    } catch(error) {
      next(error)
    }
  }

  findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params
      const matchSituationFromThisMatch: undefined | MatchSituation = matchSituationService.findById(Number(matchId))
      return res.status(200).json(matchSituationFromThisMatch)
    } catch(error) {
      next(error)
    }
  }

  mapBySituation(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params
      const matchSituation: undefined | string = matchSituationService.mapBySituation(Number(matchId))
      return res.status(200).json(matchSituation)
    } catch(error) {
      next(error)
    }
  }

}

const matchSituationController: MatchSituationController = new MatchSituationController()

export {
    matchSituationController
}
