
//Dadi

let userScore = 0;
let pcScore = 0;

let maniDaGiocare = parseInt(prompt('Quante mani vuoi giocare?'))
for (let i = 0; i < maniDaGiocare; i++) {

    const sortPc = Math.floor((Math.random() * 6) + 1);
    const sortUser = Math.floor((Math.random() * 6) + 1);

    console.log(`Il tuo dado: ${sortUser}`);
    console.log(`Il dado del Pc: ${sortPc}`);

    if (sortUser === sortPc) {
        console.log('Pareggio');
    } else if (sortUser > sortPc) {
        console.log('Hai vinto');
        userScore++;
    } else {
        console.log('Il pc ha vinto :(');
        pcScore++;
    }

    console.log(`User score ${userScore} - Pc score ${pcScore}`);
}
