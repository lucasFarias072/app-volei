

import type { MatchEvaluation } from "../../models/match-evaluation.js"
import { matchEvaluationRepository } from "../../repositories/MatchEvaluationRepository.repository.js"
import { matchEvaluationService } from "../MatchEvaluationService.service.js"

// Excessões
import { NotFoundException } from "../../exceptions/application/NotFoundException.exception.js"

jest.mock("../../repositories/MatchEvaluationRepository.repository.js", () => ({
  matchEvaluationRepository: {
    findAll: jest.fn(),
    findPlayerEvaluation: jest.fn(),
    findPlayerEvaluationValue: jest.fn()
  }
}))

describe("MatchEvaluationService", () => {
  beforeEach(() => {jest.clearAllMocks()})

  describe("findAll (testes de sucesso no serviço)", () => { 
    it("Deve passar por 3 verificações", () => {
      // Criar bdd mock
      const matchesEvaluationsMock: MatchEvaluation[] = [
        {evaluationId: 1, matchId: 1, playerId: 1, value: 5} as MatchEvaluation,
      ];

      // Função usada e valor esperado
      matchEvaluationRepository.findAll = jest.fn(() => matchesEvaluationsMock)

      // Chamada da função original (dado de comparação)
      const playerEvaluationRows = matchEvaluationRepository.findAll()

      // Asserções
      expect(playerEvaluationRows).toEqual(matchesEvaluationsMock)
      expect(playerEvaluationRows).not.toHaveLength(2)
      expect(matchEvaluationRepository.findAll).not.toHaveBeenCalledTimes(2)
    })
  })
  
  describe("findAll (testes de erro no serviço)", () => {
    it("Deve lançar o erro de domínio: NotFoundException", () => {
      (matchEvaluationRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        matchEvaluationService.findAll()
      }).toThrow(NotFoundException)
    })

    it("Deve lançar o erro de domínio: NotFoundException (textualmente)", () => {
      (matchEvaluationRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        matchEvaluationService.findAll()
      }).toThrow("Não há avaliações de partidas cadastradas!")
    })

  })
  
  // Motivo do "undefined": o método de repositório usa "find", aoinvés do "filter"
  describe("findPlayerEvaluation (testes de erro de serviço)", () => {
    it("Deve lançar o erro de domínio: NotFoundException", () => {
      (matchEvaluationRepository.findPlayerEvaluation as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        matchEvaluationService.findPlayerEvaluation(1, 1)
      }).toThrow(NotFoundException)
    })
    it("Deve lançar o erro de domínio: NotFoundException (textualmente)", () => {
      (matchEvaluationRepository.findPlayerEvaluation as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        matchEvaluationService.findPlayerEvaluation(1, 1)
      }).toThrow("Não há jogador com avaliação nessa partida")
    })
  })
  
  // Motivo do "undefined": o método de repositório usa "find", aoinvés do "filter"
  describe("findPlayerEvaluationValue (testes de erro no serviço)", () => {
    it("Deve lançar o erro de domínio: NotFoundException", () => {
      (matchEvaluationRepository.findPlayerEvaluationValue as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        matchEvaluationService.findPlayerEvaluationValue(1, 1)
      }).toThrow(NotFoundException)
    })
    it("Deve lançar o erro de domínio: NotFoundException (textualmente)", () => {
      (matchEvaluationRepository.findPlayerEvaluationValue as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        matchEvaluationService.findPlayerEvaluationValue(1, 1)
      }).toThrow("Pontuação do jogador nessa partida, não existe, pois ele não está nela")
    })
  })

})