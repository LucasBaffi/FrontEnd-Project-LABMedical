

import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext()

 export const LoginProvider = ({ children }) => {

    const [loginOn, setLoginon] = useState(false)
    const [user, setUser] = useState({})

    const login = (userData) => {
        setLoginon(true)
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    const logout = () => {
        setLoginon(false)
        setUser(null)
        localStorage.removeItem('user')
        
    }

    useEffect(() => {
        const user = localStorage.getItem('user')

      if(  user){
         setUser(JSON.parse(user))
         setLoginon(true)
        
        }
    }, [])

    return (
        <LoginContext.Provider value={{ loginOn, user, login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}


