import { createContext, useContext, useState } from "react";

export const PageContext = createContext(false)

export function PageContextProvider(props) {
    const [screen, setScreen] = useState(false)

    const state = {screen, setScreen}
    
    return(
        <PageContext.Provider value={state}>
            {props.children}
        </PageContext.Provider>
    )
}
