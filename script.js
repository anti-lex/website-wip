const wrapper = document.getElementById("tiles");
let columns = 0,
    rows = 0


const colors = [
    "rgb(89,14,151)",
    "rgb(56,5,33)",
    "rgb(18,10,80)",
    "rgb(183,7,40)",
    "rgb(124,52,110)",
    "rgb(52,44,76)",
    "rgb(116,96,145)",
]
let count = -1;

const handleOnClick = index => {
    count = count + 1
    anime({
        targets: ".tile",
        backgroundColor: colors[count % (colors.length -1)],
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    })
}
const createTile = index => {
    const tile = document.createElement("div");

    tile.classList.add("tile");

    tile.onclick = e => handleOnClick(index)

    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

createTiles(columns * rows);

const createGrid = () => { 
    wrapper.innerHTML = "";

    columns = Math.floor(document.body.clientWidth / 54.67);
    rows = Math.floor(document.body.clientHeight / 73);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    createTiles(columns * rows);
}
createGrid();
window.onresize = () => createGrid();