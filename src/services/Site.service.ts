

import type { Site } from "../models/Site.entity.js"
import { siteRepository } from "../repositories/Site.repository.js"

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
