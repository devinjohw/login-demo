# Login Demo
[English](README.md)

2024年，12月21日，星期六，我 实现了 一个 简单的 路由守卫功能，心情 很激动😊！说实话，我 想 实现 这个功能 已经很久了，但是 参考的 一些资料 总是 不能满足 我预想的 效果，在参照了 一些开源项目 和视频 后，加上 Cursor (很好用的 AI 代码编辑器) 和 我自己的 一些思考，终于 实现了 这个功能。这个项目 最终实现的效果 感觉像个 玩具工程，但是 其背后的 状态管理 还是 值得我思考的，我也认识到 状态管理 对于React项目 的重要性。
下面的 两个 资源 对我 实现 这个 功能 有 很大的 帮助：
1. [Role Based Authentication and Authorization in React JS | Role Based Access Control in React JS (油管视频)](https://www.youtube.com/watch?v=Q5_3_3_3_3)
2. [Material Kit React (一个 Material UI 开源项目)](https://github.com/devias-io/material-kit-react)

## 启动 项目
```bash
# 安装依赖
pnpm install
# 运行项目
pnpm run dev
```

## 功能 1: 检查 初始 登录状态
初始 登录状态 在 `AuthProvider` 组件 中 设置。
```typescript
// src/providers/AuthProvider.tsx
...
  async function checkAuth() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    // 设置 初始 登录状态 为 false
    // setIsLoading(false)
    // setIsAuthenticated(false)
    
    // 设置 初始 登录状态 为 true
    setIsLoading(false)
    setIsAuthenticated(true)
  }
...
```

## 功能 2: 为 检查 初始 登陆状态 提供 一个 通用的 加载页面
为 检查 初始 登陆状态 提供 一个 通用的 加载页面 的 功能 在 `Guard` 组件 中 实现：
```typescript
// src/components/Guard.tsx
...
function Guard() {
  const { isLoading } = useContext(AuthContext) as AuthContextType
  if (isLoading) return <div>Loading...</div>
  return <Outlet />
}
...
```
然后将 `Guard` 组件 作为 所有 路由 的 父组件：
```typescript
// src/App.tsx
...
<Route element={<Guard />}>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
</Route>
...
```

## 功能 3: 如果 未 认证，则 重定向 到 登录页面
具体功能 在 `Home` 组件 中 实现：
```typescript
// src/components/Home.tsx
...
if (!isAuthenticated) return <Navigate to="/login" />
...
```

## 功能 4: 如果 已 认证，则 重定向 到 主页
具体功能 在 `Login` 组件 中 实现：
```typescript
// src/components/Login.tsx
...
if (isAuthenticated) return <Navigate to="/" />
...
```

## README 文档 的 多语言
还有 我 学到了 如何 为 Markdown 文档 添加 多语言 支持，只要 创建 对应后缀 的 文件， 然后 在 README.md 中 使用 相对路径 引用 即可。比如，这是 我的 README 文档 的 英文 版本，我 添加 了 引用 中文文档 的 链接：
```markdown
[English](README.md)
```

## 为什么要 在 中文词语间 添加 空格
可以 注意到，我 在使用 中文 写 这个 README 文档 的时候 我在 不同的 词语间 使用 空格 来 分隔 词语：
一来，因为 我 在 使用 Markdown 写 这个 文档, 将 大量 的 词语 堆积 在 一句 会 导致 我 无法 cwd 命令 修改 词语。
二来，显式地 将 词语 分隔开 可以 消除 一些 歧义。
三来，现在 AI 这么火，我觉得 一个 通过 空格 将 词语 分开 的 文档 可能 更利于 让 计算机 理解。
当然，对于 到底 哪些 词语 需要 分隔，我的 做法 相当地 随机， 而且 我也 没有 足够的 财力 支撑 我 思考 这个 不确定 有没有 价值的 问题。
