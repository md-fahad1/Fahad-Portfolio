import { Lato, Pacifico, Space_Grotesk, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Pagewrapper from "./components/PageWrapper/PageWrapper";

const lato = Lato({
  weight: ["400", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});
const pacifico = Pacifico({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});
// Used for section headings across Hero/About/Skills/Experties/Contact/Footer
const spaceGrotesk = Space_Grotesk({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});
// Used for the small mono labels/badges ("Available for work", dates, etc.)
const jetbrainsMono = JetBrains_Mono({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const siteUrl = "https://your-domain.com"; // TODO: replace with your real deployed URL

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fahad Khan | Full-Stack Developer",
    template: "%s | Fahad Khan",
  },
  description:
    "Portfolio of Fahad Khan, a Junior Full-Stack Developer specializing in React, Next.js, Angular, Node.js, and GraphQL. Explore my projects, skills, and experience.",
  keywords: [
    "Fahad Khan",
    "Full-Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Bangladesh Developer",
  ],
  authors: [{ name: "Fahad Khan" }],
  creator: "Fahad Khan",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Fahad Khan | Full-Stack Developer",
    description:
      "Portfolio of Fahad Khan, a Junior Full-Stack Developer specializing in React, Next.js, Angular, Node.js, and GraphQL.",
    siteName: "Fahad Khan Portfolio",
    images: [
      {
        url: "/og-image.png", // TODO: add a 1200x630 preview image to /public
        width: 1200,
        height: 630,
        alt: "Fahad Khan — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahad Khan | Full-Stack Developer",
    description:
      "Portfolio of Fahad Khan, a Junior Full-Stack Developer specializing in React, Next.js, Angular, Node.js, and GraphQL.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${pacifico.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} !scroll-smooth`}
    >
      <body className={lato.className}>
        <Pagewrapper>
          <Navbar />
          {children}
          <Footer />
        </Pagewrapper>
      </body>
    </html>
  );
}