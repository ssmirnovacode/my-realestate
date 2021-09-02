const bedroomBtns = [
    {
        id: 'bed-0',
        label: '0+',
        classes: 'filter-panel bed qty'
    },
    {
        id: 'bed-1',
        label: '1+',
        classes: 'filter-panel bed qty'
    },
    {
        id: 'bed-2',
        label: '2+',
        classes: 'filter-panel bed qty'
    },
    {
        id: 'bed-3',
        label: '3+',
        classes: 'filter-panel bed qty'
    },
    {
        id: 'bed-4',
        label: '4+',
        classes: 'filter-panel bed qty'
    }
];

const bathroomBtns = [
    {
        id: 'bath-1',
        label: '1+',
        classes: 'filter-panel bath qty'
    },
    {
        id: 'bath-2',
        label: '2+',
        classes: 'filter-panel bath qty'
    },
    {
        id: 'bath-3',
        label: '3+', 
        classes: 'filter-panel bath qty'
    }
];

const sqmSortOptionsFrom = [
    {
        value: 0, 
        label: 'From'
    },
    {
        value: 50, 
        label: 'From 50'
    },
    {
        value: 100, 
        label: 'From 100'
    },
    {
        value: 150, 
        label: 'From 150'
    },
    {
        value: 200, 
        label: 'From 200'
    },
    {
        value: 300, 
        label: 'From 300'
    },
    {
        value: 400, 
        label: 'From 400'
    },
    {
        value: 500, 
        label: 'From 500'
    }
];

const sqmSortOptionsTo = [
    {
        value: 100000, 
        label: 'To'
    },
    {
        value: 50, 
        label: 'To 50'
    },
    {
        value: 100, 
        label: 'To 100'
    },
    {
        value: 150, 
        label: 'To 150'
    },
    {
        value: 200, 
        label: 'To 200'
    },
    {
        value: 300, 
        label: 'To 300'
    },
    {
        value: 400, 
        label: 'To 400'
    },
    {
        value: 500, 
        label: 'To 500'
    },
    {
        value: 1000, 
        label: 'To 1000'
    },
    {
        value: 5000, 
        label: 'To 5000'
    },
];

const propertyTypes = [
    {
        value: 'apartment',
        label: 'Apartment'
    },
    {
        value: 'flat',
        label: 'Flat'
    },
    {
        value: 'house',
        label: 'House'
    },
    {
        value: 'duplex',
        label: 'Duplex'
    }
];

const priceFromArr = [
    {
        value: 0,
        label: 'From'
    },
    {
        value: 50000,
        label: 'From 50 000'
    },
    {
        value: 100000,
        label: 'From 100 000'
    },
    {
        value: 150000,
        label: 'From 150 000'
    },
    {
        value: 200000,
        label: 'From 200 000'
    },
    {
        value: 300000,
        label: 'From 300 000'
    },
    {
        value: 500000,
        label: 'From 500 000'
    }
];
 
const priceFromArrRent = [
    {
        value: 0,
        label: 'From'
    },
    {
        value: 500,
        label: 'From 500'
    },
    {
        value: 1000,
        label: 'From 1000'
    },
    {
        value: 1500,
        label: 'From 1500'
    },
    {
        value: 2000,
        label: 'From 2000'
    },
    {
        value: 3000,
        label: 'From 3000'
    },
    {
        value: 5000,
        label: 'From 5000'
    }
];

const priceToArr = [
    {
        value: 100000000,
        label: 'To'
    },
    {
        value: 50000,
        label: 'To 50 000'
    },
    {
        value: 100000,
        label: 'To 100 000'
    },
    {
        value: 150000,
        label: 'To 150 000'
    },
    {
        value: 200000,
        label: 'To 200 000'
    },
    {
        value: 300000,
        label: 'To 300 000'
    },
    {
        value: 500000,
        label: 'To 500 000'
    },
    {
        value: 1000000,
        label: 'To 1 000 000'
    },
    {
        value: 5000000,
        label: 'To 5 000 000'
    }
];

const priceToArrRent = [
    {
        value: 1000000,
        label: 'To'
    },
    {
        value: 500,
        label: 'To 500'
    },
    {
        value: 1000,
        label: 'To 1000'
    },
    {
        value: 1500,
        label: 'To 1500'
    },
    {
        value: 2000,
        label: 'To 2000'
    },
    {
        value: 3000,
        label: 'To 3000'
    },
    {
        value: 5000,
        label: 'To 5000'
    },
    {
        value: 10000,
        label: 'To 10 000'
    }
];

const priceRangeByDealFrom = (deal) => deal === 'sale' ? <>
            {priceFromArr.map(item => <option key={'priceFrom' + item.value} value={item.value}>{item.label}</option>)}
        </> : <>
            {priceFromArrRent.map(item => <option key={'priceFromRent' + item.value} value={item.value}>{item.label}</option>)}</> ;

const priceRangeByDealTo = (deal) => deal === 'sale' ? <>
        {priceToArr.map(item => <option key={'priceTo' + item.value} value={item.value}>{item.label}</option>)}
    </> : <>
        {priceToArrRent.map(item => <option key={'priceToRent' + item.value} value={item.value}>{item.label}</option>)} 
        </> ;

export {bedroomBtns, bathroomBtns, sqmSortOptionsFrom, sqmSortOptionsTo, propertyTypes, priceRangeByDealFrom, priceRangeByDealTo};