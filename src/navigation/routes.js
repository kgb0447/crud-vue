import PageNotFound from "@/pages/error/PageNotFound.vue";
import homeNav from "./routes/homeNav";


const routes = [
    {path: '/:pathMatch(.*)*',name:'NotFound', component:PageNotFound},
    ...homeNav
]

export default routes;