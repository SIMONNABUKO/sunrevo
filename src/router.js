import { createWebHashHistory,createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";
import AboutUs from "./components/AboutUs.vue"; 
import Services from "./components/Services.vue";
import Projects from "./components/Projects.vue";

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'Contact',
        component: Contact,
        path: '/contact'
    },
    {
        name: 'AboutUs',
        component: AboutUs,
        path: '/about'
    },
    {
        name: 'Services',
        component: Services,
        path: '/services'
    },
    {
        name: 'Projects',
        component: Projects,
        path: '/projects'
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;