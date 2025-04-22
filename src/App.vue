<script setup>
import { useRouter } from 'vue-router';
import homeNav from './navigation/routes/homeNav';
const {push} = useRouter()
</script>
<template>
  <div class="container">
    <nav>
    <div class="logo">KProjects</div>
    <div class="right-navigation">
    <div v-for="route in homeNav" class="nav-btn-wrapper">
      <button type="button" class="nav-btn" v-on:click="() => {
        push(route.path)
      }">{{ route.name }}</button>
      <div class="nav-indicator"></div>
    </div>
    <button class="contact-btn" type="button">Contact Me Now!</button>
    </div>
    </nav>
     <router-view/>
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
  padding: 0px;
}
nav{
    display: flex;
    background-color:#fff;
    justify-content: space-between;
    align-items: center;
}
.logo{
  color: var(--secondary-color);
  font-weight: 800;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.nav-btn-wrapper{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.nav-btn{
    background-color: transparent;
    border:unset;
    outline: 0px;
    cursor: pointer;
    color: var(--neutral-grey);
    font-size: 17px;
}
.nav-btn:hover + .nav-indicator {
    width: 80%;
}
.nav-indicator{
    width: 0;
    height: 5px;
    background-color: var(--secondary-color);
    transition: 800ms;
    border-radius: 4px;
}
.contact-btn{
  background-color: var(--primary-color);
  color: #fff;
  font-size: 1rem;
  padding: 20px;
  border: 0;
  border-radius: 4px;
}
.right-navigation{
    display: flex;
    flex: 1;
    padding-top: 5px;
    justify-content: flex-end;
    gap: 20px;
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
