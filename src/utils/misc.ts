

function getRandom(tail: number, head: number): number {
  return Math.floor(Math.random() * (head - tail) +  tail)
}

function rotate(tag: HTMLElement): void {
  console.log("rotação")
  tag.style.transition = "ease 1.5s"
  let rotation = 0
  let number = 1
  const rotationLoop = setInterval(() => {
    setTimeout(() => {
      number === 1 ? number = 2 : number = 1
      number === 1 ? rotation += 360 : rotation -= 360
      tag.style.transform = `rotate(${rotation}deg)`
    }, 1500)
  }, 1500)
}

export {
    rotate
}