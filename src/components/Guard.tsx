import { useContext } from "react"
import { Outlet } from "react-router-dom"
import AuthContext, { AuthContextType } from "../contexts/AuthContext"

function Guard() {
  const { isLoading } = useContext(AuthContext) as AuthContextType
  if (isLoading) return <div>Loading...</div>
  return <Outlet />
}
export default Guard