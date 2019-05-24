const mobileDiv = document.querySelector('#mobile');

function loadTechnologies(mobile) {
    //On ajoute le fetch('http://localhost:3001/motos') pour qu'il fasse une requête sur l'URL du serveur (pour ce cas sur db.json qui est sur port généré par json-server)
    fetch('http://localhost:3001/mobile')
        //
        // La promesse est envoyé
        //
        .then(response => { //envoi de la promesse
            response.json() // réponse à la promesse du JSON
                .then(mobile => { //si la promesse est résolu il envoi le JSON
                const allMobile = mobile.map(t => `<a class="mdl-navigation__link" href="${t.url}">${t.name}</a>`)
                        .join('');

                    mobileDiv.innerHTML = allMobile;
                    console.log('Liste du mobile ', mobile);
                });
        })
        // Si motos est rejetée
        .catch(console.error);
}

loadTechnologies(mobile);