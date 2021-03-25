const getComarcas = (arr, prov) => {
    const totalArr = arr.filter(item => item.province === prov).map(item => item.comarca);
    let pureArr = [...new Set(totalArr)];
    return pureArr;
}

const getCities = (arr, com) => {
    const totalArr = arr.filter(item => item.comarca === com).map(item => item.city);
    let pureArr = [...new Set(totalArr)];
    return pureArr;
}
 
const filterItems = (items, filters) => {
    return items.filter(item => (filters.apartment === true && item.type === 'apartment') || 
                        (filters.flat === true && item.type === 'flat') || (filters.house === true && item.type === 'house')
                        || (filters.duplex === true && item.type === 'duplex') )
        .filter(item => filters.province === 'all' ? item : item.province === filters.province)
        .filter(item => filters.comarca === 'all' ? item : item.comarca === filters.comarca )
        .filter(item => filters.city === 'all' ? item : item.city === filters.city)
        .filter(item => +filters.priceFrom > 0 ? item.price >= +filters.priceFrom : item)
        .filter(item => +filters.priceTo < 100000000 ? item.price <= +filters.priceTo : item)
        .filter(item => +filters.sqmFrom > 0 ? item.surface >= +filters.sqmFrom : item)
        .filter(item => +filters.sqmTo < 100000000 ? item.surface <= +filters.sqmTo : item);
};

const sortItems = (arr, sortType) => {
    switch (sortType) {
        case 'highest price':
            return arr.sort( (a,b) => a.price > b.price ? 1 : -1);
        case 'lowest price':
            return arr.sort( (a,b) =>a.price < b.price ? 1 : -1);
        case 'most sqm':
            return arr.sort( (a,b) => a.surface > b.surface ? 1 : -1);
        case 'least sqm':
            return arr.sort( (a,b) => a.surface < b.surface ? 1 : -1);    
        default:
            return arr;
    }
}

export {getCities, getComarcas, filterItems, sortItems};