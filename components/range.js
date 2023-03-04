export const range = {
    props: ['name', 'data'],
    data() {
        return {
        }
    },
    methods: {
        setFrom: function(value) {
            this.data[this.name].from = value;
        },
        setTo: function(value) {
            this.data[this.name].to = value;
        },
        controlFromSlider: function(event) {
            event.preventDefault();
            const from = parseInt(event.target.value, 10);
            this.setFrom(from);
        },
        controlToSlider: function(event) {
            event.preventDefault();
            const to = parseInt(event.target.value, 10);
            this.setTo(to);
        },
    },
    computed: {
        from: function() {
            return this.data[this.name].from;
        },
        to: function() {
            return this.data[this.name].to;
        },
        minValue: function() {
            const { from, to } = this.data[this.name];
            if (from <= to) {
                return from;
            }
            return to;
        },
        maxValue: function() {
            const { from, to } = this.data[this.name];
            if (to >= from) {
                return to;
            }
            return from;
        },
        min: function() {
            return this.data[this.name].min;
        },
        max: function() {
            return this.data[this.name].max;
        },
        gradient: function() {
            const rangeDistance = this.max - this.min;
            const fromPosition = this.minValue - this.min;
            const toPosition = this.maxValue - this.min;
            return `--from: ${(fromPosition)/(rangeDistance)*100}%; --to: ${(toPosition)/(rangeDistance)*100}%;`;
        },
    },
    template: `
        <div class="range">
            <div class="range__input">
                <input
                    id="fromSlider"
                    type="range"
                    :value="from"
                    :min="min"
                    :max="max"
                    v-on:input="controlFromSlider"
                />
                <input
                    id="toSlider"
                    type="range"
                    :value="to"
                    :min="min"
                    :max="max"
                    v-on:input="controlToSlider"
                    :style="gradient"
                />
            </div>
            <div class="range__values">
                <div class="range__values-min">{{ minValue }}</div>
                <div class="range__values-max">{{ maxValue }}</div>
            </div>
        </div>
    `,
};
