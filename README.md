# RigOps

**Gestione squadre e cantieri** per chi lavora in quota: magazzino, cantieri, piano
operativo, note e foto. Nata dall'esigenza concreta di una squadra di lavori su fune.

👉 **Aprila qui: https://z7wireless7z.github.io/rigops/**

---

## Com'è messa adesso

Questa è l'**anteprima locale**: l'app è completa in tutte le sue schermate, ma i dati
stanno nel browser del dispositivo che la apre. Serve a provarla, a vedere se il giro è
quello giusto e a raccogliere le correzioni prima di collegare il server.

**Quello che ancora non fa:** i cinque telefoni della squadra non si parlano fra loro.
Se tu prelevi due corde, il tuo collega non lo vede. È il passo successivo.

---

## Installarla sul telefono

**Android (Chrome)**
1. Apri https://z7wireless7z.github.io/rigops/
2. Menu ⋮ → **Installa app** (oppure il bottone *Installa* se compare in alto)
3. L'icona di RigOps finisce tra le app. Da lì in poi aprila sempre da quell'icona

**iPhone (Safari — non Chrome)**
1. Apri lo stesso indirizzo in **Safari**
2. **Condividi** (il quadrato con la freccia) → **Aggiungi alla schermata Home**
3. Aprila sempre dall'icona: su iPhone i dati di un sito aperto in Safari possono essere
   cancellati dopo qualche settimana di inutilizzo, quelli dell'app installata no

Una volta installata funziona **anche senza rete**. Restano offline solo il meteo e la
ricerca degli indirizzi, che hanno bisogno di internet per forza.

---

## Le schermate

| | |
|---|---|
| **Primo avvio** | *Registra Azienda* (il capo, riceve un codice) o *Registra Operatore* (entra con quel codice) |
| **🏠 Home** | Meteo, focus di giornata, materiali da comprare, timeline di cosa ha fatto la squadra |
| **📦 Magazzino** | Materiali e quantità, allarme scorta bassa, suggerimenti già pronti per il mestiere |
| **🏗️ Cantieri** | Scheda per ogni lavoro: indirizzo con GPS e link a Maps, piano operativo a fasi, note, foto |
| **📝 Taccuino** | Note personali con foto, fuori dai cantieri |
| **👤 Profilo** | Dati e qualifiche, codice azienda, dispositivi collegati, backup |

---

## Le scelte che contano

**Foto compresse, ma nitide.** Una foto da telefono pesa 3-4 MB: dieci scatti e la memoria
è finita. RigOps le riduce a ~400 KB tenendo il lato lungo a **1920 px** e la qualità
all'**82%** — più della risoluzione di qualunque schermo di telefono. Si toccano per
aprirle a schermo intero e si zoomano con due dita senza vedere i quadretti.

**Due dispositivi per account.** Un telefono e un PC, non di più. Non si usa l'indirizzo IP
(cambia in continuazione quando esci dal Wi-Fi e ti lascerebbe fuori in cantiere): si
riconosce il dispositivo. Dal terzo, l'app chiede quale dei due sostituire e manda un
codice di conferma per email.

**Chiunque della squadra può approvare** un nuovo operatore — approva, rifiuta o lascia in
attesa — e in timeline resta scritto chi ha deciso. Il titolare può restringere
l'approvazione a sé stesso con un interruttore nel Profilo.

**Backup.** Esporta e Importa dal Profilo. Finché i dati stanno nel browser è l'unica rete
di sicurezza: se svuoti la cache, senza backup non torna niente.

---

## Il piano

- [x] Nome, logo, compressione foto con zoom, backup
- [x] Registrazione azienda/operatore con codice, approvazione, limite dispositivi
- [x] Online su GitHub Pages
- [ ] **Supabase**: dati condivisi fra i telefoni della squadra
- [ ] Regole di accesso sul server: ogni azienda vede solo i propri dati
- [ ] Invio vero delle email per il codice di sostituzione dispositivo

---

*Costruito con [Claude Code](https://claude.com/claude-code).*
