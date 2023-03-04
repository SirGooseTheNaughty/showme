window.filtersData = {
    type: {
        type: 'dropdown',
        title: 'Тип недвижимости',
        options: ['Апартаменты', 'Квартиры'],
        value: 'Апартаменты',
    },
    cosmetics: {
        type: 'dropdown',
        title: 'Отделка',
        options: ['Без отделки', 'С отделкой', 'С мебелью'],
        value: 'Без отделки',
    },
    district: {
        type: 'dropdown',
        title: 'Районы Москвы',
        options: ['Все районы', 'Внутри Бульварного', 'Внутри Садового', 'Внутри ТТК', 'Московская область'],
        value: 'Все районы',
    },
    bedrooms: {
        type: 'dots',
        title: 'Количество спален',
        options: [1, 2, 3, 4, '5+'],
        selected: ['5+'],
    },
    price: {
        type: 'range',
        title: 'Стоимость',
        min: 0,
        max: 1000,
        from: 0,
        to: 1000,
        parameters: 'currencies'
    },
    space: {
        type: 'range',
        title: 'Площадь',
        min: 0,
        max: 1000,
        from: 0,
        to: 1000,
        parameters: 'squaremeters'
    },
    floor: {
        type: 'range',
        title: 'Этаж',
        min: 0,
        max: 1000,
        from: 0,
        to: 1000,
    },
    year: {
        type: 'dots',
        title: 'Год сдачи',
        options: [2023, 2024, 2025, 2026, 2027, 2028],
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
