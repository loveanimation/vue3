// import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
console.log(createRouter)

var router = createRouter({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: () => import("@/components/HelloWorld"),// 引入组件
            // redirect: '/home',
            beforeEnter(to, from, next) {
                console.log("路由配置中的导航", to, from)
                next()
            }
        }, {
            path: '/login',
            name: 'login',
            component: () => import("@/components/login"),
            beforeEnter(to, from, next) {
                console.log("路由配置中的导航", to, from)
                next()
            }
        }
    ], history: createWebHistory(process.env.BASE_URL),
})
router.beforeEach((to, from, next) => {
    console.log("即将进入钩子", to)
    console.log("离开的钩子", from)
    next()
})
export default router