<script setup>
    const props = defineProps(['title','message','onClose','onDelete','onComplete','visible']);
</script>
<template>
    <dialog :open="visible" class="modal-wrapper">
        <header>Task Details</header>
        <div class="content-wrapper">
        <span>Title:</span>
        <div class="txt txt__title" id="title">{{ title }}</div>
        <span>Description:</span>
        <div class="txt txt__message" id="message">{{ message }}</div>
    </div>
        <footer>
            <button class="btn btn--close" v-on:click="onClose">Close</button>
            <button class="btn btn--complete" v-on:click="onDelete">Delete</button>
            <button class="btn btn--delete" v-on:click="onComplete">Complete</button>
        </footer>
    </dialog>
</template>
<style scoped>
.modal-wrapper{
    position: absolute;
    left: 50%;
    top: 10dvh;
    transform: translate(-50%);
    border-radius: 10px;
    outline: 0;
    border-width: 0;
    width: 86dvw;
    padding:10px 0 10px 0;
    background: var(--secondary-color);
}
header{
    font-weight: 800;
    text-align: center;
    color: #fff;
}
.content-wrapper{
    padding: 10px;
}
.txt{
    color: var(--vt-c-text-light-2);
    padding: 10px;
    border: solid 1px #fff;
    border-radius: 10px;
}

.txt__title{
    font-size: 18px /1.6rem;
}
.txt__message{
    font-size:18px /1.6rem;
    height: clamp(100px,200px,300px);
    overflow-y: auto;
    text-wrap: wrap;
}
footer{
    display: flex;
    margin-top: auto;
    width: 100%;
    gap: 10px;
    padding: 0 10px 0 10px;
}
.btn{
    flex: 1;
    height: 48px;
    align-self: center;
    outline: 0;
    border: 0;
    border-radius: 10px;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
}

.btn--close{
    background-color: red;
}
.btn--complete{
    background-color: green;
}.btn--delete{
    background-color: yellow;
}
</style>