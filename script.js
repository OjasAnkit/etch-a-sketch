document.body.style.textAlign = "center"
document.body.style.boxSizing = "border-box"
const header = document.querySelector("#header")
const container = document.querySelector("#container")

function createSizeInputForm () {
    const form = document.createElement("form")
    const label = document.createElement("label")
    const input = document.createElement("input")
    const btn = document.createElement("button")

    form.setAttribute("id", "gridForm")
    label.setAttribute("for", "gridForm")
    input.setAttribute("id", "gridSize")
    input.setAttribute("max", "100")
    input.setAttribute("min", "1")

    label.textContent = "Enter Grid size: "
    btn.textContent = "\tSubmit"
    btn.type = "submit"
    btn.style.width = "75px"
    input.type = "number"

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const newGridSize = document.getElementById("gridSize").value
        if(newGridSize == "") {
            alert("Please enter a valid grid size!")
        } else {
            createGrid(newGridSize)
        }
    })

    form.append(label)
    form.append(input)
    form.append(btn)
    form.appendChild(document.createElement("br"))

    form.style.display = "inline-block"

    header.append(form)
}

function createControls() {
    const div = document.createElement("div")
    const clearButton = document.createElement("button")
    
    div.setAttribute("id", "gameControl")
    clearButton.setAttribute("id", "clearButton")
    clearButton.textContent = "Clear Canvas"

    clearButton.addEventListener("click", (e) => {
        const squares = document.querySelectorAll("#square")
        for(const square of squares) {
            square.style.backgroundColor = ""
        }
    })

    div.append(clearButton)

    header.append(div)
}

function createGrid(gridSize) {
    if(!!document.getElementById("grid")) {
        container.removeChild(document.getElementById("grid")) // remove existing grid before appending
    }
    console.log(`Creating grid of size ${gridSize} x ${gridSize}`)
    const grid = document.createElement("div")
    grid.setAttribute("id", "grid")
    const boxHeight = 960 / gridSize

    for(let i = 0; i < gridSize; i ++) {
        const row = document.createElement("div")
        row.classList.add(`row${i + 1}`)

        for(let j = 0; j < gridSize; j++) {
            const square = document.createElement("div")
            square.style.width = `${boxHeight}px`
            square.style.height = `${boxHeight}px`
            square.style.border = "1px solid grey"
            square.setAttribute("id", "square")
            
            square.addEventListener("mouseenter", (e) => {
                // square.style.backgroundColor = "#cacacaff"
                if(!!square.style.backgroundColor == "") {
                    const x = e.x, y = e.y
                    square.style.backgroundColor = `rgb(${x % 255}, ${y % 255}, ${(x + y) % 255})`
                } else {
                    
                }
            })

            row.append(square)
        }
        row.style.display = "flex"
        row.style.justifyContent = "center"
        grid.append(row)
    }
    container.append(grid)
}

createSizeInputForm()
createGrid(16)
createControls()
