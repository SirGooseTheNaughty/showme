export const currencies = {
    props: ['name', 'data'],
    data() {
        return {
        }
    },
    methods: {
    },
    template: `
        <div class="currencies topright">
            <div class="currencies__value checked">₽</div>
            <div class="currencies__value">$</div>
            <div class="currencies__value">€</div>
        </div>  
    `,
};
