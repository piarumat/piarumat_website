const bottone = document.getElementById('bottone-copia');
const toast = document.getElementById('toast-notifica');
let timerToast;

bottone.addEventListener('click', (e) => {
    e.preventDefault();
    
    navigator.clipboard.writeText("hyper-mc.it")
        .then(() => {
            // Mostra la notifica
            toast.classList.add('mostra');
            
            // Resetta il timer precedente se l'utente clicca più volte rapidamente
            clearTimeout(timerToast);
            
            // Nasconde la notifica automaticamente dopo 3 secondi
            timerToast = setTimeout(() => {
                toast.classList.remove('mostra');
            }, 3000);
        })
        .catch(err => {
            console.error("Errore durante la copia: ", err);
        });
});