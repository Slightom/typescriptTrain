import React, { createContext, useContext, useState } from "react";


interface GlobalContextState {
    mainColor: string;
    secondColor: string;
}

interface GlobalContextStateAndActions extends GlobalContextState {
    setMainColor: (color: string) => void;
    setSecondColor: (color: string) => void;
}

const initState: GlobalContextState = {
    mainColor: 'orange',
    secondColor: 'green'
}

export const GlobalContext = createContext<GlobalContextStateAndActions>({} as GlobalContextStateAndActions);

export const GlobalContextProvider = ({ children }: any) => {
    const [mainColor, setMainColor] = useState(initState.mainColor);
    const [secondColor, setSecondColor] = useState(initState.secondColor);

    return (
        <GlobalContext.Provider value={{
            mainColor,
            secondColor,
            setMainColor,
            setSecondColor
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);


export const ThemeContext = createContext('light');