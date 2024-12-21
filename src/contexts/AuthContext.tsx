import { createContext, Dispatch, SetStateAction } from "react"

export type AuthContextType = {
  isAuthenticated: boolean
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextType | null>(null)

export default AuthContext