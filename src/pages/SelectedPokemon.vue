<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const {query} = useRoute();
const isLoading = ref(false)
const details = ref({})
const error = ref('')
const getPokemonDetails = async() => {
    isLoading.value = true;
    try{
        const response = await fetch(query.url);
        const jsonData = await response.json();
        details.value = jsonData;
    } catch(err){
        err.value = err.message
    } finally{
        isLoading.value=false
    }
}

onMounted(() => {
    getPokemonDetails();
})
</script>
<template>
    <div class="pokemon-container">
        <div v-if="isLoading">...Loading</div>
        <div v-if="error">{{ error }} </div>
        <h2 class="pokemon-name">{{ details?.name?.toUpperCase() }}</h2>
        
        <div v-if="details.name" class="sprite-wrapper">
            <div class="sprite-item" v-for="sprite in Object.values(details?.sprites).filter(item=>!!item)" >
            <img :src="sprite" alt="NO Data">
            </div>
        </div>
    </div>
</template>
<style scoped>
.pokemon-container {
    flex: 1;
}
.pokemon-name{
    font-weight: 700;
}
.sprite-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10px;
    img{
        width: 80px;
        aspect-ratio: 1/1;
    }
}
.sprite-item{
    border: solid 1px var(--primary-color);
    border-radius: 10px;
}
</style>