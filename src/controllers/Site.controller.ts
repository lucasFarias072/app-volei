

import type { Request, Response, NextFunction } from "express"
import type { Site } from "../models/Site.entity.js"
import { siteService } from "../services/Site.service.js"

class SiteController {

  findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllSites: Site[] = siteService.findAll()
      return res.status(200).json(getAllSites)
    } catch(error) {
      next(error)
    }
  }

}

const siteController: SiteController = new SiteController()

export {
    siteController
}
