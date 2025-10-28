

import express from "express"
import { playerRoutes } from "./src/routes/Player.route.js"
import { playersCategoryRoutes } from "./src/routes/PlayerCategory.route.js"
import { matchRoutes } from "./src/routes/Match.route.js"
import { siteRoutes } from "./src/routes/Site.route.js"
import { matchCategoriesRoutes } from "./src/routes/MatchCategory.route.js"
import { matchSituationsRoutes } from "./src/routes/MatchSituation.route.js"
import { matchesReportRoutes } from "./src/routes/MatchReport.route.js"
import { matchesEvaluationsRoutes } from "./src/routes/MatchEvaluation.route.js"

import { signInRoute } from "./src/routes/SignIn.route.js"
import { loginRoute } from "./src/routes/login.js"
import { userIndexRoute } from "./src/routes/UserIndex.route.js"

import { globalErrorHandler } from "./dist/src/middlewares/globalErrorHandler.middleware.js"

import path from 'path'

import { specs, swaggerUi } from "./swagger-config.js"

// const { specs, swaggerUi } = require('./swagger-config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // lidar com formulários html

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.use("/api/players", playerRoutes)
app.use("/api/players-categories", playersCategoryRoutes)
app.use("/api/matches", matchRoutes)
app.use("/api/sites", siteRoutes)
app.use("/api/matches-categories", matchCategoriesRoutes)
app.use("/api/matches-situations", matchSituationsRoutes)
app.use("/api/matches-reports", matchesReportRoutes)
app.use("/api/matches-evaluations", matchesEvaluationsRoutes)

// Chamados nos htmls correspondentes de mesmo nome
app.use("/sign-in", signInRoute) 
app.use("/login", loginRoute)

app.use("/user-panel", userIndexRoute)

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