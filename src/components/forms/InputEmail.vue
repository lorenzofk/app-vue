<template>
    <div class="form-group">
        <label v-if="label.length"> <strong> {{label}} </strong> </label>
        <input type="email" 
               class="form-control" :class="error ? 'error' : ''"
               :required="required"
               :maxLength="maxLength"
               v-model="model">
    </div>
</template>

<script>

export default {
    name: "InputEmail",
    data() {
        return {
            error: false
        }
    },
    props: {
        required: {
            type: Boolean,
            required: false
        },
        label: {
            type: String,
            required: false
        },
        value: {
            type: String,
            required: false
        },
        maxLength: {
            type: Number,
            required: false,
            default: 255
        }
    },
    computed: {
        model: {
            get: function() {
                return this.value;
            },
            set: function(newValue) {
                var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                this.error = ! regex.test(newValue);

                this.$emit('input', newValue);
                this.$emit('error', this.error);
            }
        },
    },
};

</script>