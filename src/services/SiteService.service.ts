

import type { Site } from "../models/site.js"
import { siteRepository } from "../repositories/SiteRepository.repository.js"

class SiteService {

  findAll(): Site[] {
    const getAllSites: Site[] = siteRepository.findAll()
    if(!getAllSites || getAllSites.length === 0)
      throw new Error("Não há arenas cadastradas")
    return getAllSites
  }

}

const siteService: SiteService = new SiteService()

export {
    siteService
}
