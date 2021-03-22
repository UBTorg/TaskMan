import {createRouter, createWebHistory} from 'vue-router'
import AdminDashboard from '../views/AdminDashboard'

const routes = [{
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router