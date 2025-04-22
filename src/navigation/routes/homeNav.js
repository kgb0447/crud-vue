import CompletedTasks from "@/pages/CompletedTasks.vue";
import Home from "@/pages/Home.vue"
import Todo from "@/pages/Todo.vue";


const homeNav = [
    {path: '/',name:'Home',component: Home},
    {path: '/todo',name: 'Todo', component: Todo,children: [
        {path: '/todo/completed-task',name: 'CompletedTask',component: CompletedTasks},
    ]},
]

export default homeNav;