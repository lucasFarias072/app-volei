

import type { NextFunction, Request, Response } from "express"

function validateMatchId(req: Request, res: Response, next: NextFunction) {
    const { matchId } = req.params
    
    if(!matchId) {
      res.status(404).json({msg: "Id da partida precisa ser informado!"}) 
    }
    
    next()
}

export {
  validateMatchId
}