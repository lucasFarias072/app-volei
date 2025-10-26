

import { playerRepository } from "../../repositories/PlayerRepository.repository.js"
import { playerService } from "../PlayerService.service.js"
import { NotFoundException } from "../../exceptions/application/NotFoundException.exception.js"

jest.mock("../../repositories/PlayerRepository.repository.js", () => ({
  playerRepository: {
    findAll: jest.fn(),
    findByUsername: jest.fn(),
    findAllKeys: jest.fn(),
    findAllUsernames: jest.fn(),
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
      }).toThrow("Não há usuário com este nome!")
    })
  })

  describe("findAllKeys (teste de erro de serviço)", () => {
    it("Deve retornar o erro: NotFoundException", () => {
      (playerRepository.findAllKeys as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findAllKeys()
      }).toThrow(NotFoundException)
    })

    it("Deve retornar o erro: NotFoundException (textualmente)", () => {
      (playerRepository.findAllKeys as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findAllKeys()
      }).toThrow("Não é possível obter os IDs se não há jogadores cadastrados!")
    })
  })

  describe("findAllUsernames (teste de erro de serviço)", () => {
    it("Deve retornar o erro: NotFoundException", () => {
      (playerRepository.findAllUsernames as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findAllUsernames()
      }).toThrow(NotFoundException)
    })

    it("Deve retornar o erro: NotFoundException (textualmente)", () => {
      (playerRepository.findAllUsernames as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findAllUsernames()
      }).toThrow("Não é possível obter os nomes dos jogadores se não há jogadores cadastrados!")
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