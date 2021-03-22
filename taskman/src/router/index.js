import {createRouter, createWebHistory} from "vue-router";
import App from "@/App";
import { routeGuard } from '@/auth'
import Callback from "@/views/Callback";
import AdminDashboard from '../views/AdminDashboard';
import Home from '../views/Home'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        beforeEnter: routeGuard
    },
    {
        path: '/callback',
        name: 'Callback',
        component: Callback
    },
    {
        path: '/admin',
        name: 'AdminDashboard',
        component: AdminDashboard
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
