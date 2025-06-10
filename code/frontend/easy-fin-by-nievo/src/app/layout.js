import "./globals.css";
import Header from "@/pages/_templates/header" 
import Footer from "@/pages/_templates/footer" 

export const metadata = {
  title: "Home - Nievo Finance"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
