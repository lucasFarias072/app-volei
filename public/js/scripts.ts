

import { mountGetAllPlayers, mountGetAllMatches } from "../../src/queries/mount-table.js"
import { playerService } from "../../src/services/Player.service.js"

let matchIdClicked: number = 0

const getAllPlayersTag: HTMLElement | null = document.getElementById("get-all-players")
const getAllMatchesTag: HTMLElement | null = document.getElementById("get-all-matches")

document.getElementById("sidebar-open")?.addEventListener("click", () => {
  document.getElementById("sidebar")?.classList.add("open")
})

document.getElementById("sidebar")?.addEventListener("click", () => {
  document.getElementById("sidebar")?.classList.remove("open")
})

document.addEventListener('DOMContentLoaded', async () => {
  mountGetAllPlayers(getAllPlayersTag)
  mountGetAllMatches(getAllMatchesTag)
  
  // This is here cuz it depends on the await calls above
  const seePlayersButton = document.querySelectorAll(".see-players")
  
  seePlayersButton.forEach(buttonTag => {
    buttonTag.addEventListener("click", async () => {
      // console.log(buttonTag.getAttribute("data-matchid"))
      const valueWithinTag = buttonTag.getAttribute("data-matchid")
      if(valueWithinTag) {
        matchIdClicked = parseInt(valueWithinTag)
        playerService.findAllByMatch(matchIdClicked)
      }
    })
  })

})
