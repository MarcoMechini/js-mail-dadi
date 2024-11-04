//Mail

const emailSalvate = ['marco@gmail.com', 'olga@gmail.com', 'loris@gmail.com', 'beppe@gmail.com']

const emailUtente = prompt("Inserisci email")

//Di base la mail inserita non è corretta
let verificaMail = 'La mail inserita non è corretta';


for (let i = 0; i < emailSalvate.length; i++) {
    const curEmail = emailSalvate[i];

    //se la mail inserita è corretta cambia il valore di verifica mail e lo mette a true
    if (emailUtente === curEmail) {
        verificaMail = 'La tua mail è corretta';
    }
}

console.log(verificaMail);
