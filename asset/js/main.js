let api = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
let risultati = document.getElementById(`risultati`);
let button = document.getElementById(`carica`)
let index = 0;

function hackerNews() {
    fetch(api)
    .then(risposta => {
        return risposta.json()
    })
    .then(lista => {
        let tenNews = lista.slice(index,index+10);
        let fetchPromises = tenNews.map(idNews => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${idNews}.json?print=pretty`)
            .then(risposta => {
                return risposta.json();
            })
        })

        Promise.all(fetchPromises)
        .then(articoli => {
            if(articoli.length === 0){
                risultati.innerHTML += `Nessun altro risultato diponibile`;
                button.remove()
            } else {
                articoli.forEach(articolo => {
                    const data = new Date(articolo.time*1000).toLocaleDateString();
                    risultati.innerHTML += `<strong>Titolo:</strong> ${articolo.title} <strong><br>Data articolo:</strong> ${data} <strong>Link articolo:</strong> <a href="${articolo.url}" target="_blank">Link</a><br><br>`                
                })
                index += 10;
            }
        })
        .catch(e => {
            risultati.innerHTML += `Qualcosa è andato storto nel caricamento dei dati <br>Controlla la console!`;
            console.error(e);
        })
    })
}

hackerNews()
button.addEventListener(`click`, hackerNews)
