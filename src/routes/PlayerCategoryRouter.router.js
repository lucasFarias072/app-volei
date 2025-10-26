

import express from "express"
// import { playersCategory } from "../../dist/src/models/player-category.js"
import { playerCategoryController } from "../../dist/src/controllers/PlayerCategoryController.controller.js"
const playersCategoryRoutes = express.Router()

/* playersCategoryRoutes.get('/', (req, res) => {
    try {
        const getAllPlayersCategory = playersCategory
        if(!getAllPlayersCategory) return res.status(404).json({msg: "Sem categorias de jogadores registrados"})
        // const getAllPlayersCategory = await getAllPlayersCategoryQuery.json()
        return res.status(200).send(getAllPlayersCategory)
    } catch(err) {
        console.log(`Erro interno no servidor: ${err}`)
    }
}) */

// (from server.js) >>> /api/jogadores-cat 
playersCategoryRoutes.get('/', playerCategoryController.findAll)

export {
    playersCategoryRoutes
}
