

import type { Request, Response } from 'express'
import type { VolleyPlayer } from '../models/Player.entity.js'
import { playerService } from '../services/Player.service.js'
import path from 'path'

class UserIndexRouteController {
    /**
     * @swagger
     * /user-panel:
     *   post:
     *     summary: Realiza login do usuário
     *     tags:
     *       - Autenticação
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - username
     *               - password
     *             properties:
     *               username:
     *                 type: string
     *                 example: "Antônio"
     *               password:
     *                 type: string
     *                 format: password
     *                 example: "@aA1001011!#"
     *         application/x-www-form-urlencoded:
     *           schema:
     *             type: object
     *             required:
     *               - username
     *               - password
     *             properties:
     *               username:
     *                 type: string
     *               password:
     *                 type: string
     *                 format: password
     *     responses:
     *       200:
     *         description: Login bem-sucedido, retorna página HTML do usuário
     *         content:
     *           text/html:
     *             schema:
     *               type: string
     *               example: "<html><div>Cada jogador</div><div>Cada arenas & cada relatório de partida</div></html>"
     *       401:
     *         description: Credenciais inválidas, retorna página de erro
     *         content:
     *           text/html:
     *             schema:
     *               type: string
     *               example: "<html><body><li>usuário, senha (incorretos)</li><li>usuário, senha (não encontrados)</li></body></html>"
     */
    login(req: Request, res: Response) {
      const { username, password } = req.body
        
      const player: VolleyPlayer | undefined = playerService.findByUsername(username)
      const isPasswordValid = password === player?.getPassword
    
      if(player && isPasswordValid) 
        return res.sendFile(path.resolve("./public/templates/user-index.html"))
    
      return res.status(401).sendFile(path.resolve("./public/templates/login-error.html"))
    }

    goToIndex(req: Request, res: Response) {
      return res.sendFile(path.resolve("./public/templates/user-index.html"))
    }

}

const userIndexRouteController: UserIndexRouteController = new UserIndexRouteController()

export {
    userIndexRouteController
}