

import type { Request, Response, NextFunction } from "express"
import { doesKeyExist, doesLabelExist } from "../utils/functions.js"
import { playerService } from "../services/Player.service.js"
import { VolleyPlayer } from "../models/Player.entity.js"
import path from 'path'

function validateSignInFields(req: Request, res: Response, next: NextFunction) {

  const { inviterId, playerCat, username, gender, birth, password,  } = req.body

  let stillValid = true

  if(!inviterId || inviterId.trim() === "") stillValid = false
  if(!playerCat || playerCat.trim() === "") stillValid = false
  if(!username || typeof username !== "string" || username.trim() === "") stillValid = false
  if(!gender || typeof gender !== "string" || gender.trim() === "") stillValid = false
  if(!birth || typeof birth !== "string" || birth.trim() === "") stillValid = false
  if(!password || typeof password !== "string" || password.trim() === "") stillValid = false

  if(!stillValid)
    return res.sendFile(path.resolve("./public/templates/sign-in-error.html"))

  req.body.username = username.trim()
  req.body.inviterId = parseInt(inviterId)

  next()
}

function validatePlayerId(req: Request, res: Response, next: NextFunction) {
  
  try {
    const { inviterId } = req.body
    const invitersKeys = playerService.mapByPlayerId()
    const isInviterKeyValid = doesKeyExist(parseInt(inviterId), invitersKeys)
    if(!isInviterKeyValid)
      return res.sendFile(path.resolve("./public/templates/sign-in-error.html"))
    
    next()

  } catch(err) {
    console.error('Erro ao validar inviterId:', err)
    return res.status(500).sendFile(path.resolve("./public/templates/sign-in-error.html"))
  }

}

function validateUsername(req: Request, res: Response, next: NextFunction) {

  try {
    const { username } = req.body
    const usernames = playerService.mapByUsername()
    const isUsernameTaken = doesLabelExist(username.trim(), usernames)
    if(isUsernameTaken)
      return res.sendFile(path.resolve("./public/templates/sign-in-error.html"))
    next()
  } catch(err) {
    console.error('Erro ao validar nome de usuário:', err)
    return res.status(500).sendFile(path.resolve("./public/templates/sign-in-error.html"))
  }

}

function createUser(req: Request, res: Response) {
  try {
    const { inviterId, playerCat, username, gender, birth, password,  } = req.body
    let currentPlayerId = 0
    const getAllPlayers = playerService.findAll()
    currentPlayerId = getAllPlayers[getAllPlayers.length - 1]!.playerId + 1
    const newVolleyPlayer = new VolleyPlayer(
        currentPlayerId, parseInt(inviterId), parseInt(playerCat), username, gender, birth, password, false
    )
  return res.sendFile(path.resolve("./public/templates/login.html"))
  } catch(err) {
    console.error('Erro ao cadastrar um usuário:', err)
    return res.status(500).sendFile(path.resolve("./public/templates/sign-in-error.html"))
  }
}

export {
  validateSignInFields, validatePlayerId, validateUsername, createUser
}