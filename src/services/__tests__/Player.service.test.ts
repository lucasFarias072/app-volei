

import { playerRepository } from "../../repositories/Player.repository.js"
import { playerService } from "../Player.service.js"
import { NotFoundException } from "../../exceptions/application/NotFoundException.exception.js"

jest.mock("../../repositories/Player.repository.js", () => ({
  playerRepository: {
    findAll: jest.fn(),
    findByUsername: jest.fn(),
    mapByPlayerId: jest.fn(),
    mapByUsername: jest.fn(),
    findByMatchId: jest.fn(),
    findByMatchIdMapByPlayerId: jest.fn(),
    findAllByMatch: jest.fn()
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
      }).toThrow("Erro: encontrar todos os jogadores retornou: vazio.")
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
      }).toThrow("Erro: encontrar jogador com esse nome retornou: vazio.")
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
      }).toThrow("Erro: mapear chaves dos jogadores retornou: vazio.")
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
      }).toThrow("Erro: mapear nomes dos jogadores retornou: vazio.")
    })
  })

  describe("findByMatchId (teste de erro de serviço)", () => {
    it("Deve retornar o erro: NotFoundException", () => {
      (playerRepository.findByMatchId as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findByMatchId(1)
      }).toThrow(NotFoundException)
    })

    it("Deve retornar o erro: NotFoundException (textualmente)", () => {
      (playerRepository.findByMatchId as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findByMatchId(1)
      }).toThrow("Erro: encontrar jogadores nesse relatório de partida retornou: vazio.")
    })
  })

  describe("findByMatchIdMapByPlayerId (teste de erro de serviço)", () => {
    it("Deve retornar o erro: NotFoundException", () => {
      (playerRepository.findByMatchIdMapByPlayerId as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findByMatchIdMapByPlayerId(1)
      }).toThrow(NotFoundException)
    })

    it("Deve retornar o erro: NotFoundException (textualmente)", () => {
      (playerRepository.findByMatchIdMapByPlayerId as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findByMatchIdMapByPlayerId(1)
      }).toThrow("Erro: encontrar chaves dos jogadores nessa partida retornou: vazio.")
    })
  })

  describe("findAllByMatch (teste de erro de serviço)", () => {
    it("Deve retornar o erro: NotFoundException", () => {
      (playerRepository.findAllByMatch as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findAllByMatch(1)
      }).toThrow(NotFoundException)
    })

    it("Deve retornar o erro: NotFoundException (textualmente)", () => {
      (playerRepository.findAllByMatch as jest.Mock).mockReturnValue([])
      expect(() => {
        playerService.findAllByMatch(1)
      }).toThrow("Erro: encontrar jogadores nessa partida retornou: vazio.")
    })
  })

})