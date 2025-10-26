

import express from "express"
import { sites } from "../../dist/src/models/site.js"
const siteRoutes = express.Router()

siteRoutes.get('/', (req, res) => {
  try {
    const getAllSites = sites
    if(!getAllSites) return res.status(404).json({msg: "Sem arenas registradas"})
    // const getAllSites = await getAllSitesQuery.json()
    return res.status(200).send(getAllSites)
  } catch(err) {
    console.log(`Erro interno no servidor: ${err}`)
  }
})

export {
  siteRoutes
}
