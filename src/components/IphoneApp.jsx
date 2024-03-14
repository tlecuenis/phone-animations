import './iphoneApp.css'
import { useContext } from 'react'
import { PageContext } from '../context/page.jsx'

function IphoneApp({appName, name}) {
    const {screen, setScreen} = useContext(PageContext)

    const imageSrc = `https://unavatar.io/${appName}`

    const nameUpper = appName.charAt(0).toUpperCase() + appName.slice(1)

    const openApp = (e) => {
        // console.log(e.target.alt)
        setScreen(e.target.alt)
    }
    return (
        
        <article className={name == true ? 'app block' : 'app app--none'}>
            <button className="app-logo" onClick={openApp}>
                <img src={imageSrc} alt={nameUpper} />
            </button>
            <p className={name == true ? 'app-name block' : 'app-name app-name--none'}>{nameUpper}</p>    
        </article>

        
    )
  }
  
  export default IphoneApp
  