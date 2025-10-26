

import type { Request, Response, NextFunction } from "express"
import { HTTPException } from "../exceptions/presentation/HTTPException.exception.js"
import { DomainException } from "../exceptions/application/DomainException.exception.js"
import { NotFoundException } from "../exceptions/application/NotFoundException.exception.js"

export function globalErrorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    if(error instanceof HTTPException) {
      console.log("-----> Camada de apresentação")
      return res.status(error.statusCode).json({msg: error.message})
    }

    if(error instanceof DomainException) {
      console.log("-----> Camada de aplicação")
      if(error instanceof NotFoundException) {
        return res.status(404).json({ detail: error.message })
      }
    }
    
    console.log("-----> Camada genérica")
    console.log("Erro não tratado:", error)
    return res.status(500).json({msg: "Erro interno do servidor"})  
}
