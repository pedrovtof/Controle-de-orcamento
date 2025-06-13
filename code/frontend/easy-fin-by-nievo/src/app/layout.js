import "./globals.css";
import Header from "@/pages/_templates/header" 
import Footer from "@/pages/_templates/footer" 

export const metadata = {
  title: "Home - Nievo Finance",
  Nav:"Easy Fin By Nievo"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header 
          Nav={metadata.Nav}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
