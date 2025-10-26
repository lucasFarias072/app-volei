

import express from "express"
import { playerRoutes } from "./src/routes/PlayerRouter.router.js"
import { playersCategoryRoutes } from "./src/routes/PlayerCategoryRouter.router.js"
import { matchRoutes } from "./src/routes/MatchRouter.router.js"
import { siteRoutes } from "./src/routes/SiteRouter.router.js"
import { matchCategoriesRoutes } from "./src/routes/MatchCategoryRouter.router.js"
import { matchSituationsRoutes } from "./src/routes/MatchSituationRouter.router.js"
import { matchesReportRoutes } from "./src/routes/MatchReportRouter.router.js"
import { matchesEvaluationsRoutes } from "./src/routes/MatchEvaluationRouter.router.js"

import { signInRoute } from "./src/routes/SignInRouter.router.js"
import { loginRoute } from "./src/routes/login.js"
import { userIndexRoute } from "./src/routes/UserIndexRouter.router.js"

import { globalErrorHandler } from "./dist/src/middlewares/globalErrorHandler.middleware.js"

import path from 'path'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // lidar com formulários html

app.use("/api/jogadores", playerRoutes)
app.use("/api/jogadores-cat", playersCategoryRoutes)
app.use("/api/partidas", matchRoutes)
app.use("/api/locais", siteRoutes)
app.use("/api/partida-categorias", matchCategoriesRoutes)
app.use("/api/partida-situacoes", matchSituationsRoutes)
app.use("/api/partidas-relatorio", matchesReportRoutes)
app.use("/api/partidas-avaliacao", matchesEvaluationsRoutes)

// Chamados nos htmls correspondentes de mesmo nome
app.use("/sign-in", signInRoute) 
app.use("/login", loginRoute)
app.use("/painel-usuario", userIndexRoute)

app.use('/dist', express.static('./dist'))
app.use('/public', express.static('./public'))
app.get('/', (req, res) => {
    // res.sendFile(path.resolve('./public/templates/index.html'))
    res.sendFile(path.resolve('./public/templates/sign-in.html'))
})

app.use(globalErrorHandler)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})