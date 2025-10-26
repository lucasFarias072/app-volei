

import type { Site } from "../models/site.js"
import { sites } from "../models/site.js"

class SiteRepository {
  
  findAll(): Site[] {
    return sites
  }

}

const siteRepository: SiteRepository = new SiteRepository()

export {
    siteRepository
}
