import { useContext } from "react"
import AuthContext, { AuthContextType } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

function GuestGuard() {
  const { isAuthenticated, isLoading } = useContext(AuthContext) as AuthContextType
  if (isLoading) return <div>Loading...</div>
  if (isAuthenticated) return <Navigate to="/" />
  return <Outlet />
}
export default GuestGuard