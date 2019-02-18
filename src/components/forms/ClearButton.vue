<template>
    <button @click="$emit('click')" type="button" class="btn btn-space btn-secondary">{{ label }}</button>
</template>

<script>

export default {
    name: "ClearButton",
    props: ['label']
};

</script>

<style scoped>
    .btn-space {
        margin-right: 5px;
    }
</style>