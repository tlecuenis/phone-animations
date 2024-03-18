import { createContext, useContext, useState } from "react";

export const JiggleContext = createContext(false)

export function JiggleContextProvider(props) {
    const [jiggle, setJiggle] = useState(false)

    const state = {jiggle, setJiggle}
    
    return(
        <JiggleContext.Provider value={state}>
            {props.children}
        </JiggleContext.Provider>
    )
}