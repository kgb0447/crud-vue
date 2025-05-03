<script setup>
const prop = defineProps({
    containerClass:{
        type: Array,
        default:'',
    }
})
const year = new Date().getFullYear();
</script>
<template>
    <div :class="['container',containerClass]">
        <slot name="children">No Children was passed</slot>
        <slot name="footer">
            <div  class="footer-default">All rights reserved {{ year }}</div>
        </slot>
    </div>
</template>
<style scoped>
    .container{
        width: 100%;
        height: 100dvh;
        box-sizing: border-box;
    }
    .defaultChildren {
        font-size: 1.5rem;
        font-weight: 500;
        color: #000;
    }
    .footer-default{
        color:var(--vt-c-indigo);
        font-size: 0.8rem;
        font-weight: 600;
        padding: 10px;
    }
</style>