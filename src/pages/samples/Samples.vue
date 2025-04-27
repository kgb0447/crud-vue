<script setup>
import { useRouter } from 'vue-router';

const {push} = useRouter()
const handleNavigation = () => {
    try{
        push('/samples/btn-components')
    }catch(err) {
    }
}
</script>
<template>
    <h1>Samples</h1>
    <button
    v-on:click="handleNavigation"
    >Button Component</button>
</template>

<style></style>