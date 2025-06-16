import "@/app/globals.css";
import React from 'react'
import Footer from "@/app/_templates/footer" 
import FormDefault from '@/app/_templates/formDefault'
import SnackBar from '@/app/_templates/snackbar'
import { SnackBarProvider }from '@/app/_templates/snackbarContext'

export const metadata = {
  title: "Login - Nievo Finance",
};

export default function LoginLayout({ children }) {
  return (
      <SnackBarProvider>
        <FormDefault>
            {children}
            <SnackBar />
        </FormDefault>
        <Footer />
      </SnackBarProvider>
  )
}

