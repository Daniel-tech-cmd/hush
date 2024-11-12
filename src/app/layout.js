import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./contexts/AuthContext";
import { notFound } from "next/navigation";
import ChatButton from "./components/Whatsappicon";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jetspeed Cargo – Efficient Global Shipping Solutions",
  description:
    "Jetspeed Cargo offers fast, reliable cargo and logistics services, connecting businesses globally with secure and timely shipping solutions. Discover seamless delivery with our industry expertise.",
};

async function getdatabyId() {
  const res = await fetch(`${process.env.URL}/api/whatsapp/`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

  return data;
}

export default async function RootLayout({ children }) {
  const data = getdatabyId();
  const [dat] = await Promise.all([data]);
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.className} antialiased`}
      >
        <AuthContextProvider>
          <Navbar />
          <ChatButton number={dat[0].whatsappNumber} />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
