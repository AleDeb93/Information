# Information
Il progetto prevede la creazione di un applicazione in grado di collegarsi con gli API di HackerNews (in particolare il servizio collegato è quello delle _New, Top and Best Stories_) e successivamente mostrare a schermo i primi 10 risultati per non affaticare troppo il caricamento della pagina.
In particolare il funzionamento è il seguente:
1. Viene chiamato il JSON contenente i 500 ID e viene processato
2. Tramite i metodi slice e map in "collaborazione" con il contatore index vengono selezionati i primi 10 ID
3. Viene effettuata una seconda chiamata ai 10 link corrispondenti ai 10 ID recuperatie e processati
4. A questo punto vengono iterati gli articoli con forEach e vengono restituiti a schermo i dati che ci interessano per ogni articolo 
5. Terminata la chiamata e stampati i risultati viene aggiornato incrementato il contatore di 10
  
Al termine della chiamata a schermo vengono visualizzati titolo, data e link all'articolo!
  
![image](https://user-images.githubusercontent.com/121309726/232818999-d2603805-29fe-401e-aa04-a5da0cba9266.png)
  

Tramite apposito pulsante, è possibile caricare altri 10 risultati, e cosi via, fino al termine dei 500 risultati ottenuti con la prima chiamata, questo è possibile grazie ad un contatore esterno alla funzione, che si incrementa ad ogni chiamata e ci permette di scorrere l'array lista. 

Il progetto è stato svolto come test pratico per il corso di JavaScript Advanced di Start2Impact University
L'applicazione è stata deployata sul web host gratuito netlify ed è visitabile al link: https://s2i-information.netlify.app/
