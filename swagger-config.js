

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Volleyball API',
      version: '1.0.0',
      description: 'API para gerenciamento de jogadores e partidas de vôlei',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desenvolvimento',
      },
    ],
    components: {
      schemas: {

        ErrorResponse: {
          type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Error'
              },
              message: {
                type: 'string',
                example: 'Erro interno do servidor'
              }
        }},
        
        VolleyPlayer: {
          type: 'object',
          properties: {
            playerId: {type: 'integer', example: 1},
            inviterId: {type: 'integer', example: 1},
            playerCat: {type: 'integer', example: 1},
            username: {type: 'string', example: 'Lucas Admin'},
            gender: {type: 'string', example: 'm'},
            birth: {type: 'string', example: '16/07/1992'},
            password: {type: 'string', example: '@Passkey123'},
            authenticated: {type: 'boolean', example: true}
          },
        },

        PlayerCategory: {
          type: 'object',
          properties: {
            categoryId: { type: 'integer', example: 1 },
            description: { type: 'string', example: 'iniciante' },
            color: { type: 'string', example: 'white' },
          },
        },

        Match: {
          type: 'object',
          properties: {
            matchId: { type: 'integer', example: 1 },
            siteId: { type: 'integer', example: 2 },
            matchCategoryId: { type: 'integer', example: 3 },
            organizerId: { type: 'integer', example: 4 },
            situationId: { type: 'integer', example: 5 },
            date: { type: 'string', format: '20/01/2026' },
            hour: { type: 'string', example: '17:00' }
          },
        },

        MatchCategory: {
          type: 'object',
          properties: {
            matchCategoryId: { type: 'integer', example: 2 },
            description: { type: 'string', example: 'mista' }
          },
        },

        MatchEvaluation: {
          type: 'object',
          properties: {
            evaluationId: { type: 'integer', example: 1 },
            matchId: { type: 'integer', example: 2 },
            playerId: { type: 'integer', example: 3 },
            value: { type: 'number', example: 4 },
          },
        },

        MatchReport: {
          type: 'object',
          properties: {
            matchReportId: { type: 'integer', example: 1 },
            matchId: { type: 'integer', example: 2 },
            playerId: { type: 'integer', example: 3 },
          },
        },

        MatchSituation: {
          type: 'object',
          properties: {
            matchSituationId: { type: 'integer', example: 2 },
            description: { type: 'string', example: 'iniciada' }
          },
        },

        Site: {
          type: 'object',
          properties: {
            siteId: { type: 'integer', example: 2 },
            description: { type: 'string', example: 'Arena Bento' }
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.js', './dist/src/controllers/*.js'], // Caminho p/ os arquivos de rotas
}

const specs = swaggerJsdoc(options)

export { specs, swaggerUi }
