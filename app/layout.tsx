import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "PT. IDEAA BUDI PERKASA | Distributor Alat Kesehatan & Laboratorium Lampung",
    template: "%s | PT. IDEAA BUDI PERKASA"
  },
  description: "PT. IDEAA BUDI PERKASA adalah distributor resmi alat kesehatan (AKD/AKL) dan instrumen laboratorium klinis terpercaya di Bandar Lampung. Kami melayani pengadaan B2B medis, rumah sakit, klinik, dan instrumen kesehatan berkualitas tinggi.",
  keywords: [
    "alat kesehatan",
    "distributor alat kesehatan lampung",
    "alat laboratorium klinik",
    "patologi anatomi",
    "reagensia laboratorium",
    "alkes AKD AKL",
    "PT IDEAA BUDI PERKASA",
    "Way Halim Bandar Lampung alkes"
  ],
  authors: [{ name: "PT. IDEAA BUDI PERKASA" }],
  creator: "PT. IDEAA BUDI PERKASA",
  publisher: "PT. IDEAA BUDI PERKASA",
  metadataBase: new URL("https://ideaabudiperkasa.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ideaabudiperkasa.com",
    title: "PT. IDEAA BUDI PERKASA | Alat Kesehatan & Laboratorium Lampung",
    description: "Distributor resmi alat kesehatan dan laboratorium klinik terpercaya di Bandar Lampung. Menyediakan produk berizin edar AKD/AKL Kementerian Kesehatan RI.",
    siteName: "PT. IDEAA BUDI PERKASA"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}