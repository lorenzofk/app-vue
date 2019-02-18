<template>
    <button @click="$emit('click')" type="button" class="btn btn-space btn-primary">{{ label }}</button>
</template>

<script>

export default {
    name: "SaveButton",
    props: ['label']
};

</script>

<style scoped>
    .btn-space {
        margin-right: 5px;
    }
</style>