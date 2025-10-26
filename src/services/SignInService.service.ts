

import { playerService } from "./PlayerService.service.js"

class SignInService {

  signIn(inviterId: number, playerCat: number, username: string, gender: string, birth:string, password: string) {
    if(!inviterId || typeof inviterId !== "number")
      throw new Error("Id do jogador não fornecido ou de tipo inválido")
    if(!playerCat || typeof playerCat !== "number")
      throw new Error("Id da categoria do jogador não fornecido ou de tipo inválido")
    if(!username || typeof username !== "string")
      throw new Error("Nome do jogador não fornecido ou de tipo inválido")
    if(!gender || typeof gender !== "string")
      throw new Error("Gênero do jogador não fornecido ou de tipo inválido")
    if(!birth || typeof birth !== "string")
      throw new Error("Data de nascimento do jogador não fornecido ou de tipo inválido")
    if(!password || typeof password !== "string")
      throw new Error("Senha do jogador não fornecido ou de tipo inválido")

  }

}
