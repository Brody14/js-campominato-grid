console.log('Ioannis Papapetrou')

//l’utente clicca su un pulsante PLAY  per generare la una griglia quadrata 10 * 10
const btnPlayElement = document.querySelector('.btn-play');
const gridElement = document.querySelector('.grid');

btnPlayElement.addEventListener('click', function() {
    //console.log('click');
    btnPlayElement.classList.add('display-none')

    let gridSide = 10;
    let cellNumber = gridSide **2
    //console.log(gridSide, cellNumber)

    for(let i = 0; i < cellNumber; i++) {
        let cellInner = i + 1;
        //console.log(cellInner)

        let widthCalc = `calc(100% / ${gridSide})`

        //creo elemento html
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell')
        cellElement.style.width = widthCalc;

        //ogni casella deve contenere il numero corrispondente a partire da 1 fino a 100
        cellElement.innerHTML = cellInner
        //console.log(cellElement)
        
        //lo "appendo" nel dom
        gridElement.appendChild(cellElement).addEventListener('click', function() {
            
            //Ogni volta che l’utente clicca su una delle caselle della griglia stampiamo in console il numero della casella cliccata 
            //(se ci riusciamo, in caso contrario stampiamo un messaggio generico)
           
            console.log(cellInner)
            
        })
    }

})

