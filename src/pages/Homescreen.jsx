import { Reorder } from "framer-motion"
import IphoneApp from "../components/IphoneApp.jsx"
import IphoneWidget from "../components/IphoneWidget.jsx"
import './homescreen.css'
import { useContext, useState } from "react"
import { JiggleContext } from "../context/jiggle.jsx"
import Application from "./Application.jsx"
import { PageContext } from "../context/page.jsx"
// import { Reorder } from "framer-motion"
import searchIcon from '../assets/Icons/search-icon.png'
import batteryIcon from '../assets/Icons/battery-icon.png'
import signalIcon from '../assets/Icons/signal-icon.png'
import wifiIcon from '../assets/Icons/wifi-icon.png'


function Homescreen() {
    const [items1, setItems1] = useState([1,2,3,4])
    const [items2, setItems2] = useState([5,6,7,8])
    const [items3, setItems3] = useState([9,10,11,12])
    const [items4, setItems4] = useState([13,14,15,16])
    const [widget, setWidget] = useState([17,18])

    const {screen, setScreen} = useContext(PageContext)

    const {jiggle, setJiggle} = useContext(JiggleContext)
    const apps = {
        1: 'YouTube',
        2: 'Facebook',
        3: 'Google',
        4: 'Binance',
        5: 'Spotify',
        6: 'Microsoft',
        7: 'Twitter',
        8: 'Whatsapp',
        9: 'Brave',
        10: 'Snapchat',
        11: 'TikTok',
        12: 'Pinterest',
        13: 'TradingView',
        14: 'Uber',
        15: 'MercadoPago',
        16: 'MercadoLibre',
        17: 'Discord',
        18: 'GoogleDrive'
    }
    // const date = new Date()
    // const showTime = date.getHours() + ':' + date.getMinutes()
    
    return(
        
        <div className='screen screen-homescreen'>
                
            {screen == false && (<div className="top-side">
                <p className='show-time'>00:00</p>
                <div className='dynamic-island'></div>
                <div className='top-side-logos'>
                    <img src={signalIcon} alt="" />
                    <img src={wifiIcon} alt="" />
                    <img src={batteryIcon} alt="" />
                </div>
            </div>)}
            {screen == false ? (
            <section className='grid-apps'>
                <Reorder.Group 
                    as="ul" 
                    axis="x" 
                    values={items1} 
                    onReorder={setItems1}
                >
                    {items1.map(item => (
                        <Reorder.Item value={item} key={item} drag={jiggle == true ? "x" : "false"}>

                            <IphoneApp appName={apps[item]} name={true}/>
                        </Reorder.Item>
                    ))}
                    
                </Reorder.Group>
                <Reorder.Group 
                    as="ul" 
                    axis="x" 
                    values={items2} 
                    onReorder={setItems2}
                >
                    {items2.map(item => (
                        <Reorder.Item value={item} key={item} drag={jiggle == true ? "x" : "false"}>

                            <IphoneApp appName={apps[item]} name={true}/>
                        </Reorder.Item>
                    ))}
                    
                </Reorder.Group>
                <Reorder.Group 
                    as="ul" 
                    axis="x" 
                    values={items3} 
                    onReorder={setItems3}
                >
                    {items3.map(item => (
                        <Reorder.Item value={item} key={item} drag={jiggle == true ? "x" : "false"}>

                            <IphoneApp appName={apps[item]} name={true}/>
                        </Reorder.Item>
                    ))}
                    
                </Reorder.Group>
                <Reorder.Group 
                    as="ul" 
                    axis="x" 
                    values={items4} 
                    onReorder={setItems4}
                >
                    {items4.map(item => (
                        <Reorder.Item value={item} key={item} drag={jiggle == true ? "x" : "false"}>

                            <IphoneApp appName={apps[item]} name={true}/>
                            {console.log(items4)}
                        </Reorder.Item>
                    ))}
                    
                </Reorder.Group>
                <Reorder.Group 
                    as="ul" 
                    axis="x" 
                    values={widget} 
                    onReorder={setWidget}
                    className="widgets-grid"
                >
                    {widget.map(item => (
                        <Reorder.Item value={item} key={item} drag={jiggle == true ? "x" : "false"}>
                            <IphoneWidget appName={apps[item]} name={true} left={true}/>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </section>) 
            : <Application/>}
            {screen == false && (<div className='search-indicator'>
                <img src={searchIcon}className='search-icon'/>
                <p>Search</p>
            </div>)}
            {screen == false && (<section className='dock'>
                <IphoneApp appName='UADEoficial' name={false}/>
                <IphoneApp appName='Platzi' name={false}/>
                <IphoneApp appName='Duolingo' name={false}/>
                <IphoneApp appName='Geogebra' name={false}/>
            </section>)}
        </div>
    )
}

export default Homescreen
