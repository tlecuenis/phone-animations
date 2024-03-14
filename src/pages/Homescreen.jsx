import { Reorder } from "framer-motion"
import IphoneApp from "../components/IphoneApp.jsx"
import './homescreen.css'
import { useState } from "react"

function Homescreen() {
    // const date = new Date()
    // const showTime = date.getHours() + ':' + date.getMinutes()
    return(
        <div className='screen screen-homescreen'>
            <div className="top-side">
                <p className='show-time'>00:00</p>
                <div className='dynamic-island'></div>
                <div className='top-side-logos'>
                    <p>S</p>
                    <p>W</p>
                    <p>B</p>
                </div>
            </div>
            {/* agregar drag and drop */}
            <section className='grid-apps'>
                {/* <Reorder.Group axis="y" values={order} onReorder={setOrder}>
                    <Reorder.Item value={1}>
                        <IphoneApp appName='YouTube' name={true}/>
                    </Reorder.Item>
                    <Reorder.Item value={0}>
                        <IphoneApp appName='facebook' name={true}/>
                    </Reorder.Item>
                    <Reorder.Item value={2}>
                        <IphoneApp appName='YouTube' name={true}/>
                    </Reorder.Item>
                </Reorder.Group> */}
                <IphoneApp appName='YouTube' name={true}/>
                <IphoneApp appName='facebook' name={true}/>
                <IphoneApp appName='YouTube' name={true}/>
                <IphoneApp appName='facebook' name={true}/>
                <IphoneApp appName='YouTube' name={true}/>
                <IphoneApp appName='facebook' name={true}/>
                <IphoneApp appName='YouTube' name={true}/>
                <IphoneApp appName='facebook' name={true}/>
                <IphoneApp appName='YouTube' name={true}/>
                <IphoneApp appName='facebook' name={true}/>
                <IphoneApp appName='YouTube' name={true}/>
                <IphoneApp appName='facebook' name={true}/>
                <IphoneApp appName='YouTube' name={true}/>
                <IphoneApp appName='facebook' name={true}/>
                <IphoneApp appName='YouTube' name={true}/>
                <IphoneApp appName='facebook' name={true}/>
                <IphoneApp appName='YouTube' name={true}/>
                <IphoneApp appName='facebook' name={true}/>
                <IphoneApp appName='YouTube' name={true}/>
                <IphoneApp appName='facebook' name={true}/>
                <IphoneApp appName='YouTube' name={true}/>
                <IphoneApp appName='facebook' name={true}/>
                <IphoneApp appName='YouTube' name={true}/>
                <IphoneApp appName='facebook' name={true}/>
            </section>
            <div className='search-indicator'>
                <div className='search-icon'></div>
                <p>Search</p>
            </div>
            <section className='dock'>
                <IphoneApp appName='YouTube' name={false}/>
                <IphoneApp appName='facebook' name={false}/>
                <IphoneApp appName='YouTube' name={false}/>
                <IphoneApp appName='facebook' name={false}/>
            </section>
        </div>
    )
}

export default Homescreen
