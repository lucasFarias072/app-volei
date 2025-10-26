

import type { Request, Response } from "express"

class SignInController {

  signIn(req: Request, res: Response) {
    const { inviterId, playerCat, username, gender, birth, password  } = req.body

    // Aqui cabe várias verificações de erros customizados do tipo: HTTPException
  }

}
