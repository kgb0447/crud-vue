<script setup>
import { ref, computed, onMounted, onUpdated, onBeforeMount } from 'vue'
import ViewTaskModal from './components/icons/ViewTaskModal.vue';
import ErrorModal from './ErrorModal.vue';
import CompletedTaskModal from './CompletedTaskModal.vue'
const inputs = ref({});
const tasks = ref([]);
const selectedTask = ref({title:'',desc:''});
const shouldShowError = ref(false)
const shouldShowCompleted = ref(false)

// onMounted(() => {
    window.addEventListener('storage',(e) => {
        if(e.key === 'completedTasks'){
            console.log("Value changed")
        }
    })
// })

const handleSubmit = (e) => {
  e.preventDefault();
  const alReadyExist = !!tasks.value.find(item => item.title === inputs.value.title);
  if(alReadyExist) {
    shouldShowError.value = true
  } else {
    tasks.value.push({ ...inputs.value })
    inputs.value = {};
  }
}

const fields = [
  { id: 1, label: 'Title', value: 'title', type: 'text' },
  { id: 2, label: 'Description', value: 'description', type: 'textarea' },
  // { id: 3, label: 'Start Date: ', value: 'date', type: 'date' },
]

const isFormValid = computed(() => {
  return fields.every(field => inputs.value[field.value] && inputs.value[field.value].toString().trim().length > 0);
});

const handleSelect = (item) => {
  selectedTask.value = {
    desc: item.description,
    title:item.title
  }
}

const handleClose = () => {
  selectedTask.value = {title:'',desc:''}
}

const handleDelete = () => {
  const selectedIndex = tasks.value.findIndex(item=> item.title === selectedTask.value.title);
  // console.log(selectedIndex,'aaaa')
  if(selectedIndex === -1) return;
 tasks.value.splice(selectedIndex,1);
  handleClose()
}

const handleComplete = () => {
  let completedItems = JSON.parse(localStorage.getItem('completedTasks'));
  if(completedItems === null) {
    completedItems = []
  };
  completedItems.push(selectedTask.value);
  localStorage.setItem('completedTasks',JSON.stringify(completedItems));
  handleDelete();
}
</script>
<template>
  <div class="container">
    <div class="task-container">
    <div class="wrapper">
      <form @submit="handleSubmit" method="post">
        <div v-for="field in fields">
          <label :for="field.value">{{ field.label }}</label>
          <input v-if="field.type !== 'textarea'" :type="field.type" :name="field.value" :id="field.value"
            class="fields" :placeholder="`Please enter your ${field.label}: `" v-model="inputs[field.value]"
            autocomplete="off">
          <textarea v-else-if="field.type === 'textarea'" :name="field.value" :id="field.value" cols="30" rows="10"
            class="fields textarea" :placeholder="`Please enter your ${field.label}: `"
            v-model="inputs[field.value]"></textarea>
        </div>
        <div class="btnWrapper">
          <input type="submit" value="Submit" class="btn" :disabled="!isFormValid">
        </div>
      </form>
    </div>
    <section class="task-section">
      <header>Tasks: </header>
      <div class="task-wrapper">
      <div class="task-item" v-for="item in tasks" role="button" v-on:click="handleSelect(item)">
        <div>{{ item.title }}</div>
        <div>{{ item.description }}</div>
      </div>
    </div>
    </section>
  </div>
  <footer class="main-footer">
      <button type="button" class="btn btn--view-completed" v-on:click="() => {
        shouldShowCompleted = true
      }">
        View Completed Tasks
      </button>
    </footer>

    <ViewTaskModal 
    :visible="!!selectedTask?.title" 
    :title="selectedTask.title" 
    :message="selectedTask.desc"
    :onClose="handleClose"
    :onDelete="handleDelete"
    :onComplete="handleComplete"
    />
    <ErrorModal 
      :visible="shouldShowError"
      :title="`Duplicate Task!`"
      :message="`This task already exist. Please try a different title for your task. Thank you`"
      :onClose="() => {
        shouldShowError = false;
      }"
    />
    <CompletedTaskModal :visible="shouldShowCompleted" :closeFn="() => {
      shouldShowCompleted=false
    }"/>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  flex: 1;
  height: 100dvh;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
}
.task-container{
  display: flex;
  flex: 1;
  height: 100%;
  gap: 10px;
  box-sizing: border-box;
  flex-wrap: wrap;
}
.wrapper {
  flex: 1;
  flex-grow: 1;
  flex-shrink: 0;

  /* width: 100dvw; */
  justify-content: center;
  background-color: var(--primary-color);
  padding: 20px;
  border-radius: 20px
}
label{
  color: #fff;
  font-weight: 600;
}

.fields {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 0px;
  padding: 10px;
  outline: 0;
}

.textarea {
  outline: 0px;
  border-width: 0;
  border-radius: 10px;
  padding: 10px;
  resize: none;
  height: auto;
}

.btnWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn {
  width: 80%;
  height: 48px;
  border-radius: 10px;
  background-color: #FFD166;
  color: #fff;
  border-width: 0px;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  font-weight: 500;
}

.btn:disabled {
  opacity: 0.5;
  cursor: auto;
}

.btn--view-completed{
  margin: 0;
}
.task-section {
  display: flex;
  flex: 1;
  height: 100%;
  flex-shrink: 0;
  flex-direction: column;
  background-color: var(--vt-c-indigo);
  padding: 10px;
  border-radius: 10px;
}
.task-section header{
  font-weight: 600;
}
.task-wrapper {
  overflow: auto;
  flex-grow: 0;
  height: 100%;
}
.task-item{
color: #fff;
border: 1px solid #fff;
border-radius: 6px;
padding: 10px;
margin-top: 10px;
}
.main-footer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
@media (max-width: 760px) {
  .task-container{
    flex-direction: column;
  }
}
</style>
