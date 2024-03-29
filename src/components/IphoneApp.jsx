import './iphoneApp.css'
import { useContext } from 'react'
import { PageContext } from '../context/page.jsx'
import { JiggleContext } from "../context/jiggle.jsx"

function IphoneApp({appName, name}) {
    const {screen, setScreen} = useContext(PageContext)
    const {jiggle, setJiggle} = useContext(JiggleContext)

    const imageSrc = `https://unavatar.io/${appName}`

    const openApp = (e) => {
        !jiggle && setScreen(e.target.alt)
    }
    return (
        <article className={jiggle == true ? 'jiggle' : ''}>
             <div className={name == true ? 'app block' : 'app app--none'}>
                <button className="app-logo" onClick={openApp}>
                    <img src={imageSrc} alt={appName} draggable='false'/>
                </button>
                <p className={name == true ? 'app-name block' : 'app-name app-name--none'}>{appName}</p>    
            </div>
        </article>
        

        
    )
  }
  
  export default IphoneApp
  