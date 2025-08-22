import type { ExtendedRouteRecordRaw } from '@/@types/router'

export default [
    {
        path: '/test',
        name: 'Test',
        component: () => import('./Index.vue'),
        meta: {
            title: '园区监控',
            icon: 'dashboard'
            // requiresAuth: true
        }
    }
] as ExtendedRouteRecordRaw[]
