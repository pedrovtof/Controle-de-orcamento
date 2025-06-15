import "@/app/globals.css";
import React from 'react'
import Footer from "@/app/_templates/footer" 
import FormDefault from '@/app/_templates/formDefault'

export const metadata = {
  title: "Login - Nievo Finance",
};

export default function LoginLayout({ children }) {
  return (
      <React.Fragment>
        <FormDefault>
          {children}
        </FormDefault>
        <Footer />
      </React.Fragment>
  )
}

