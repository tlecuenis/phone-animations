import './iphoneWidget.css'
import { useContext } from 'react'
import { PageContext } from '../context/page.jsx'
import { JiggleContext } from "../context/jiggle.jsx"

function IphoneApp({appName, name, left}) {
    const {screen, setScreen} = useContext(PageContext)
    const {jiggle, setJiggle} = useContext(JiggleContext)

    const imageSrc = `https://unavatar.io/${appName}`


    const openApp = (e) => {
        // console.log(e.target.alt)
        setScreen(e.target.alt)
    }
    return (
        <article className={jiggle == true ? 'jiggle widget' : 'widget'}>
            <div>
                <button className="widget-logo" onClick={openApp}>
                    <img src={imageSrc} alt={appName} draggable='false'/>
                </button>
                <p className='widget-name'>{appName}</p>    
            </div>
        </article>
        

        
    )
  }
  
  export default IphoneApp