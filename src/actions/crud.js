const uuidv4 = require('uuid/v4');

const initializeLocalStorage = () => {
    const storageLength = localStorage.length;
    if (storageLength === 0) {
        const onePlus = {
            id : uuidv4(),
            name : "One Plus 7T",
            manufacturer : "One Plus",
            processor : "Snapdrogon 855",
            price : "40,000",
        };
        const Iphone = {
            id : uuidv4(),
            name : "Iphone X",
            manufacturer : "Apple",
            processor : "A11 Bionic",
            price : "50,000",
        };
        localStorage.setItem(onePlus.id, JSON.stringify(onePlus));
        localStorage.setItem(Iphone.id, JSON.stringify(Iphone));
    }
}

const getLocalData = () => {
    let storedData = Object.values(localStorage);
    storedData = storedData.map(obj => JSON.parse(obj));
    console.log("all data", storedData);
    return storedData;
}

const deleteRowData = (key) => {
    localStorage.removeItem(key);
}

const createRowData = (data, id) => {
    const eid = id ? id : uuidv4();
    data.id = eid;
    localStorage.setItem(eid, JSON.stringify(data));
}

const getProductDataToEdit = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

module.exports = {
    initializeLocalStorage,
    getLocalData,
    deleteRowData,
    createRowData,
    getProductDataToEdit,
}
 