//import ('../css/style.css');
const motonameField = document.querySelector('#moto-name');
const motoDescriptionField = document.querySelector('#moto-description');
const motoUrlField = document.querySelector('#moto-url');
//const motoImgField = document.querySelector('#moto-img');
const addMotoForm = document.querySelector('#add-moto-form');

addMotoForm.addEventListener('submit', evt => {
    evt.preventDefault();
    
    const payload = {
        id: Date.now(),
        name: motonameField.value,
        description: motoDescriptionField.value,
        url: motoUrlField.value,
        unsynced:true,  
        //blanket: motoImgField.value
    }

    fetch('http://localhost:3001/motos', { //https://https://restapizeit-gklh2jcm9.now.sh/
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(resp => {
            console.log('resp to post to /motos', resp);
        })
        .catch(() => {
            if ('serviceWorker' in navigator && 'SyncManager' in window) {
                console.log('SyncManager supported by browser');
                console.log('we are probably offline');
                navigator.serviceWorker.ready.then(registration => {
                    // put techno in IndexedDB for later syncing
                    return putMoto(payload, motoDb.id).then(() => { //payload.id
                        // register a sync with the ServiceWorker
                        return registration.sync.register('sync-motos')
                    });
                })
            } else {
                // TODO browser does NOT support SyncManager: send data to server via ajax
                console.log('SyncManager NOT supported by your browser');
            }
        })
        .then(() => {
            clearForm();
        })
        .catch(error => console.error(error));
});

const clearForm = () => {
    motonameField.value = '';
    motoDescriptionField.value = '';
    motoUrlField.value = '';
    motonameField.focus();
};