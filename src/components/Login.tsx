import { Navigate } from 'react-router-dom'
import { AuthContextType } from '../contexts/AuthContext'

import AuthContext from '../contexts/AuthContext'
import { useContext, useState } from 'react'

function Login() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const { isAuthenticated, setIsAuthenticated } = useContext(
    AuthContext
  ) as AuthContextType
  const handleSubmit = async () => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsAuthenticated(true)
    setIsSubmitting(false)
  }
  if (isAuthenticated) return <Navigate to="/" />
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleSubmit} disabled={isSubmitting}>
        Login {isSubmitting ? '...' : ''}
      </button>
    </>
  )
}
export default Login
