

import type { Request, Response } from "express"
import type { Site } from "../models/site.js"
import { siteService } from "../services/SiteService.service.js"

class SiteController {

  findAll(req: Request, res: Response): Response {
    const getAllSites: Site[] = siteService.findAll()
    return res.status(200).json(getAllSites)
  }

}

const siteController: SiteController = new SiteController()

export {
    siteController
}
