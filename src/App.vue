<script setup>
import { computed, onUpdated, ref} from 'vue'

const inputs = ref({});
const tasks = ref([]);
const handleSubmit = (e) => {
  e.preventDefault();
  tasks.value.push({ ...inputs.value }) 
  inputs.value = {initialState}
}

const fields = [
  {id: 1, label:'Title', value: 'title',type: 'text'},
  {id: 2, label:'Description', value: 'description',type: 'textarea'},
  {id: 3, label:'Start Date: ', value: 'date',type: 'date'},
]

console.log("Data :",inputs.value)
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <form @submit="handleSubmit" method="post">
        <div v-for="field in fields">
          <label :for="field.value">{{field.label}}</label>
          <input v-if="field.type !== 'textarea'" :type="field.type" :name="field.value" :id="field.value" class="fields" :placeholder="`Please enter your ${field.label}: `" v-model="inputs[field.value]" autocomplete="off">
          <textarea v-else-if="field.type === 'textarea'" :name="field.value" :id="field.value" cols="30" rows="10" class="fields textarea" :placeholder="`Please enter your ${field.label}: `"  v-model="inputs[field.value]"></textarea>
      </div>

      {{ console.log(Object.values(inputs).some(item => item?.length >= 0)) }}
      <div class="btnWrapper">
      <input type="submit" value="Submit" class="btn">
    </div>
      </form>
    </div>
  </div>
  <div v-for="item in tasks">
    <div>{{ item.title }}</div>
    <div>{{ item.desc }}</div>
  </div>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.container{
  display: flex;
  width: 100dvw;
  height: 100dvh;
  padding: 20px;
  overflow-y: scroll;
}
  .wrapper {
    display: flex;
    justify-content: center;
    background-color:red;
    padding: 20px;
    border-radius: 20px
  }
  .fields{
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: 0px;
    padding: 10px;
  }
  .textarea{
    outline: 0px;
    border-width: 0;
    border-radius: 10px;
    padding: 10px;
    resize: none;
    height: auto;
  }
  .btnWrapper{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .btn{
    width: 80%;
    height: 48px;
    border-radius: 10px;
    background-color: #ffff;
    color: #000;
    border-width: 0px;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
  }
  .btn:disabled{
    opacity: 0.5;
    cursor:auto;
  }
</style>
