import "@/app/globals.css";
import React from 'react'
import Header from "@/app/_templates/header" 
import Footer from "@/app/_templates/footer" 

export const metadata = {
  Nav: "Home - Nievo Finance"
};

export default function HomeLayout({ children }) {
  return (
      <React.Fragment>
        <Header
          Nav={metadata.Nav}
        />
        {children}
        <Footer />
      </React.Fragment>
  );
}
