import { createWebHistory, createRouter } from 'vue-router'
import type { ExtendedRouteRecordRaw } from '@/@types/router.d.ts'
// 定义模块路由的接口
interface ModuleWithRoutes {
    default: ExtendedRouteRecordRaw[]
}
// 动态导入所有模块的 routes.ts 文件
const routeModules = import.meta.glob('@/views/**/routes.ts', {
    eager: true
}) as Record<string, ModuleWithRoutes>
// 合并所有路由
const allRoutes: ExtendedRouteRecordRaw[] = Object.values(routeModules)
    .map(module => module.default)
    .flat()
const router = createRouter({
    history: createWebHistory(),
    routes: allRoutes
})
// 路由守卫示例
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !isAuthenticated()) {
//     next('/');
//   } else {
//     document.title = to.meta.title || '默认标题';
//     next();
//   }
// })
export default router
