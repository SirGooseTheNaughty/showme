// import { data } from "./data.js";
import { STORE_UID } from "./constants.js";

export const appComponent = {
    el: '#filters',
    data() {
        return {
            data: { ...window.filtersData },
            products: [],
            isLoading: true,
            isError: false,
        };
    },
    async mounted() {
        fetch(window.dev ? './mockedProducts.json' : `https://store.tildacdn.com/api/getproductslist/?storepartuid=${STORE_UID}&getparts=true&getoptions=true`)
            .then((res) => res.json())
            .then((res) => {
                if (res.products?.length > 0) {
                    this.preformProducts(res.products);
                } else {
                    this.isError = true;
                }
            })
            .catch((e) => {
                console.error('Ошибка запроса товаров', e);
                this.isError = true;
            })
            .finally(() => console.log(this.products) || (this.isLoading = false));
    },
    methods: {
        preformProducts: function(products) {
            this.products = products.map((property) => {
                const { uid, title, price: rawPrice, characteristics = [] } = property;
                const price = parseInt(rawPrice, 10) || null;

                this.addFilterOption('price', price, title);

                const parameters = characteristics.reduce((acc, char) => {
                    this.addFilterOption(char.title, char.value, title);
                    return { ...acc, [char.title]: char.value };
                }, {});

                return {
                    uid,
                    title,
                    price,
                    ...parameters,
                };
            });
        },
        addFilterOption: function(title, value, propertyTitle) {
            const filterData = this.data[title];
            switch (filterData.type) {
                case 'dropdown':
                case 'dots':
                    if (!filterData.options.includes(value)) {
                        this.data[title].options.push(value);
                    }
                    break;
                case 'range':
                    const numericValue = parseInt(value, 10);
                    if (value !== null && (filterData.min === null || numericValue < filterData.min)) {
                        this.data[title].min = numericValue;
                        this.data[title].from = numericValue;
                    }
                    if (value !== null && (filterData.max === null || numericValue > filterData.max)) {
                        this.data[title].max = numericValue;
                        this.data[title].to = numericValue;
                    }
                    break;
                default:
                    console.error(`Задана несуществующая характеристика ${title} в товаре ${propertyTitle}`);
            }
        },
        filter: function() {
            const itemsToBeShown = this.products
                .filter((product) => {
                    for (let [key, filter] of Object.entries(this.data)) {
                        const productValue = product[key];
                        switch (filter.type) {
                            case 'dropdown':
                                if (filter.value && productValue !== filter.value) {
                                    return false;
                                }
                                break;
                            case 'dots':
                                if (filter.selected?.length > 0 && !filter.selected.includes(productValue)) {
                                    return false;
                                }
                                break;
                            case 'range':
                                if (filter.from !== null && filter.to !== null && productValue < filter.from || productValue > filter.to) {
                                    return false;
                                }
                                break;
                        }
                    }
                    return true;
                });

            itemsToBeShown.forEach(({ title, uid }) => console.log(`show ${title} with uid ${uid}`));

            let filterText = '';
            Object.entries(this.data).forEach(([key, filter]) => {
                switch (filter.type) {
                    case 'dropdown':
                        filterText += `\n ${filter.title}: ${filter.value}`;
                        break;
                    case 'dots': 
                        filterText += `\n ${filter.title}: ${filter.selected.join(', ')}`;
                        break;
                    case 'range': 
                        filterText += `\n ${filter.title}: from ${filter.from} to ${filter.to}`;
                        break;
                }
            });
            filterText += '\n\nБудут показаны:';
            itemsToBeShown.forEach(({ title, uid }) => {
                filterText += `\n${title} с uid ${uid}`;
            });
            document.querySelector('.result').textContent = filterText;
        }
    },
};