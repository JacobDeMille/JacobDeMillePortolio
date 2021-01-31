const table = document.getElementById('tab');
const btn = document.getElementById('reset');
// Set players and current player
const player1 = "X";
const player2 = "O";
let player = player1;

function cellClick(event) {
    // store the click event in variable
    const clickedCell = event.target;
    // get the attribute set to data-cell and parse into integer
    // to be used later
    const cellIndex = parseInt(clickedCell.getAttribute('data-cell'));

    console.log(`You touched the ${clickedCell.id} cell`);
    event.target.innerHTML = player;
    // Switch players
    if (player === player1) {
        player = player2;
    } else {
        player = player1;
    }

}

function resetTable() {
    // reset table
    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            row.cells[j].innerHTML = "";
        }
        
    }
}


table.addEventListener('click', cellClick);
btn.addEventListener('click', resetTable)