import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Onam Veg",
  description: "Authentic South Indian Vegetarian Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#1a1a1a]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
