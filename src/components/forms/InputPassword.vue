<template>
    <div class="form-group">
        <label v-if="label.length"> <strong> {{label}} </strong> </label>
        <input type="password"
               class="form-control" :class="error ? 'error' : ''"
               :required="required"
               :maxlength="maxLength"
               v-model="model">
    </div>
</template>

<script>

export default {
    name: "InputPassword",
    data() {
        return {
            error: false
        }
    },
    props: {
        required: {
            type: Boolean,
            required: false,
        },
        label: {
            type: String,
            required: false,
        },
        value: {
            type: String,
            required: false,
        },
        minLength: {
            type: Number,
            required: false,
            default: 4,
        },
        maxLength: {
            type: Number,
            required: false,
            default: 255,
        }
    },
    computed: {
        model: {
            get: function() {
                return this.value;
            },
            set: function(newValue) {
                let hasError = newValue.length < this.minLength;

                this.error = hasError;

                this.$emit('input', newValue);
                this.$emit('error', this.error);
            }
        },
    }
};

</script>