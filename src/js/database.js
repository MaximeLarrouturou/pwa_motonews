function motoDb() {
    return idb.open('moto-store', 2, upgradeDB => {
        switch (upgradeDB.oldVersion) {
            case 0: upgradeDB.createObjectStore('moto', { autoIncrement : true })
        }
    })
}

function getMoto(id) {
    return motoDb().then(db => {
        return db.transaction('moto')
            .objectStore('moto').get(id);
    })
}

function putMoto(value, key) { //function putMoto(value, key) 
    return motoDb().then(db => {
        const tx = db.transaction('moto', 'readwrite');
        tx.objectStore('moto').put(value, key); //tx.objectStore('moto').put(value, key);
        return tx.complete;
    });
}

function deleteMoto(id) {
    return motoDb().then(db => {
        const tx = db.transaction('moto', 'readwrite');
        tx.objectStore('moto').delete(id);
        return tx.complete;
    });
}

function clearMotos() {
    return motoDb().then(db => {
        const tx = db.transaction('moto', 'readwrite');
        tx.objectStore('moto').clear();
        return tx.complete;
    });
}

function getAllMotos() {
    return motoDb().then(db => {
        return db.transaction('moto')
            .objectStore('moto').getAllKeys().then(keys => {
                return Promise.all(keys.map(id => getMoto(id).then(content => (Object.assign({}, { id }, content)))))
            });
    })
}