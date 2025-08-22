# microgrid-web

框架选用vue3+vite+typescript<br>
UI框架 [tailwind](https://www.tailwindcss.cn/) 便于后期换肤

## 项目启动

```sh
yarn
yarn dev
yarn build
```

## 目录说明:

```
├─ public           # index.html
├─ dist             # 打包的文件
├─ src
│  ├─ @types        # 声明文件
│  ├─ api           # 数据请求，按模块划分- eg: 用户、订单 ...
│  ├─ common        # 公共&配置文件
│  ├─ components    # 全局组件
│  ├─ views         # 页面
│  │   ├─ 名称      # 模块名称
│  │       ├─ PageA    # 页面名称
│  │       ├─ routers  # 该模块路由
│  │
│  ├─ utils         # 工具函数
│  ├─ hooks         # 可组合函数
│  ├─ main.ts       # 入口文件

```

## 编辑器设置

推荐使用 VSCode 编辑器，并安装以下插件：

- 别名路径跳转
- ESLint
- Prettier - Code formatter
- Stylelint
- Tailwind CSS IntelliSense

## 规范

- css规范
  - css类和id命名使用kebab-case
  - 所有css文件都已启用postcss-preset-env

- js/ts规范
  - 已启用eslint，报错自寻搜索解决
  - 尽量不用any类型, 如果某个函数或变量可以接收任意类型，尽量使用unknown替代any

### eslint

```sh
npx eslint .
```
