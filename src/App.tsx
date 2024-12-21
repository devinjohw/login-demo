import { Route, Routes } from 'react-router-dom'
import Guard from './components/Guard'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <Routes>
      <Route element={<Guard />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
