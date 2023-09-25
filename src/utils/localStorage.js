export const getDataFromLocalStorage = () => {
    const data = localStorage.getItem('donation');
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

export const saveDatatoLocalStorage = id => {

    const data = getDataFromLocalStorage();
    const isIdExists = data?.includes(id);

    if (!isIdExists) {
        data.push(id);

        localStorage.setItem('donation', JSON.stringify(data));
        return true;
    }
    return false
}