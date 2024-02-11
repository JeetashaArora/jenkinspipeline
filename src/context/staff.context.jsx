import { createContext, useState } from "react";
import staffList from "../staffList";

export const StaffContext = createContext(
    {
        staff:[]
    }
)
export function Staffprovider({children})
{
    const [staff,setStaff]=useState(staffList)
    const value ={staff}
    return(
        <StaffContext.Provider value={value}>
        {children}
        </StaffContext.Provider>

    )
}