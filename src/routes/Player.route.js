

import express from "express"
import fs from "fs/promises"
import path from 'path'

import { playerController } from "../../dist/src/controllers/PlayerController.controller.js"
import { playerService } from "../../dist/src/services/PlayerService.service.js"
import { TemplateModelForMatch } from "../../dist/src/components/table.js"
// import { IntroductionComponent, TableComponent } from "../../dist/src/components/table.js"

const playerRoutes = express.Router()

playerRoutes.get('/', playerController.findAll) 

playerRoutes.get('/:username', playerController.findByUsername)

playerRoutes.get('/match/:matchId', async (req, res) => {
  const { matchId } = req.params
  
  try {
    
    const templateModelForMatch = new TemplateModelForMatch()
    const playersInThisMatch = playerService.findPlayerByMatch(matchId)
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