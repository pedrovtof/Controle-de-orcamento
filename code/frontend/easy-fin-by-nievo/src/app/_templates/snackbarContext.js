"use client"
import {React, createContext, useState, useContext, useEffect} from 'react';

const SnackBarContext = createContext()

export const SnackBarProvider = (({children})=>{
    const [snackbar, setSnack] = useState({ visible: false, message: '', color:null})

    useEffect(() => {
    if (snackbar.visible) {
      const timer = setTimeout(() => {
        setSnack({ visible: false, message: '' })
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [snackbar])

    return(
            <SnackBarContext.Provider value={{ snackbar, setSnack }}>
                {children}
            </SnackBarContext.Provider>
    )
})


export const useSnack = () => useContext(SnackBarContext) 