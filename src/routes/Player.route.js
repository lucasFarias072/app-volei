

import express from "express"
import fs from "fs/promises"
import path from 'path'

import { playerController } from "../../dist/src/controllers/Player.controller.js"
import { playerService } from "../../dist/src/services/Player.service.js"
import { TemplateModelForMatch } from "../../dist/src/components/table.js"

const playerRoutes = express.Router()

/**
 * @swagger
 * /api/players:
 *   get:
 *     summary: Retorna todas as instâncias de jogador
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: Todas as instâncias de jogador - VolleyPlayer[]
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/VolleyPlayer'
 *       404:
 *         description: Erro de domínio de serviço da entidade VolleyPlayer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: NotFoundException
 *               message: Encontrar todos os jogadores retornou vazio
 *       500:
 *         description: Erro genérico não tratado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
playerRoutes.get('/', playerController.findAll) 

/**
 * @swagger
 * /api/players/{username}:
 *   get:
 *     summary: Retorna instância de um jogador
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *         description: Username do jogador
 *         example: Lucas Admin
 *     responses:
 *       200:
 *         description: Instância de um jogador - VolleyPlayer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VolleyPlayer'
 *       404:
 *         description: Erro de domínio de serviço da entidade VolleyPlayer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: NotFoundException
 *               message: encontrar jogador retornou vazio
 *       500:
 *         description: Erro genérico não tratado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
playerRoutes.get('/:username', playerController.findByUsername)

/**
 * @swagger
 * /api/players/match/{matchId}:
 *   get:
 *     summary: (HTML) Retorna todas as instâncias de jogadores numa partida
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: matchId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da partida
 *         example: 2
 *     responses:
 *       200:
 *         description: Todas as instâncias de jogadores numa partida - VolleyPlayer[]
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *       404:
 *         description: Erro de domínio de serviço da entidade VolleyPlayer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: NotFoundException
 *               message: Encontrar jogadores nessa partida retornou vazio
 *       500:
 *         description: Erro genérico não tratado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
playerRoutes.get('/match/:matchId', async (req, res) => {
  const { matchId } = req.params
  
  try {
    
    const templateModelForMatch = new TemplateModelForMatch()
    const playersInThisMatch = playerService.findAllByMatch(matchId)
    const matchTemplate = templateModelForMatch.mount(playersInThisMatch, parseInt(matchId))
    
    const templatePath = path.resolve('./public/templates/players-from-match.html')
    let htmlTemplate = await fs.readFile(templatePath, 'utf8')
    const playersDataFromMatchTemplate = htmlTemplate.replace('{{PLAYERS}}', matchTemplate)

    return res.send(playersDataFromMatchTemplate)

  } catch(err) {
    console.log(`Erro interno no servidor: ${err}`)
    throw err
  }
  
})

export {
  playerRoutes
}