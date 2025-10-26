

import { matchSituationRepository } from "../../repositories/MatchSituationRepository.repository.js"
import { matchSituationService } from "../MatchSituationService.service.js"
import { NotFoundException } from "../../exceptions/application/NotFoundException.exception.js"

jest.mock('../../repositories/MatchSituationRepository.repository', () => ({
  matchSituationRepository: {
    findAll: jest.fn()
  }
}))

describe("MatchSituationService", () => {
  beforeEach(() => {jest.clearAllMocks()})

  describe("findAll (testes de erro no serviço)", () => {
    it("Deve lançar o erro: NotFoundException", () => {
      (matchSituationRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        matchSituationService.findAll()
      }).toThrow(NotFoundException)
    })
    it("Deve lançar o erro: NotFoundException (textualmente)", () => {
      (matchSituationRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        matchSituationService.findAll()
      }).toThrow("Não há situações de partida cadastradas!")
    })
  })

})