import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const [searchFilter, SetSearchFilter] = useState({
        title: '',
        location: ''
    })

    const [isSearched, setIsSearched] = useState(false)

    const value = {

        searchFilter,SetSearchFilter,
        isSearched,setIsSearched,

    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)

}

