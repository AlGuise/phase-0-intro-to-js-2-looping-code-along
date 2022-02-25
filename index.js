/* const clients = ["Guadalupe", "Ollie", "Aki"];

function writeCard(clients) {
    for (let i = 0; i < clients.length; i++) {
        console.log(`Thank you, ${clients[i]}, for the wonderful surprise gift!`);
    }
    return clients;
}

writeCard(clients)
*/
const gifts = ["Guadalupe", "Ollie", "Aki"];

function writeCards(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Thank you, ${gifts[i]}, for the wonderful surprise gift!`);
        i++;
    }
    return gifts;
}
writeCards(gifts);

function countdown() {
    let countdown = 10;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}
console.log(countdown);