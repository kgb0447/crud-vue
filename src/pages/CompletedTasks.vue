<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter()
const items = ref([]);

onMounted(() => {
    const localizedTasks =JSON.parse(localStorage.getItem('completedTasks'));
    items.value = localizedTasks;
})
</script>
<template>
    <div class="wrapper">
        <header>
            <h2>Completed Tasks</h2>
        </header>
        <section class="completed-task-container">
            <div v-if="items?.length <= 0">You have not completed any task yet</div>
            <div v-for="item in items" class="item-wrapper" v-else>
                <label for="title" id="title">Title:</label>
                <div>{{ item.title }}</div>
                <label for="desc" id="desc">Description:</label>
                <div>{{ item.desc }}</div>
            </div>
        </section>
        <footer>
            <button v-on:click="() => {
                router.back()
            }">Close</button>
        </footer>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    height: 100dvh;
    flex-direction: column;
    background-color: var(--vt-c-indigo);
    margin: 0;
    padding-bottom: 10px;
    box-sizing: border-box;
}

header h2 {
    text-align: center;
}

.completed-task-container {
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    padding: 10px;
}

.item-wrapper {
    border: solid 1px #000;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
}
.item-wrapper label{
    font-size: .8rem;
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