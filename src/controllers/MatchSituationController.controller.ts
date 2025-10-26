

import type { Request, Response, NextFunction } from "express"
import type { MatchSituation } from "../models/match-situations.js"
import { matchSituationService } from "../services/MatchSituationService.service.js"

class MatchSituationController {

  findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllMatchesSituation: MatchSituation[] = matchSituationService.findAll()
      return res.status(200).json(getAllMatchesSituation)
    } catch(error) {
      next(error)
    }
  }

}

const matchSituationController: MatchSituationController = new MatchSituationController()

export {
    matchSituationController
}
