'use client'
import { createContext, useState } from "react"

const Authcontext = createContext<any | null>(false)

interface props {
   children: any; 
}
function AuthProvider(prop:props){
    const [status, setStatus] = useState<string | null>('normal')
    const [dataApi, setDataApi] = useState([])

    //Modal control
    let [updateModal, setUpdateModal] = useState(false)

    return (
        <Authcontext.Provider value ={{status, setStatus, dataApi, setDataApi, updateModal, setUpdateModal}}>
            {prop.children}
        </Authcontext.Provider>
    )
}

export {Authcontext, AuthProvider}