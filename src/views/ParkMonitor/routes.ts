import type { ExtendedRouteRecordRaw } from '@/types/router'
export default [
    { path: '/', component: () => import('./Index.vue'), alias: '/dashboard' },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('./Index.vue'),
        meta: {
            title: '园区监控',
            icon: 'dashboard'
            // requiresAuth: true
        }
    },
    {
        path: '/timelyMeasurement',
        name: 'TimelyMeasurement',
        component: () => import('./TimelyMeasurement.vue'),
        meta: {
            title: '实时监控'
        }
    }
] as ExtendedRouteRecordRaw[]
