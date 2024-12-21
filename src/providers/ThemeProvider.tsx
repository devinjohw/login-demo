import { useState } from "react"
import ThemeContext, { Theme } from "../contexts/ThemeContext"

// ThemeContext as typeof createContext<ThemeState

function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState<Theme>('light')
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider
