

function doesKeyExist(key: number, keysArray: number[]): boolean {
    return keysArray.includes(key)
}

function doesLabelExist(label: string, labelsArray: string[]): boolean {
    return labelsArray.includes(label)
}

function isMatchOver(dateDate: string): boolean {
    // T12 needed to be embedded, because of time !=
    const dateRequested = new Date(dateDate + 'T12:00:00')
    dateRequested.setHours(0, 0, 0, 0)
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0)
    // console.log(dateRequested.getDate(), dateNow.getDate())
    return dateRequested < dateNow
}

function setPerformance(performanceVal: number): string {
    if(performanceVal <= 3) return "crimson"
    else if(performanceVal > 3 && performanceVal < 7) return "yellow"
    else if(performanceVal >= 7 && performanceVal < 10) return "aqua"
    return "white"
}

function getRandomIndex(tail: number, head: number): number {
    return Math.floor(Math.random() * (head - tail) + tail)
}

/* console.log(isMatchOver('2025-09-20'))
console.log(isMatchOver('2025-09-21'))
console.log(isMatchOver('2025-09-22')) */

export {
    doesKeyExist, doesLabelExist, isMatchOver, setPerformance, getRandomIndex
}