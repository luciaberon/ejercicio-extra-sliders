import React, { createContext, useState } from 'react'

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [charactersList, setCharacters] = useState([]);



    return (
        <Context.Provider value={{
            charactersList,
            setCharacters
        }}>
            { children }
        </Context.Provider>
    )
}