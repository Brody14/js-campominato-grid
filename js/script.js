console.log("Ioannis Papapetrou");

//l’utente clicca su un pulsante PLAY  per generare la una griglia quadrata 10 * 10
const btnPlayElement = document.querySelector(".btn-play");
const gridElement = document.querySelector(".grid");

btnPlayElement.addEventListener("click", startGame);
//console.log('click');

//FUNZIONI

function startGame() {
	resetGame();
	let gridSide = 10;
	let cellNumber = gridSide ** 2;
	//console.log(gridSide, cellNumber)

	for (let i = 0; i < cellNumber; i++) {
		let cellInner = i + 1;
		//console.log(cellInner)

		//creo elemento html

        let widthCalc = `calc(100% / ${gridSide})`;

		//creo elemento html
		const cellElement = document.createElement("div");
		cellElement.classList.add("cell");
		cellElement.style.width = widthCalc;
		//const cellElement = `<div class="cell" style="width: calc(100% / ${gridSide});" >${cellInner}</div>`;

		//lo "appendo" nel dom
        gridElement.appendChild(cellElement)
		//gridElement.innerHTML += cellElement;

		//ogni casella deve contenere il numero corrispondente a partire da 1 fino a 100
		cellElement.innerHTML = cellInner
	}

	const cellElements = document.querySelectorAll(".cell")
    
    for(let i = 0; i < cellElements.length; i++) {
        const cell = cellElements[i]

        cell.addEventListener('click', function () {
            console.log(i + 1)
            cell.classList.add('bg-violet')
        })
    }
	//console.log(cellElements);
}

function resetGame() {
	gridElement.innerHTML = "";
}
