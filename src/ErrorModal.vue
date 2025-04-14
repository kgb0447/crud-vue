<script setup>

const props = defineProps(['title','message','onClose','visible']);
</script>
<template>
    <dialog :open="visible">
<header>
    <div>Task Creation Error!!</div>
</header>
<div>
    <div>{{ title }}</div>
    <div>{{ message }}</div>
</div>
<footer>
    <button type="button" v-on:click="onClose">Okay</button>
</footer>
</dialog>
</template>
<style>

</style>