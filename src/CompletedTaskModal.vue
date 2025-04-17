<script setup>

const props = defineProps(['visible', 'closeFn','tasks'])
</script>
<template>
    <div class="modal-wrapper" :style="visible ? `display: flex;`: `display:none;`" role="dialog">
        <header>
            <h2>Completed Tasks</h2>
        </header>
        <section class="completed-task-container">
            <div v-if="tasks?.length <= 0">You have not completed any task yet</div>
            <div v-for="item in tasks" class="item-wrapper" v-else>
                <label for="title" id="title">Title:</label>
                <div>{{ item.title }}</div>
                <label for="desc" id="desc">Description:</label>
                <div>{{ item.desc }}</div>
            </div>
        </section>
        <footer>
            <button v-on:click="closeFn">Close</button>
        </footer>
    </div>
</template>

<style scoped>
.modal-wrapper {
    width: 90%;
    height: 90%;
    gap: 10px;
    position: absolute;
    z-index: 20;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    outline: 0;
    border: 0;
    flex-direction: column;
    background-color: var(--vt-c-indigo);
    padding: 10px;
}

header h2 {
    text-align: center;
}

.completed-task-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;
    overflow-y: auto;
}

.item-wrapper {
    border: solid 1px #000;
    border-radius: 10px;
    padding: 10px;
}

footer {
    display: flex;
    justify-content: center;
}

footer button {
    width: 80%;
    height: 48px;
    border: 0;
    outline: 0;
    border-radius: 10px;
}
</style>