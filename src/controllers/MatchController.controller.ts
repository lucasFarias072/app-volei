

import type { Request, Response, NextFunction } from "express"
import type { Match } from "../models/match.js";
import { matchService } from "../services/MatchService.service.js";

class MatchController {

  findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllMatches: Match[] = matchService.findAll()
      res.status(200).json(getAllMatches)
    } catch(error) {
      next(error)
    }
  }

}

const matchController: MatchController = new MatchController()

export {
    matchController
}
