

import { playerCategoryRepository } from "../../repositories/PlayerCategoryRepository.repository.js"
import { playerCategoryService } from "../PlayerCategoryService.service.js"
import { NotFoundException } from "../../exceptions/application/NotFoundException.exception.js"

jest.mock("../../repositories/PlayerCategoryRepository.repository.js", () => ({
    playerCategoryRepository: {
        findAll: jest.fn(),
        findByCategory: jest.fn(),
        findCategoryName: jest.fn(),
        findCategoryColor: jest.fn()
    }
}))

describe("MatchEvaluationService", () => {
  beforeEach(() => {jest.clearAllMocks()})

  describe("findAll (teste de erro de serviço)", () => {
    it("Deve lançar o erro: NotFoundException", () => {
      (playerCategoryRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        playerCategoryService.findAll()
      }).toThrow(NotFoundException)
    })

    it("Deve lançar o erro: NotFoundException (textualmente)", () => {
      (playerCategoryRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        playerCategoryService.findAll()
      }).toThrow("Não há categorias de jogadores cadastradas!")
    })
  })

  describe("findByCategory (teste de erro de serviço)", () => {
    it("Deve lançar o erro: NotFoundException", () => {
      (playerCategoryRepository.findByCategory as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        playerCategoryService.findByCategory(1)
      }).toThrow(NotFoundException)
    })

    it("Deve lançar o erro: NotFoundException (textualmente)", () => {
      (playerCategoryRepository.findByCategory as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        playerCategoryService.findByCategory(1)
      }).toThrow("Não há jogador cadastrado com essa categoria!")
    })
  })

  describe("findCategoryName (teste de erro de serviço)", () => {
    it("Deve lançar o erro: NotFoundException", () => {
      (playerCategoryRepository.findCategoryName as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        playerCategoryService.findCategoryName(1)
      }).toThrow(NotFoundException)
    })

    it("Deve lançar o erro: NotFoundException (textualmente)", () => {
      (playerCategoryRepository.findCategoryName as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        playerCategoryService.findCategoryName(1)
      }).toThrow("Não há categoria para esse jogador!")
    })
  })

  describe("findCategoryColor (teste de erro de serviço)", () => {
    it("Deve lançar o erro: NotFoundException", () => {
      (playerCategoryRepository.findCategoryColor as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        playerCategoryService.findCategoryColor(1)
      }).toThrow(NotFoundException)
    })

    it("Deve lançar o erro: NotFoundException (textualmente)", () => {
      (playerCategoryRepository.findCategoryColor as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        playerCategoryService.findCategoryColor(1)
      }).toThrow("Não há cor de categoria para esse jogador!")
    })
  })

})
