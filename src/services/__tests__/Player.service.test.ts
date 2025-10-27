

import { playerRepository } from "../../repositories/Player.repository.js"
import { playerService } from "../Player.service.js"
import { NotFoundException } from "../../exceptions/application/NotFoundException.exception.js"

jest.mock("../../repositories/Player.repository.js", () => ({
  playerRepository: {
    findAll: jest.fn(),
    findByUsername: jest.fn(),
    mapByPlayerId: jest.fn(),
    mapByUsername: jest.fn(),
    findByMatch: jest.fn(),
    findByMatchKeys: jest.fn(),
    findPlayerByMatch: jest.fn()
  }
}))

describe("PlayerRepository", () => {
  beforeEach(() => {jest.clearAllMocks()})

  describe("findAll (teste de erro de serviço)", () => {
    it("Deve retornar o erro: NotFoundException", () => {
      (playerRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findAll()
      }).toThrow(NotFoundException)
    })

    it("Deve retornar o erro: NotFoundException (textualmente)", () => {
      (playerRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findAll()
      }).toThrow("Não há jogadores cadastrados!")
    })
  })

  describe("findByUsername (teste de erro de serviço)", () => {
    it("Deve retornar o erro: NotFoundException", () => {
      (playerRepository.findByUsername as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        playerService.findByUsername("")
      }).toThrow(NotFoundException)
    })

    it("Deve retornar o erro: NotFoundException (textualmente)", () => {
      (playerRepository.findByUsername as jest.Mock).mockReturnValue(undefined)
      expect(() => {
        playerService.findByUsername("")
      }).toThrow("Erro: Nome de usuário não encontrado entre os jogadores.")
    })
  })

  describe("mapByPlayerId (teste de erro de serviço)", () => {
    it("Deve retornar o erro: NotFoundException", () => {
      (playerRepository.mapByPlayerId as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.mapByPlayerId()
      }).toThrow(NotFoundException)
    })

    it("Deve retornar o erro: NotFoundException (textualmente)", () => {
      (playerRepository.mapByPlayerId as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.mapByPlayerId()
      }).toThrow("Erro: Não há jogadores cadastrados, não é possível obter suas chaves.")
    })
  })

  describe("mapByUsername (teste de erro de serviço)", () => {
    it("Deve retornar o erro: NotFoundException", () => {
      (playerRepository.mapByUsername as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.mapByUsername()
      }).toThrow(NotFoundException)
    })

    it("Deve retornar o erro: NotFoundException (textualmente)", () => {
      (playerRepository.mapByUsername as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.mapByUsername()
      }).toThrow("Erro: Não há jogadores cadastrados, não é possível obter seus nomes.")
    })
  })

  describe("findByMatch (teste de erro de serviço)", () => {
    it("Deve retornar o erro: NotFoundException", () => {
      (playerRepository.findByMatch as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findByMatch(1)
      }).toThrow(NotFoundException)
    })

    it("Deve retornar o erro: NotFoundException (textualmente)", () => {
      (playerRepository.findByMatch as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findByMatch(1)
      }).toThrow("Não há jogadores cadastrados na partida com esse ID")
    })
  })

  describe("findByMatchKeys (teste de erro de serviço)", () => {
    it("Deve retornar o erro: NotFoundException", () => {
      (playerRepository.findByMatchKeys as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findByMatchKeys(1)
      }).toThrow(NotFoundException)
    })

    it("Deve retornar o erro: NotFoundException (textualmente)", () => {
      (playerRepository.findByMatchKeys as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findByMatchKeys(1)
      }).toThrow("Não há jogadores cadastrados nessa partida, portanto não é possível obter seus IDs")
    })
  })

  describe("findPlayerByMatch (teste de erro de serviço)", () => {
    it("Deve retornar o erro: NotFoundException", () => {
      (playerRepository.findPlayerByMatch as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findPlayerByMatch(1)
      }).toThrow(NotFoundException)
    })

    it("Deve retornar o erro: NotFoundException (textualmente)", () => {
      (playerRepository.findPlayerByMatch as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findPlayerByMatch(1)
      }).toThrow("Não há jogadores vinculados com esta partida!")
    })
  })

})