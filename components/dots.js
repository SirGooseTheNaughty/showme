export const dots = {
    props: ['name', 'data'],
    data() {
        return {
            shift: 0,
        }
    },
    methods: {
        doShift: function(direction) {
            this.shift += direction;
        },
        getSelected: function() {
            return this.data[this.name].selected;
        },
        getIsSelected: function(value) {
            return this.getSelected().includes(value);
        },
        getOptions: function() {
            return this.data[this.name].options;
        },
        toggleSelection: function(value) {
            if (!this.getIsSelected(value)) {
                this.data[this.name].selected = [...this.getSelected(), value];
            } else {
                this.data[this.name].selected = this.getSelected().filter((entry) => entry !== value);
            }
        },
        isLeftShown: function() {
            return this.shift > 0;
        },
        isRightShown: function() {
            const length = this.getOptions().length;
            if (length <= 5) {
                return false;
            }
            return length - this.shift >= 5;
        },
        getShownOptions: function() {
            const options = this.getOptions();
            const length = options.length;
            if (length <= 5) {
                return options;
            }
            let toShow = 5;
            if (this.isLeftShown()) {
                toShow -= 1;
            }
            if (this.isRightShown()) {
                toShow -= 1;
            }
            return options.slice(this.shift, this.shift + toShow);
        },
    },
    template: `
        <div class="dots">
            <div v-if="isLeftShown()" class="dot left" v-on:click="() => doShift(-1)"></div>
            <div
                v-for="option in getShownOptions()"
                class="dot"
                :class="getIsSelected(option) ? 'selected' : ''"
                :key="option"
                v-on:click="() => toggleSelection(option)"
            >
                {{ option }}
            </div>
            <div v-if="isRightShown()" class="dot right" v-on:click="() => doShift(1)"></div>
        </div>
    `,
};
