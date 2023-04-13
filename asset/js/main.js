let topstorie = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
let risultati = document.getElementById(`risultati`);

fetch(topstorie)
.then(risposta => {
    return risposta.json()
})
.then(lista => {
    console.log(lista)
    let topTEN = lista.slice(0, 10);
    let fetchPromises = topTEN.map(idArticolo => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${idArticolo}.json?print=pretty`)
        .then(risposta => {
            return risposta.json()
        });
    });

    Promise.all(fetchPromises)
    .then(articoli => {
        console.log(articoli)
        articoli.forEach(articolo => {
            risultati.innerHTML += `<strong>ID Articolo:</strong> ${articolo.id} <strong>Titolo:</strong> ${articolo.title} <strong><br>Link articolo:</strong> <a href="${articolo.url}">Link</a><br><br>`;
        })
    })
});
