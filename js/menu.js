const menuDiv = document.querySelector('#menu');

function loadTechnologies(menu) {
    //On ajoute le fetch('http://localhost:3001/motos') pour qu'il fasse une requête sur l'URL du serveur (pour ce cas sur db.json qui est sur port généré par json-server)
    fetch('http://localhost:3001/menu')
        //
        // La promesse est envoyé
        //
        .then(response => { //envoi de la promesse
            response.json() // réponse à la promesse du JSON
                .then(menu => { //si la promesse est résolu il envoi le JSON
                const allMenu = menu.map(t => `<a class="mdl-navigation__link" href="${t.url}">${t.name}</a>`)
                        .join('');

                    menuDiv.innerHTML = allMenu;
                    console.log('Liste du menu ', menu);
                });
        })
        // Si motos est rejetée
        .catch(console.error);
}

loadTechnologies(menu);