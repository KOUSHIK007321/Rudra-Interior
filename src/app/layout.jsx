import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Rudra Interior",
  description: "Creative Interior Solutions in Kolkata",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}