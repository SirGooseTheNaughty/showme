// import { data } from "./data.js";

export const appComponent = {
    el: '#filters',
    data() {
        return {
            data: { ...window.filtersData },
        };
    },
    async mounted() {
        // console.log(window.filtersData);
    },
    watch: {
        
    },
    methods: {
        filter: function() {
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
            console.log(filterText)
            document.querySelector('.result').textContent = filterText;
        }
    },
    computed: {
        
    }
};