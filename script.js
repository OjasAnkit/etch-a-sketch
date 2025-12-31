const container = document.querySelector("#container")
const form = document.createElement("form")


for(let i = 0; i < 16; i ++) {
    const row = document.createElement("div")
    row.classList.add(`row${i + 1}`)

    for(let j = 0; j < 16; j++) {
        const grid = document.createElement("div")
        grid.style.width = "55px"
        grid.style.height = "55px"
        grid.style.border = "1px solid grey"
        // grid.style.backgroundColor = "lightgrey"
        
        grid.addEventListener("mousemove", (e) => {
            grid.style.backgroundColor = "#cacacaff"
            const x = e.x;
            const y = e.y;
            console.log(`X: ${x} Y: ${y}`);
        })

        // grid.addEventListener("mouseout", (e) => {
        //     grid.style.backgroundColor = "white"
        // })

        row.append(grid)
    }
    row.style.display = "flex"
    row.style.justifyContent = "center"
    container.append(row)
}