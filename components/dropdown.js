export const dropdown = {
    props: ['name', 'data'],
    data() {
        return {
            isOpened: false,
        }
    },
    methods: {
        open: function(event) {
            if (!this.isOpened) {
                setTimeout(() => this.isOpened = true, 5);
            }
        },
        setValue: function(event, value) {
            this.data[this.name].value = value;
        },
        close: function() {
            this.isOpened = false;
        },
    },
    mounted() {
        document.body.addEventListener('click', this.close);
    },
    destroyed() {
        document.body.removeEventListener('click', this.close);
    },
    computed: {
        value: function() {
            return this.data[this.name].value;
        },
        options: function() {
            return this.data[this.name].options.filter((option) => option !== this.value);
        },
    },
    template: `
        <div class="dropdown" :class="this.isOpened ? 'opened' : ''" v-on:click="open">
            <div class="value">{{ value }}</div>
            <div class="options">
                <div class="option" v-for="option in options" :key="option" v-on:click="(e) => setValue(e, option)">{{ option }}</div>
            </div>
        </div>
    `,
};
