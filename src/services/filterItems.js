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

export default filterItems;