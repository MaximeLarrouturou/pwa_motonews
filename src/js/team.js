console.log('hello depuis team.js');

const teamDiv = document.querySelector('#team')

function loadTechnologies(team) {

    teamDiv.innerHTML = `<div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet"><div class="demo-card-wide mdl-card addArticle mdl-shadow--2dp"><a href="#"><button id="tt3" class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"><i class="material-icons">add</i></button></a></div></div>`;
    
}

loadTechnologies(team);