import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";



export const metadata = {
  title: "Onam Veg | Authentic South Indian Vegetarian Restaurant",
  description: "Fresh. Vegetarian. South Indian. Authentic flavours, clean ingredients, and fast service. Traditional Kerala cuisine in Cherthala.",
  keywords: "South Indian vegetarian, Kerala cuisine, Cherthala restaurant, vegetarian food",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#1a1a1a]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TF7PMG8R"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="beforeInteractive"
        >
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TF7PMG8R');`}
        </Script>
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
