<script setup>

const props = defineProps({
    onClick:{
        type: Function,
        default:()=>{},
        required: true
    },
    label: {
        type: String,
        default: '',
        required: true
    },
    btnClass: {
        type: Array,
        default:'',
        required: false
    }
})

const emit = defineEmits(['message']);
emit('message','hello from button')
</script>
<template>
    <button type="button" :class="['btn',btnClass]" @click="onClick">{{ label }}</button>
</template>
<style scoped>
.btn{
    width: 100%;
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    background-color: var(--primary-color);
    border: 0;
    outline: 0;
    cursor: pointer;
}
</style>