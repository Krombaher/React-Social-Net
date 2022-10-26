import React, {ReactNode} from "react";
import {StoreReduxType} from "./redux/Type";

export const StoreContext = React.createContext({} as StoreReduxType)

export type ProviderType = {
    store: StoreReduxType
    children: ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}


