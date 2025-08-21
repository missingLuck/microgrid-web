import type { RouteRecordRaw, RouteMeta } from 'vue-router'

// 扩展路由记录类型
export declare type ExtendedRouteRecordRaw = RouteRecordRaw & {
  // 菜单高亮的key
  activeMenu?: string
  // 是否在菜单中隐藏
  hidden?: boolean
  // 路由元信息
  meta?: RouteMeta & {
    // 标题
    title?: string
    // 图标
    icon?: string
    // 权限列表
    roles?: string[]
    // 是否需要缓存
    keepAlive?: boolean
    // 是否需要登录
    requiresAuth?: boolean
    // 额外参数
    params?: Record<string, unknown>
  }
}
