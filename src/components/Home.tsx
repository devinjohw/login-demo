import AuthContext from "../contexts/AuthContext"

import { Navigate } from "react-router-dom"
import { AuthContextType } from "../contexts/AuthContext"
import { useContext, useState } from "react"

function Home() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext) as AuthContextType
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  
  const handleLogout = async () => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsAuthenticated(false)
    setIsSubmitting(false)
  }

  if (!isAuthenticated) return <Navigate to="/login" />

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogout} disabled={isSubmitting}>Logout {isSubmitting ? '...' : ''}</button>
    </>
  )
}
export default Home
