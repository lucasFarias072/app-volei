

import { playersCategory } from '../src/models/player-category.ts'
import { players } from '../src/models/player.ts'
import { matchesEvaluations } from '../src/models/match-evaluation.ts'


let queryId = 1

if(queryId === 1) {
    // Nome do jogador que convidou o Cebolinha Farias
    console.log(
        players.filter(
            player => player.inviterId === 
            players.filter(player => player.username === "Cebolinha Farias").map(player => player.inviterId)[0]
        ).map(player => player.username)[0]
    )
} else if (queryId === 2) {
  // Nome dos jogadores convidados por Cascão Santos
  console.log(
    players.filter(player => player.inviterId === 
        players.filter(player => player.username === "Cascão Santos").map(player => player.playerId)[0])
        .map(player => player.username)
  )
} else if (queryId === 3) {
    // Nome dos jogadores intermediários
    console.log(players.filter(player => player.playerCat === 
        playersCategory.filter(cat => cat.description === "intermediário").map(cat => cat.categoryId)[0]
    ).map(player => player.username))
} else if (queryId === 4) {
   // Avaliação da Florzinha Sousa na partida 1
   console.log(
    matchesEvaluations.filter(
        eva => eva.matchId === 1 && eva.playerId === players.filter(
            player => player.username === "Florzinha Sousa").map(
                player => player.playerId)[0]).map(eva => eva.value)
   )
}
