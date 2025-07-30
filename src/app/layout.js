import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./contexts/AuthContext";
import { notFound } from "next/navigation";
import ChatButton from "./components/Whatsappicon";
import Google from "./components/Google";

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
  title: "Oma-airflight – Efficient Global Shipping Solutions",
  description:
    "Oma-airflight offers fast, reliable cargo and logistics services, connecting businesses globally with secure and timely shipping solutions. Discover seamless delivery with our industry expertise.",
  openGraph: {
    title: "Oma-airflight – Efficient Global Shipping Solutions",
    description:
      "Oma-airflight offers fast, reliable cargo and logistics services, connecting businesses globally with secure and timely shipping solutions. Discover seamless delivery with our industry expertise.",

    images: [
      {
        url: "/download.png",
        width: 800,
        height: 600,
      },
      {
        url: "/download.png",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

async function getdatabyId() {
  const res = await fetch(`${process.env.URL}/api/whatsapp/`, {
    cache: "no-store",
  });
  if (!res.ok) {
    let data = {
      number : 1235
    }
    return data;
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
        <Google />
        <AuthContextProvider>
          <Navbar />
          <ChatButton number={dat[0].whatsappNumber} />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
