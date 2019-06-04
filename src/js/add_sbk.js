//import ('../css/style.css');
const sbknameField = document.querySelector('#sbk-name');
const sbkDescriptionField = document.querySelector('#sbk-description');
const sbkUrlField = document.querySelector('#sbk-url');
//const sbkImgField = document.querySelector('#sbk-img');
const addSbkForm = document.querySelector('#add-sbk-form');


addSbkForm.addEventListener('submit', evt => {
    evt.preventDefault();
    
    const payload = {
        name: sbknameField.value,
        description: sbkDescriptionField.value,
        url: sbkUrlField.value,
        //blanket: sbkImgField.value
    }

    fetch('http://localhost:3001/sbk', { 
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