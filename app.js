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
        
    },
    computed: {
        
    }
};