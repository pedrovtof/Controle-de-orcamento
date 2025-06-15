import "@/app/globals.css";
import Header from "@/app/_templates/header" 
import Footer from "@/app/_templates/footer" 

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
