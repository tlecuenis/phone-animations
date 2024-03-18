import './App.css'
import Homescreen from './pages/Homescreen.jsx'
import Application from './pages/Application.jsx'
import { useContext } from 'react'
import { PageContext } from './context/page.jsx'
import { JiggleContext } from './context/jiggle.jsx'

function App() {
  const {screen, setScreen} = useContext(PageContext)
  const {jiggle, setJiggle} = useContext(JiggleContext)
  
  const handleJiggle = (e) =>{
    setJiggle(e.target.checked)
  }

  return (
    <>
      <h1>IPhone 15 pro max manager</h1>
      <div className='options'>
        <label htmlFor="checkbox-jiggle">
          <p>Mover Apps</p>
          <input type="checkbox" id='checkbox-jiggle' onClick={handleJiggle}/>
        </label>
      </div>
      
      <div className='iphone'>
        <div className='chasis'>
          <div className='separation'>
            <Homescreen />
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default App
