
const boardGame = (commands) => {
    let x = 0, y = 0, dir = 0

    const coords = commands.split("").map(com => {
        if (com === "M" && dir === 0) y++ 
        if (com === "M" && dir === 1) x++ 
        if (com === "M" && dir === 2) y-- 
        if (com === "M" && dir === 3) y++
        
        if (com === "R") dir++
        if (com === "L") dir--

        if (x >= 4) x = 4
        if (x <= 0) x = 0
        if (y >= 4) y = 4
        if (y <= 0) y = 0
        if (dir >= 3) dir = 3
        if (dir <= 0) dir = 0
        
        return [x, y, dir === 0 ? "N" : dir === 1 ? "E" : dir === 2 ? "W" : "S"]
    })

    return coords[coords.length - 1]

}

console.log(boardGame("MRMLMRM"))
console.log(boardGame("RMMMLMM"))
console.log(boardGame("MMMMM"))
