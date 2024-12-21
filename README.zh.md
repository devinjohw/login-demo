# Login Demo
[English](README.md)

2024年，12月21日，星期六，我实现了一个简单的路由守卫功能，心情很激动😊！说实话，我想实现这个功能已经很久了，但是参考的的一些资料总是不能满足我预想的效果，在参照了一些开源项目和视频后，加上我自己的一些思考，终于实现了这个功能。
感谢

```bash
# To run this project
pnpm install
pnpm run dev
```

## Feature 1: Checking the initial login state
The initial login state is set in `AuthProvider` component.
```typescript
// src/providers/AuthProvider.tsx
...
  async function checkAuth() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    // To set the initial login state to false
    // setIsLoading(false)
    // setIsAuthenticated(false)
    
    // To set the initial login state to true
    setIsLoading(false)
    setIsAuthenticated(true)
  }
...
```

## Feature 2: Common Loading State when checking initial login state

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


## Feature 3: Redirect to login page if not authenticated
The redirect to login page is implemented in `Home` component.
```typescript
// src/components/Home.tsx
...
if (!isAuthenticated) return <Navigate to="/login" />
...
```

## Feature 4: Redirect to home page if authenticated
The redirect to home page is implemented in `Login` component.
```typescript
// src/components/Login.tsx
...
if (isAuthenticated) return <Navigate to="/" />
...
```
