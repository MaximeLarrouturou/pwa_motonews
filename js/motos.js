const motosDiv = document.querySelector('#motos');


//
//La database est retirer, pour que le fichier db.json joue son rôle avec un run de jsonserver
//

//let motos = [
//    {id: 1, name: 'MotoGP', description: 'Toutes les dernières news concernant le Championnat du Monde moto. Tous les pilotes, résultats, calendrier, courses et circuits de chaque Grand Prix', url: 'http://www.motogp.com/fr'},
//    {id: 2, name: 'WorldSBK', description: 'Championnat du monde SuperBike', url: 'http://www.worldsbk.com/fr'},
//    {id: 3, name: 'Motorsport', description: 'Tous sur la moto - Actualités, classements, résultats des courses, statistiques, photos', url: 'https://fr.motorsport.com/category/moto/'},
//    {id: 4, name: 'FFM', description: 'Championnat de France Supermotard', url: 'https://www.supermotard-france.fr/'}
//];

function loadTechnologies(motos) {
    //On ajoute le fetch('http://localhost:3001/motos') pour qu'il fasse une requête sur l'URL du serveur (pour ce cas sur db.json qui est sur port 3001)
    fetch('http://localhost:3001/motos')
        //
        // La promesse est envoyé
        //
        .then(response => { //envoi de la promesse
            response.json() // réponse à la promesse du JSON
                .then(motos => { //si la promesse est résolu il envoi le JSON
                const allMotos = motos.map(t => `<div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet"><div class="demo-card-wide mdl-card mdl-shadow--2dp"><div class="mdl-card__title"><img src="${t.wallpaper}"/><h2 class="mdl-card__title-text">${t.name}</h2></div><div class="mdl-card__supporting-text">${t.description}</div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="${t.url}">site de ${t.name}</a></div><div class="mdl-card__menu"><button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"><i class="material-icons">share</i></button></div></div></div>`)
                        .join('');

                    motosDiv.innerHTML = allMotos;
                    console.log('Liste de  motos ', motos);
                });
        })
        // Si motos est rejetée
        .catch(console.error);


}

loadTechnologies(motos);