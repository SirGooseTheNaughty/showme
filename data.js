window.filtersData = {
    type: {
        type: 'dropdown',
        title: 'Тип недвижимости',
        options: [],
        value: null,
    },
    cosmetics: {
        type: 'dropdown',
        title: 'Отделка',
        options: [],
        value: null,
    },
    district: {
        type: 'dropdown',
        title: 'Районы Москвы',
        options: [],
        value: null,
    },
    bedrooms: {
        type: 'dots',
        title: 'Количество спален',
        options: [],
        selected: [],
    },
    price: {
        type: 'range',
        title: 'Стоимость',
        min: null,
        max: null,
        from: null,
        to: null,
        parameters: 'currencies'
    },
    space: {
        type: 'range',
        title: 'Площадь',
        min: null,
        max: null,
        from: null,
        to: null,
        parameters: 'squaremeters'
    },
    floor: {
        type: 'range',
        title: 'Этаж',
        min: null,
        max: null,
        from: null,
        to: null,
    },
    year: {
        type: 'dots',
        title: 'Год сдачи',
        options: [],
        selected: [],
    },
    currency: {
        value: 'RUB',
        options: ['RUB', 'USD', 'EUR'],
        rates: {
            'RUB-USD': 75,
            'RUB-EUR': 85,
            'USD-EUR': 1.1,
        },
    }
};
