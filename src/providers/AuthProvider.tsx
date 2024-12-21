import { useEffect, useState } from 'react'
import AuthContext from '../contexts/AuthContext'

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  
  async function checkAuth() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    // To set the initial login state to false
    // setIsLoading(false)
    // setIsAuthenticated(false)
    
    // To set the initial login state to true
    setIsLoading(false)
    setIsAuthenticated(true)
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
