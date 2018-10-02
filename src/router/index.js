import Vue from 'vue'
import VueRouter from 'vue-router'
import FeedRoutes from './feed'

Vue.use(VueRouter)

const routes = [
	...FeedRoutes
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

router.beforeEach((to, from, next) => {
    if (to.matched.length) {
        document.title = to.meta.title;
        next();
    } else {
        location.href = to.fullPath;
    }
});

export default router;
