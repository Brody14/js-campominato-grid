console.log('Ioannis Papapetrou')

//l’utente clicca su un pulsante PLAY  per generare la una griglia quadrata 10 * 10
const btnPlay = document.querySelector('.btn-play');

btnPlay.addEventListener('click', function() {
    console.log('click');
    
})

//ogni casella deve contenere il numero corrispondente a partire da 1 fino a 100


//Ogni volta che l’utente clicca su una delle caselle della griglia stampiamo in console il numero della casella cliccata 
//(se ci riusciamo, in caso contrario stampiamo un messaggio generico)