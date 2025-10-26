

import type { Request, Response, NextFunction } from "express"
import type { MatchReport } from "../models/match-report.js"
import { matchReportService } from "../services/MatchReportService.service.js"
import { HTTPException } from "../exceptions/presentation/HTTPException.exception.js"

class MatchReportController {

  findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllMatchesReport: MatchReport[] = matchReportService.findAll()
      return res.status(200).json(getAllMatchesReport)
    } catch(error) {
      next(error)
    }
  }

  findByMatchReportId(req: Request, res: Response, next: NextFunction) {
    try {
      const { matchId } = req.params
      if(!matchId) throw new HTTPException("Número da partida não foi fornecido!")
      // matchId! = confio que o middleware validou
      const getAllPlayersFromThisMatch: MatchReport[] = matchReportService.findByMatchReportId(parseInt(matchId!))
      return res.status(200).json(getAllPlayersFromThisMatch)
    } catch(error) {
      next(error)
    }
  }

}

const matchReportController: MatchReportController = new MatchReportController()

export {
    matchReportController
}