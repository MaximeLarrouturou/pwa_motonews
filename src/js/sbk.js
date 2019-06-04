//import ('../css/style.css');

console.log('hello depuis main');
const sbkDiv = document.querySelector('#sbk')

function loadTechnologies(sbk) {
    //On ajoute le fetch('http://localhost:3001/{mon JSON}') pour qu'il fasse une requête sur l'URL du serveur (pour ce cas sur db.json qui est sur port 3001)
    fetch('http://localhost:3001/sbk')
        //
        // La promesse est envoyé
        //
        .then(response => { //envoi de la promesse
            response.json() // réponse à la promesse du JSON
                .then(sbk => { //si la promesse est résolu il envoi le JSON
                    const allSbk = sbk.map(t => `
                <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
                    <div class="demo-card-square mdl-card mdl-shadow--2dp">
                        <div class="mdl-card__title mdl-card--expand">
                            <h2 class="mdl-card__title-text">${t.name}</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            ${t.description}  
                        </div>
                        <div class="mdl-card__actions mdl-card--border">
                            <a href="${t.url}" target="_blank" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">site de ${t.name}</a>
                            <div class="mdl-layout-spacer"></div>
                                <i class="material-icons">public</i>
                        </div>
                        <div class="mdl-card__menu">
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect white">voir les teams</button>
                        </div>
                    </div>
                </div>
                `)
                        .join('');

                    sbkDiv.innerHTML = allSbk + `
                        <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
                        <div class="demo-card-square mdl-card mdl-shadow--2dp addArticle">
                                <a href="add_sbk.html">
                                    <button id="tt3" class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"><i class="material-icons">add</i></button>
                                </a>
                            </div>
                        </div>
                    `;

                    console.log('Liste de  sbk ', sbk);
                });
                
            })
            // Si motos est rejetée
            .catch(console.error);
}

loadTechnologies(sbk);


if(navigator.serviceWorker) {
    navigator.serviceWorker
        .register('../sw.js')
        .catch(err => console.error('service worker NON enregistré', err));
}
