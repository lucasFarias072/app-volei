

import type { Request, Response } from 'express'
import type { VolleyPlayer } from '../models/Player.entity.js'
import { playerService } from '../services/Player.service.js'
import path from 'path'

class UserIndexRouteController {

    login(req: Request, res: Response) {
      const { username, password } = req.body
        
      const player: VolleyPlayer | undefined = playerService.findByUsername(username)
      const isPasswordValid = password === player?.getPassword
    
      if(player && isPasswordValid) 
        return res.sendFile(path.resolve("./public/templates/user-index.html"))
    
      return res.sendFile(path.resolve("./public/templates/login-error.html"))
    }

    goToIndex(req: Request, res: Response) {
      return res.sendFile(path.resolve("./public/templates/user-index.html"))
    }

}

const userIndexRouteController: UserIndexRouteController = new UserIndexRouteController()

export {
    userIndexRouteController
}