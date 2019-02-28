const motonameField = document.querySelector('#moto-name');
const motoDescriptionField = document.querySelector('#moto-description');
const motoUrlField = document.querySelector('#moto-url');
const addMotoForm = document.querySelector('#add-moto-form');

addMotoForm.addEventListener('submit', evt => {
    evt.preventDefault();
    
    const payload = {
        name: motonameField.value,
        description: motoDescriptionField.value,
        url: motoUrlField.value
    }

    fetch('http://localhost:3001/motos', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(resp => {
            console.log(resp);
        })
        .catch(err =>console.error);
})