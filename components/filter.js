export const filter = {
    props: ['name', 'data', 'default-value'],
    methods: {
        getTitle: function() {
            return this.data[this.name].title;
        },
        getType: function() {
            return this.data[this.name].type;
        },
        getParameters: function() {
            return this.data[this.name].parameters;
        },
    },
    mounted() {
        console.log(this.getType())
    },
    template: `
        <div class="filter">
            <div class="filter__title">{{ getTitle() }}</div>
            <component :is="getType()" :name="name" :default-value="defaultValue" :data="data"></component>
            <component v-if="!!getParameters()" :is="getParameters()"></component>
        </div>
    `,
};
