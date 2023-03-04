export const dropdown = {
    props: ['name', 'data'],
    data() {
        return {
            isOpened: false,
        }
    },
    methods: {
        toggle: function() {
            this.isOpened = !this.isOpened;
        },
        value: function() {
            return this.data[this.name].value
        },
        setValue: function(value) {
            this.data[this.name].value = value;
        },
        getOptions: function() {
            return this.data[this.name].options.filter((option) => option !== this.value());
        }
    },
    template: `
        <div class="dropdown" :class="this.isOpened ? 'opened' : ''" v-on:click="toggle">
            <div class="value">{{ value() }}</div>
            <div class="options">
                <div class="option" v-for="option in getOptions()" :key="option" v-on:click="() => setValue(option)">{{ option }}</div>
            </div>
        </div>
    `,
};
