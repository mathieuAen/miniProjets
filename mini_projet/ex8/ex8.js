var currentPlayer = "X";
var board = new Array(9).fill(null);

function createBoard() {
    var compteur = 0;
    const table = document.createElement("table")
    for (let i = 0; i < 3; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            const col = document.createElement("td")
            col.setAttribute("id", "box-" + compteur);
            col.addEventListener("click", play);
            row.appendChild(col)
            compteur++;
        }
        table.appendChild(row);
    }
    return table;
}

function play(event) {
    const index = event.target.id.split('-')[1];
    if (board[index] != null) {
        console.log("Cette case est deja remplie");
    } else {
        board[index] = currentPlayer;
        // Rempli la case
        var td = document.getElementById(event.target.id);
        var text = document.createTextNode(currentPlayer);
        td.appendChild(text);
    }
    var gagnant = checkWinner(currentPlayer);
    if (gagnant) {
        endGame(currentPlayer);
    }
    swapTurn();
}


function checkWinner(actualPlayer) {
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
        var align1 = (board[WINNING_COMBINATIONS[i][0]] == actualPlayer);
        var align2 = (board[WINNING_COMBINATIONS[i][1]] == actualPlayer);
        var align3 = (board[WINNING_COMBINATIONS[i][2]] == actualPlayer);   
        if (align1 && align2 && align3) {
            return true;
        }     
    }
    // egalité
    var totalNull = 0;
    for (let j = 0; j < board.length; j++) {
        if (board[j] == null) {
            totalNull++;
        }        
    }
    if (totalNull == 0) {
        draw();
    }
    return false;
}

function endGame(winner) {
    const container = document.getElementById('morpion-container');
    var text = document.createTextNode(winner + " a gagne la partie !");
    container.appendChild(text);

    let btn = document.createElement("button");
    btn.innerHTML = "Rejouer";

    btn.onclick = function () {
        container.innerHTML = "";
        board = new Array(9).fill(null);
        container.appendChild(createBoard());
    };
    container.appendChild(btn);
}

function draw() {
    const container = document.getElementById('morpion-container');
    var text = document.createTextNode("Egalité");
    container.appendChild(text);

    let btn = document.createElement("button");
    btn.innerHTML = "Rejouer";

    btn.onclick = function () {
        container.innerHTML = "";
        board = new Array(9).fill(null);
        container.appendChild(createBoard());
    };
    container.appendChild(btn);
}

function swapTurn() {
    if (currentPlayer == "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
}

const container = document.getElementById('morpion-container');
container.appendChild(createBoard());