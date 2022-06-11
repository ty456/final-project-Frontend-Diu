export const isNullProperties = (obj) => {
    for (const key in obj) {
        if (obj[key] !== null && obj[key] !== '') return false;
    }
    return true;
};
export const get30DatesFromToday = () => {
    const daysDate = [];
    for (let i = 1; i <= 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        daysDate.push(date.toISOString().split('T')[0]);
    }

    return daysDate;
};

export const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};