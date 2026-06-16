import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCatalogPage from "@/components/ProductCatalogPage";

export const metadata: Metadata = {
  title: "Katalog Produk Alat Kesehatan & Laboratorium",
  description: "Cari dan temukan alat kesehatan (AKD/AKL), bahan habis pakai (BMHP), instrumen laboratorium, reagen patologi, dan alat bantu rehabilitasi medis resmi dari PT. IDEAA BUDI PERKASA.",
  alternates: {
    canonical: "/produk"
  }
};

export default function ProdukMainPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductCatalogPage />
      </main>
      <Footer />
    </>
  );
}
