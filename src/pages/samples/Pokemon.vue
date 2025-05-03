<script setup>
import CustomButton from '@/components/icons/CustomButton.vue';
import CustomContainer from '@/components/layoute/CustomContainer.vue';
import useFetch from '../../utils/helpers/useFetch'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const {isLoading,data,error,fetchData} = useFetch()
const router = useRouter();
const pokemonURL = 'https://pokeapi.co/api/v2/pokemon';
const selectItem = (item) => {
    router.push({path:`/pokemon/selected/${item.name}`,query:{
        url: item.url
    }})
    
}

onMounted(() => {
    fetchData(pokemonURL)
})

</script>
<template>
    <CustomContainer :containerClass="['pokemon-container']">
       <template v-slot:children> 
            <div class="header-title"><h1>Pockemons</h1></div>
            <div class="wrapper">
                <div v-if="isLoading">...Loading</div>
                <CustomButton  
                v-for="item in data?.results" 
                v-else-if="data?.results?.length > 0" 
                :onClick="() => selectItem(item)" 
                :key="item.name" 
                :label="item.name" 
                @message="(txt) => console.log(txt)"
                :btnClass="['items']"/>
                <div v-else>{{ error }}</div>
                
            </div>
        </template>
    </CustomContainer>
</template>
<style scoped>
.pokemon-container{
    width: 100%;
    height: 100dvh;
    padding: 10px;
}
.header-title{
    height: 100px;
}
.wrapper{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    overflow: auto;
    gap:10px;
}
.items{
    background-color: var(--primary-color);
    justify-content: center;
    align-content: center;
    border-radius: 10px;
    cursor: pointer;
}
.item-name{
    color: #fff;
}
</style>