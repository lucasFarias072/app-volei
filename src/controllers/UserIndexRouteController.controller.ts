

import type { Request, Response } from 'express'
import { playerService } from '../services/PlayerService.service.js'
import path from 'path'
import type { VoleyPlayer } from '../models/player.js'

class UserIndexRouteController {

    login(req: Request, res: Response) {
      const { username, password } = req.body
        
      const player: VoleyPlayer | undefined = playerService.findByUsername(username)
      const isPasswordValid = password === player?.getPassword
    
      if(player && isPasswordValid) 
        return res.sendFile(path.resolve("./public/templates/user-index.html"))
    
      return res.sendFile(path.resolve("./public/templates/login-error.html"))
    }

}

const userIndexRouteController: UserIndexRouteController = new UserIndexRouteController()

export {
    userIndexRouteController
}