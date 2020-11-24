import VueRouter from "vue-router";
import Login from "@/components/login/Login";
import Profile from "@/components/profile/Profile";
import Signup from "@/components/signup/Signup";
import Home from "@/components/home/Home";

// create router
const router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            alias: '/'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        },
        {
            path: '*',
            redirect: { name: 'login' }
        },
    ],
    mode: 'history'
});

// set authentication
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) { // if it requires auth
        if (localStorage.getItem('user') !== null) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

export default router;