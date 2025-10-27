

import { matchReportRepository } from "../../repositories/MatchReport.repository.js"
import { matchReportService } from "../MatchReport.service.js"
import { NotFoundException } from "../../exceptions/application/NotFoundException.exception.js"

jest.mock('../../repositories/MatchReport.repository', () => ({
  matchReportRepository: {
    findAll: jest.fn(),
    findByMatchReportId: jest.fn()
  }
}))

describe("MatchReportService", () => {
  beforeEach(() => {jest.clearAllMocks()})

  describe("findAll (teste de erro de serviço)", () => {
    it("Deve lançar o erro: NotFoundException", () => {
      (matchReportRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        matchReportService.findAll()
      }).toThrow(NotFoundException)
    })

    it("Deve lançar o erro: NotFoundException (textualmente)", () => {
      (matchReportRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        matchReportService.findAll()
      }).toThrow("Não há relatórios de partida cadastrados!")
    })
  })

  describe("findByMatchReportId (teste de erro de serviço)", () => {
    it("Deve lançar o erro: NotFoundException", () => {
      (matchReportRepository.findByMatchReportId as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        matchReportService.findByMatchReportId(1)
      }).toThrow(NotFoundException)
    })

    it("Deve lançar o erro: NotFoundException (textualmente)", () => {
      (matchReportRepository.findByMatchReportId as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        matchReportService.findByMatchReportId(1)
      }).toThrow("Não há jogadores cadastrados nessa partida!")
    })
  })

})