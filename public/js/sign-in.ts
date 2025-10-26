

import type { PlayerCategory } from "../../src/models/player-category.js"
import { rotate } from "../../src/utils/misc.js"
import { playerCategoryService } from "../../src/services/PlayerCategoryService.service.js"

// Add select field for "playerCat" from entity "PlayerCategory"
function mountSignInForm(where: HTMLElement): void {
  
  const getAllPlayersCategory: PlayerCategory[] = playerCategoryService.findAll()
  
  const container = document.createElement("div")
  container.setAttribute("class", "flex column going-center gap")

  const labelTag = document.createElement("label")
  labelTag.setAttribute("for", "playerCat")
  labelTag.setAttribute("required", "")
  labelTag.textContent = "Sua categoria"

  const selectTag = document.createElement("select")
  selectTag.setAttribute("id", "playerCat")
  selectTag.setAttribute("name", "playerCat")
  
  for(const catName of getAllPlayersCategory) {
    const option = document.createElement("option")
    option.setAttribute("value", `${catName.categoryId}`)
    option.textContent = catName.description
    selectTag.appendChild(option)
  }

  container.appendChild(labelTag)
  container.appendChild(selectTag)
  where.appendChild(container)
}

const signInFormSelects: HTMLElement | null = document.getElementById("sign-in-form-selects")
const voleyBall: HTMLElement | null = document.querySelector(".voley-ball")

document.addEventListener('DOMContentLoaded', () => {
  if(voleyBall) rotate(voleyBall)
  if(signInFormSelects) mountSignInForm(signInFormSelects)
})