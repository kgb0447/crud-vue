import { ref } from "vue"
const useFetch = () => {
        const isLoading = ref(false);
        const error = ref(null);
        const data = ref(null)

        const fetchData = async(url) => {
            isLoading.value = true
            try{
                const response = await fetch(url);
                if(response.status === 200) {
                    const jsonData = await response.json();
                    data.value = jsonData;
                }
            } catch(err){
                error.value = err.message
            }finally{
                isLoading.value = false
            }
        }
        return {
            isLoading,
            error,
            data,
            fetchData
        }
}

export default useFetch