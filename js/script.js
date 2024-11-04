//Mail

const emailSalvate = ['marco@gmail.com', 'olga@gmail.com', 'loris@gmail.com', 'beppe@gmail.com']

const emailUtente = prompt("Inserisci email")

let verificaMail = false;

for (let i = 0; i < emailSalvate.length; i++) {
    const curEmail = emailSalvate[i];

    if (emailUtente === curEmail) {
        verificaMail = true;
    }
}

if (verificaMail) {
    console.log('La tua mail è corretta');
} else {
    console.log('La mail inserita non è corretta');

}


//Dadi

