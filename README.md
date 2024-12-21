# Login Demo
[简体中文](README.zh.md)

Sat, Dec 21, 2024, I implemented a simple guard route feature for login page and I was excited 😊! To be honest, I've wanted to implement this feature for a long time, but the resources I referred to never quite met my expectations. After checking out some open-source projects and tutorials, along with [Cursor](https://www.cursor.com/) (a handy AI code editor) and my own thoughts, I finally achieved this functionality. The final result of this project feels like a toy project, but the state management behind it is still worth pondering, and I realized the importance of state management for React projects. The following two resources inspired me a lot:
1. [Role Based Authentication and Authorization in React JS | Role Based Access Control in React JS (a Youtube video)](https://www.youtube.com/watch?v=Q5_3_3_3_3)
2. [Material Kit React (a Material UI open source project)](https://github.com/devias-io/material-kit-react)

## Start Project
```bash
# Install dependencies
pnpm install
# Run project
pnpm run dev
```

## Feature 1: Checking the initial login state
The initial login state is set in the `AuthProvider` component:
```typescript
// src/providers/AuthProvider.tsx
...
  async function checkAuth() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    // Set initial login state to false
    // setIsLoading(false)
    // setIsAuthenticated(false)
    
    // Set initial login state to true
    setIsLoading(false)
    setIsAuthenticated(true)
  }
...
```

## Feature 2: Provide a Generic Loading Page for Checking Initial Login State
The functionality to provide a generic loading page for checking the initial login state is implemented in the `Guard` component:
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
Then use the `Guard` component as the parent component for all routes:
```typescript
// src/App.tsx
...
<Route element={<Guard />}>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
</Route>
...
```

## Feature 3: Redirecting to login page if not authenticated
This specific feature is implemented in the Home component:
```typescript
// src/components/Home.tsx
...
if (!isAuthenticated) return <Navigate to="/login" />
...
```
## Feature 4: Redirect to Home Page if Authenticated
This specific feature is implemented in the `Login` component:
```typescript
// src/components/Login.tsx
...
if (isAuthenticated) return <Navigate to="/" />
...
```

## Multilingual README Documentation
I also learned how to add multilingual support to Markdown documents. Just create files with the corresponding suffix and then use relative paths in README.md to reference them. For example, this is the English version of my README document, and I added a link to the Chinese document:
```markdown
[中文](README.zh.md)
```
