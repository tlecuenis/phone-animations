import './App.css'
import Homescreen from './pages/Homescreen.jsx'
import Application from './pages/Application.jsx'
import { useContext } from 'react'
import { PageContext } from './context/page.jsx'

function App() {
  const {screen, setScreen} = useContext(PageContext)
  
  return (
    <>
      <h1>IPhone 15 pro max manager</h1>

      <div className='iphone'>
        <div className='chasis'>
          <div className='separation'>
            {screen == false ? <Homescreen /> : <Application />}
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default App
