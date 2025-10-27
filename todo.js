

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
  */

  /*
    * Melhorar/mudar os textos das excessões: regra de negócio, http
    * parada: 
      * Player.repository.ts ... mapByUsername
    
    * Lembrete de procedimentos:
      * abrir 5 arquivos: modelo, repositório, serviço, controlador, teste (dos serviços)
      * verificar o atributo trabalhado na consulta (fechar o arquivo do modelo após isso)
      * mudar o nome da consulta, se estiver ilegível no repositório, e repassar ao serviço e controlador
      * add variável com nome legível de consulta no repositório, e repassar nomes p/ o serviço e controlador
      * mudar a descrição da excessão do repositório, repassar ela pro arquivo de teste
      * testar navegação na aplicação, p/ verificar se há quebras
      * lançar testes p/ verificar se há quebras
  */

  /*
    * Adicionar excessões HTTP a todos os escopos de controllers
  */

  /*
    * Criar testes p/ as excessões HTTP (pesquisar como testar nas rotas)
  */
}
