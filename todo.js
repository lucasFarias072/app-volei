

class Todo {
  /*
    * Adicionar "req" a todos os controllers, mesmo que ainda estejam usando dados em memória
  */

  /*
    * Adicionar testes p/ esses grupos
    * MatchRepository:          findById, findByIdMapBySituationId
    * MatchSituationRepository: findById, mapBySituation
  */

  /*
    * Ajustar nomes das consultas e de suas variáveis, para facilitar identificação
    * Lembrar que: 
      * onde a consulta é criada, é sobre quem a consulta vai agir
    
    * parada: 
      * Player.repository.ts ... mapByUsername
    
    * Lembrete de procedimentos:
      * abrir 5 arquivos: modelo, repositório, serviço, controlador, teste (dos serviços)
      * verificar o atributo trabalhado na consulta (fechar o arquivo do modelo após isso)
      * mudar o nome da consulta, se estiver ilegível no repositório, e repassar ao serviço e controlador
      * add variável com nome legível de consulta no repositório, e repassar nomes p/ o serviço e controlador
      * testar navegação na aplicação, p/ verificar se há quebras
      * lançar testes p/ verificar se há quebras
  */

  /*
    * Melhorar/mudar os textos das excessões: regra de negócio, http
      * mudar a descrição da excessão do repositório, repassar ela pro arquivo de teste
  */

  /*
    * Adicionar excessões HTTP a todos os escopos de controllers
  */

  /*
    * Criar testes p/ as excessões HTTP
  */
}

class PadroesPercebidos {
  uso_find() {
    const utilidade = "buscas por instâncias únicas"
    const exemplo = "findById: VolleyPlayer | undefined"
    const tipoRetorno = "instância | undefined"
    const tratamento = ["!variável ... throw new Error"]
  }
  uso_filter() {
    const utilidade = "buscas por grupo de instâncias ... sempre gera arrays"
    const exemplo = "findAll: VolleyPlayer"
    const tipoRetorno = "instância[]"
    const tratamento = ["variável.length === 0 ... throw new Error"]
  }
  uso_map() {
    const utilidade = "transforma grupo de instâncias OU instância ... + comum serem grupos"
    const exemplo = "findByUsername: string[]"
    const tipoRetorno = "instância[]"
    const tratamento = ["variável.length === 0 ... throw new Error"]
  }
}

class Rotas {
  
  testadas() {
    return [
      {route: "http://localhost:3000/api/players", method: "GET", params: [], res: "VolleyPlayer[]"},
      {route: "http://localhost:3000/api/players/Lucas Admin", method: "GET", params: ["username"], res: "VolleyPlayer"},
      {route: "http://localhost:3000/api/players/match/2", method: "GET", params: ["matchdId"], res: "HTML"},
      
      {route: "http://localhost:3000/api/players-categories", method: "GET", params: [], res: "PlayerCategory[]"},

      {route: "http://localhost:3000/api/matches", method: "GET", params: [], res: "Match[]"},

      {route: "http://localhost:3000/api/matches-categories", method: "GET", params: [], res: "MatchCategory[]"},

      {route: "http://localhost:3000/api/matches-evaluations", method: "GET", params: [], res: "MatchEvaluation[]"},

      {route: "http://localhost:3000/api/matches-reports", method: "GET", params: [], res: "MatchReport[]"},
      {route: "http://localhost:3000/api/matches-reports/1", method: "GET", params: ["matchId"], res: "MatchReport[]"},

      {route: "http://localhost:3000/api/matches-situations", method: "GET", params: [], res: "MatchSituation[]"},

      {route: "http://localhost:3000/api/sites", method: "GET", params: [], res: "Site[]"},
      
      // POSTS (até agora)
      {route: "http://localhost:3000/user-panel", method: "POST", params: [], body: '{"username": "Lucas Admin", "password": "farias"}', res: "HTML"}
    ]
    // {route: "", method: "", params: [], res: ""},
  }
}