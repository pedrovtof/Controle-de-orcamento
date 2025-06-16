"use client"
import React from 'react'
import { useSnack } from '@/app/_templates/snackbarContext'

function SnackBar(){
    const { snackbar } = useSnack();

    const colorClasses = {
        sucess: "bg-green-900",
        error: "bg-red-900",
        advice: "bg-blue-900",
        warning: "bg-amber-400",
        default: "bg-gray-900"
    }

    return (
        <React.Fragment>
           {
            snackbar.visible?
            <div className={`fixed top-5 left-5 text-white p-4 ${colorClasses[snackbar.color?snackbar.color:'default']} rounded-md shadow-lg`}>
            {snackbar.message}
            </div>:null
            }
        </React.Fragment>
    )
}

export default SnackBar;
