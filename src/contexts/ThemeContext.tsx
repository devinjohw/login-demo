import { createContext, Dispatch, SetStateAction } from "react";

export type Theme = 'light' | 'dark'

export type ThemeContextType = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}


const ThemeContext = createContext<ThemeContextType | null>(null)

export default ThemeContext