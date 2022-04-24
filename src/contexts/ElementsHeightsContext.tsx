import React, { createContext, useContext, useState } from 'react';

interface ElementsHeightsContextState {
    appBarHeight: number | undefined;
}

interface ElementsHeightsContextStateAndActions extends ElementsHeightsContextState {
    setState: (state: ElementsHeightsContextState) => void;
}

const ElementsHeightsContext = createContext<ElementsHeightsContextStateAndActions>({} as ElementsHeightsContextStateAndActions);

export const ElementsHeightsContextProvider = ({ children }: any) => {
    const [state, setState] = useState({} as ElementsHeightsContextState);

    return (
        <ElementsHeightsContext.Provider value={{
            ...state,
            setState
        }}>
            {children}
        </ElementsHeightsContext.Provider>
    )
}

export const useElementsHeightsContext = () => useContext(ElementsHeightsContext);