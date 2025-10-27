

import type { VolleyPlayer } from "../../src/models/Player.entity.js"
import { playerService } from "../../src/services/Player.service.js"
import { getRandomIndex } from "../../src/utils/functions.js"

const loginMock: HTMLElement | null = document.getElementById("login-mock")
const username: HTMLElement | null = document.getElementById("username")
const password: HTMLElement | null = document.getElementById("password")

function fakeLogin(): void {
    const getAllPlayers: VolleyPlayer[] = playerService.findAll()
    const mockPlayerInstance: VolleyPlayer | undefined = getAllPlayers[getRandomIndex(0, getAllPlayers.length)] || getAllPlayers[0]
    
    username?.setAttribute("value", mockPlayerInstance!.username)
    password?.setAttribute("value", mockPlayerInstance!.getPassword)
}

document.addEventListener('DOMContentLoaded', () => {
  loginMock?.addEventListener("click", fakeLogin)
})
