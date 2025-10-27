

import { matchCategoryRepository } from '../../repositories/MatchCategory.repository.js'
import { matchCategoryService } from '../MatchCategory.service.js'
import { NotFoundException } from '../../exceptions/application/NotFoundException.exception.js'

jest.mock('../../repositories/MatchCategory.repository', () => ({
  matchCategoryRepository: {
    findAll: jest.fn()
  }
}))

describe('MatchCategoryService', () => {
  beforeEach(() => {jest.clearAllMocks()})

  /* describe('findAll', () => {
    
    // Teste 1
    it('deve retornar todas as categorias quando existirem dados', () => {
      
      const mockCategories: MatchCategory[] = [
        { matchCategoryId: 1, description: 'não mista' } as MatchCategory,
        { matchCategoryId: 2, description: 'mista' } as MatchCategory
      ];

      const mockCategories: MatchCategory[] = [
        { matchCategoryId: 1, description: 'não mista' } as MatchCategory,
        { matchCategoryId: 2, description: 'mista' } as MatchCategory,
      ];
      
      (matchCategoryRepository.findAll as jest.Mock).mockReturnValue(mockCategories)

      // Chamada que gera um dado p/ comparação
      const result = matchCategoryService.findAll()

      // Asserções
      expect(result).toEqual(mockCategories)
      expect(result).toHaveLength(2)
      expect(matchCategoryRepository.findAll).toHaveBeenCalledTimes(1)
    });

    // Teste 2 (excessão)
    it('Teste de erro no serviço: findAll', () => {
      
      (matchCategoryRepository.findAll as jest.Mock).mockReturnValue([])

      // Act & Assert
      expect(() => {
        matchCategoryService.findAll()
      }).toThrow(NotFoundException)
      
      expect(() => {
        matchCategoryService.findAll()
      }).toThrow('Não há categorias de partidas cadastradas!')
    });

    it('deve lançar MatchReportNotFoundException quando findAll retornar null', () => {
      // Arrange
      (matchCategoryRepository.findAll as jest.Mock).mockReturnValue(null);

      // Act & Assert
      expect(() => {
        matchCategoryService.findAll();
      }).toThrow(MatchReportNotFoundException);
    });

    it('deve lançar MatchReportNotFoundException quando findAll retornar undefined', () => {
      // Arrange
      (matchCategoryRepository.findAll as jest.Mock).mockReturnValue(undefined);

      // Act & Assert
      expect(() => {
        matchCategoryService.findAll();
      }).toThrow(MatchReportNotFoundException);
    });
  }); */

  describe("findAll (teste de erro no serviço)", () => {
    it("Deve lançar o erro de domínio: NotFoundException", () => {
      (matchCategoryRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        matchCategoryService.findAll()
      }).toThrow(NotFoundException)
    })

    it("Deve lançar o erro de domínio: NotFoundException (textualmente)", () => {
      (matchCategoryRepository.findAll as jest.Mock).mockReturnValue([])
      expect(() => {
        matchCategoryService.findAll()
      }).toThrow("Não há categorias de partidas cadastradas!")
    })

  })

})
