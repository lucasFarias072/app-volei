

import { matchRepository } from "../../repositories/MatchRepository.repository.js"
import { matchService } from "../MatchService.service.js"

// Excessões
import { NotFoundException } from "../../exceptions/application/NotFoundException.exception.js"

jest.mock("../../repositories/MatchRepository.repository.js", () => ({
  matchRepository: {
    findAll: jest.fn(),
  }
}))

describe("MatchEvaluationService", () => {
  beforeEach(() => {jest.clearAllMocks()})

  describe("findAll (teste de erro de serviço)", () => {
    it("Deve lançar o erro: NotFoundException", () => {
      (matchRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        matchService.findAll()
      }).toThrow(NotFoundException)
    })

    it("Deve lançar o erro: NotFoundException (textualmente)", () => {
      (matchRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        matchService.findAll()
      }).toThrow("Não há partidas cadastradas!")
    })
  })

})