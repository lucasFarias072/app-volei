

import express from "express"
import path from 'path'

const loginRoute = express.Router()

loginRoute.get("/", (req, res) => {
  return res.sendFile(path.resolve("./public/templates/login.html"))
})

export {
    loginRoute
}
