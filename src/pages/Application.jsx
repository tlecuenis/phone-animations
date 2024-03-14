import './application.css'
import { useContext, useState } from 'react'
import { PageContext } from '../context/page.jsx'
import {animationControls, motion, px, useScroll} from 'framer-motion'


function Application() {
    const {screen, setScreen} = useContext(PageContext)
    const [animation, setAnimation] = useState(false)

    const imageSrc = `https://unavatar.io/${screen}`

    const backToHomescreen = () => {
        setAnimation(true)
        setTimeout(() => {
            setScreen(false)
            setAnimation(false)
        }, 300)    
    }

    return(
        <div className={animation == true ? "screen screen-application animation " : "screen screen-application"}>
            <div className={animation == true ? "top-side-animation " : "top-side"} >
                <p className='show-time'>00:00</p>
                <div className='dynamic-island'></div>
                <div className='top-side-logos'>
                    <p>S</p>
                    <p>W</p>
                    <p>B</p>
                </div>
            </div>
            <button className={animation == true ? "back-animation " : "back"} onClick={backToHomescreen}>❌</button>
            <h2 className={animation == true ? "application-name-animation " : "application-name"}>{screen}</h2>
            <img src={imageSrc} alt={screen} className={animation == true ? "application-logo-animation " : "application-logo"}/>
        </div>
    )
}

export default Application
