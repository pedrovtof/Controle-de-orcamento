import "@/app/globals.css";

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
