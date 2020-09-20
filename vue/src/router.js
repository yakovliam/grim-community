import VueRouter from "vue-router";
import Login from "@/components/login/Login";
import Profile from "@/components/profile/Profile";
import Signup from "@/components/signup/Signup";
import Home2 from "@/components/home/Home2";

// create router
const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home2,
            alias: '/'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/signup',
            component: Signup
        }
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