import PageNotFound from "@/pages/error/PageNotFound.vue";
import homeNav from "./routes/homeNav";
import navRoutes from "./routes/navRoutes";


const routes = [
    {path: '/:pathMatch(.*)*',name:'NotFound', component:PageNotFound},
    ...homeNav,
    ...navRoutes
]

export default routes;