//compulsory in context
//provide rights to the components to use context data
import { Children, createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({
    user:null,
    setuser:null
})//Creation of data

export function UserProvider({children})
{
    const [user,setuser]=useState(null)
    const value={user,setuser}
    return(
       
        <UserContext.Provider value={value}>
        {children}
        </UserContext.Provider>
        
    )
}