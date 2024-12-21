import { useContext } from "react"
import AuthContext, { AuthContextType } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

function AuthGuard() {
  const { isAuthenticated, isLoading } = useContext(AuthContext) as AuthContextType
  if (isLoading) return <div>Loading...</div>
  if (!isAuthenticated) return <Navigate to="/login" />
  return <Outlet />
}
export default AuthGuard
