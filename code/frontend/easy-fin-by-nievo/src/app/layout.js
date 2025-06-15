import "@/app/globals.css";
import dynamic from 'next/dynamic'
 

export const metadata = {
  title: "Nievo Finance"
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className="bg-gray-950">
        {children}
      </body>
    </html>
  );
}
