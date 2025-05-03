import CompletedTasks from "@/pages/CompletedTasks.vue";
import Home from "@/pages/Home.vue"
import SelectedPokemon from "@/pages/SelectedPokemon.vue";
import Todo from "@/pages/Todo.vue";
import BtnComponents from "@/pages/samples/BtnComponents.vue";
import GridPattern from "@/pages/samples/GridPattern.vue";
import Pokemon from "@/pages/samples/Pokemon.vue";
import Samples from '@/pages/samples/Samples.vue'


const homeNav = [
    { path: '/', name: 'Home', component: Home },
    // {
    //   path: '/pokemon',
    //   name: 'PokemonAPI',
    //   component: Pokemon,
    //   children: [
    //     {
    //       path: '/selected',
    //       name: 'SelectedPokemon',
    //       component: SelectedPokemon
    //     }
    //   ]
    // },
    // { 
    //   path: '/todo',
    //   name: 'Todo',
    //   component: Todo,
    // },
            {
              path: '/pokemon/selected/:name',
              name: 'SelectedPokemon',
              component: SelectedPokemon
            },
    { 
      path: '/todo/completed-task',
      name: 'CompletedTask',
      component: CompletedTasks,
    },
    // {
    //   path: '/samples',
    //   name: 'Samples',
    //   component: BtnComponents,
    //   children: [
    //     {
    //       path: 'btn-components',
    //       name: 'BtnComponents',
    //       component: BtnComponents
    //     },
    //     {
    //       path: 'layout',
    //       name: 'LayoutComponents',
    //       component: GridPattern
    //     }
    //   ]
    // }
  ]
  

export default homeNav;