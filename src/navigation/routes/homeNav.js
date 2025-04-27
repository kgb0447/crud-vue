import CompletedTasks from "@/pages/CompletedTasks.vue";
import Home from "@/pages/Home.vue"
import Todo from "@/pages/Todo.vue";
import BtnComponents from "@/pages/samples/BtnComponents.vue";
import GridPattern from "@/pages/samples/GridPattern.vue";
import Samples from '@/pages/samples/Samples.vue'

const homeNav = [
    {path: '/',name:'Home',component: Home},
    {path: '/todo',name: 'Todo', component: Todo,children: [
        {path: '/todo/completed-task',name: 'CompletedTask',component: CompletedTasks},
    ]},
    {path: '/samples',name: 'Samples', component: GridPattern,children: [
        {path: '/samples/btn-components',name: 'BtnComponents',component: BtnComponents},
        {path: '/samples/layout',name: 'Layout Components',component: GridPattern},
    ]},
]

export default homeNav;