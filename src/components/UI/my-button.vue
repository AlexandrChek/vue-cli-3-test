<template>
    <button><slot></slot></button>
</template>

<script>
    export default {
        name: 'myButton'
    }
</script>

<style scoped>
button {
    margin: 7px;
}
</style>