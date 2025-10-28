

import express from "express"
import { siteController } from "../../dist/src/controllers/Site.controller.js"

const siteRoutes = express.Router()

/**
 * @swagger
 * /api/sites:
 *   get:
 *     summary: Retorna todas as instâncias de local de partida
 *     tags: [Sites]
 *     responses:
 *       200:
 *         description: Todas as instâncias de local de partida - Site[]
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Site'
 */
siteRoutes.get('/', siteController.findAll)

export {
  siteRoutes
}
