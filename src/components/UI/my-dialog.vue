<template>
    <div class="dialog" v-if="show" v-on:click="hideDialog">
        <div class="content" v-on:click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'myDialog',
        props: {
            show: {
                type: Boolean
            }
        },
        methods: {
            hideDialog () {
                this.$emit('update:show', false)
            }
        }
    }
</script>

<style scoped>
    .dialog {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
    }
    .content {
        margin: auto;
        background-color: white;
        border-radius: 10px;
        padding: 10px;
    }
</style>
