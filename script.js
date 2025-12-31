const container = document.querySelector("#container")
let gridArray = []


for(let i = 0; i < 16; i ++) {
    let gridRow = []
    const row = document.createElement("div")
    row.classList.add(`row${i + 1}`)

    for(let j = 0; j < 16; j++) {
        const grid = document.createElement("div")
        grid.style.width = "100px"
        grid.style.height = "100px"
        grid.style.border = "2px solid grey"
        // grid.style.backgroundColor = "lightgrey"
        
        grid.addEventListener("mouseover", (e) => {
            grid.style.backgroundColor = "lightgrey"
        })

        grid.addEventListener("mouseout", (e) => {
            grid.style.backgroundColor = "white"
        })

        row.append(grid)
    }
    row.style.display = "flex"
    row.style.justifyContent = "center"
    gridArray.push(gridRow)
    container.append(row)
}