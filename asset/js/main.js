let topstorie = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
let risultati = document.getElementById(`risultati`);
let loading = document.getElementById(`loading`);

fetch(topstorie)
.then(risposta => {
    return risposta.json()
})
.then(lista => {
    console.log(lista) // chiamo un console log per controllare che stia procedendo tutto e che sia creato l'Array con 500 risultati
    let topTEN = lista.slice(0, 10); //con slice richiamo la porzione di Array che mi interessa
    let fetchPromises = topTEN.map(idArticolo => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${idArticolo}.json?print=pretty`) //carico l'URL riferito al JSON del singolo articolo
        .then(risposta => {
            return risposta.json()
        });
    });

    Promise.all(fetchPromises) //con Promise.all itero le 10 promise in un unico risultato che crea un Array con 10 oggetti
    .then(articoli => {
        console.log(articoli) //controllo l'Array
        articoli.forEach(articolo => { //forEach itera l'array prendendo oggetto per oggetto e poi con la funzione stampo i risultati sull'HTML
            loading.remove();
            risultati.innerHTML += `<strong>ID Articolo:</strong> ${articolo.id} <strong>Titolo:</strong> ${articolo.title} <strong><br>Link articolo:</strong> <a href="${articolo.url}" target="_blank">Link</a><br><br>`;
        })
    })
});
