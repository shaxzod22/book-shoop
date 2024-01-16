import { useState } from 'react'
import { createContext } from 'react'
import MainRoutes from './routes/MainRoutes'
import './styles/common/App.scss'

export const TypeContext = createContext()

function App() {
  const [type,setType] = useState('all')

  return (
    <TypeContext.Provider value={{type,setType}}>
      <MainRoutes/>
    </TypeContext.Provider>
  )
}

export default App
