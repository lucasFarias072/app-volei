

import type { Site } from "../models/Site.entity.js"
import { sites } from "../models/Site.entity.js"

class SiteRepository {
  
  findAll(): Site[] {
    return sites
  }

}

const siteRepository: SiteRepository = new SiteRepository()

export {
    siteRepository
}
