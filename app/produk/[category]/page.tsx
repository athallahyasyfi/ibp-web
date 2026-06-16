import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  Package, 
  Microscope, 
  FlaskConical, 
  HeartHandshake, 
  Check, 
  ArrowRight, 
  LayoutGrid,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCategoryData, getCategories, urlFor } from "@/lib/sanity";
import Link from "next/link";

const IconMap = {
  Package: Package,
  Microscope: Microscope,
  FlaskConical: FlaskConical,
  HeartHandshake: HeartHandshake,
};

interface Props {
  params: Promise<{ category: string }>;
}

// 1. Dynamic Metadata Generation from Sanity / Fallback
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const catData = await getCategoryData(category);
  
  if (!catData) {
    return {
      title: "Kategori Tidak Ditemukan",
    };
  }

  return {
    title: `${catData.title} - Kategori Produk`,
    description: catData.desc,
    alternates: {
      canonical: `/produk/${category}`
    }
  };
}

export default async function CategoryProductPage({ params }: Props) {
  const { category } = await params;
  
  // Load categories and category data from Sanity
  const [categoriesList, activeCategory] = await Promise.all([
    getCategories(),
    getCategoryData(category)
  ]);

  // If the category slug is invalid, render 404
  if (!activeCategory) {
    notFound();
  }

  const ActiveIcon = IconMap[activeCategory.iconName as keyof typeof IconMap] || Package;

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/" className="hover:text-blue-500 transition">Beranda</Link>
            <ChevronRight size={12} className="text-gray-400 shrink-0" />
            <Link href="/produk" className="hover:text-blue-500 transition">Produk</Link>
            <ChevronRight size={12} className="text-gray-400 shrink-0" />
            <span className="text-gray-900 font-bold">{activeCategory.title}</span>
          </div>

          <div className="grid lg:grid-cols-4 gap-10">
            {/* 2. Sidebar Navigation */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-1">
                  Semua Kategori
                </h3>
                <nav className="flex flex-col gap-1.5">
                  <Link
                    href="/produk"
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition"
                  >
                    <LayoutGrid size={16} />
                    <span>Semua Produk</span>
                  </Link>

                  {categoriesList.map((cat: any) => {
                    const CatIcon = IconMap[cat.iconName as keyof typeof IconMap] || Package;
                    const isActive = cat.slug === category;

                    return (
                      <Link
                        key={cat.slug}
                        href={`/produk/${cat.slug}`}
                        className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                          isActive
                            ? "bg-blue-500 text-white shadow-md shadow-blue-500/25"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <CatIcon size={16} className={isActive ? "text-white" : "text-gray-400"} />
                        <span className="line-clamp-1">{cat.title}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* B2B Support Box */}
              <div className="bg-blue-500 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl -translate-y-8 translate-x-8"></div>
                <h4 className="font-bold text-lg mb-2 relative z-10">Layanan B2B Medis</h4>
                <p className="text-xs text-blue-100 leading-relaxed mb-4 relative z-10">
                  Butuh penawaran harga khusus (RFQ) dalam jumlah besar untuk Rumah Sakit, Klinik, atau Instansi Pemerintahan? Hubungi tim marketing kami.
                </p>
                <Link
                  href="/#kontak"
                  className="inline-block bg-white text-blue-600 text-xs font-bold px-4 py-2.5 rounded-lg shadow hover:bg-blue-50 transition"
                >
                  Ajukan RFQ Resmi
                </Link>
              </div>
            </div>

            {/* 3. Category Header & Products Grid */}
            <div className="lg:col-span-3 space-y-8">
              {/* Header Box */}
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0 shadow-inner">
                  <ActiveIcon size={32} />
                </div>
                <div>
                  <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                    {activeCategory.title}
                  </h1>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                    {activeCategory.desc}
                  </p>
                </div>
              </div>

              {/* Products List Grid */}
              {activeCategory.products.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {activeCategory.products.map((prod: any) => {
                    const isAKD = prod.type.includes("AKD");
                    const isAKL = prod.type.includes("AKL");

                    const waText = encodeURIComponent(
                      `Halo PT. IDEAA BUDI PERKASA, saya sedang melihat produk *${prod.name}* di kategori *${activeCategory.title}*. Saya ingin menanyakan informasi stok, harga resmi, serta prosedur pemesanan.`
                    );
                    const waUrl = `https://wa.me/6281234567890?text=${waText}`;

                    return (
                      <div 
                        key={prod.id}
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col overflow-hidden hover:shadow-lg transition duration-250 group"
                      >
                        {/* Product Image */}
                        {prod.image && (
                          <div className="h-48 w-full bg-gray-50 flex items-center justify-center border-b border-gray-100 overflow-hidden relative shrink-0">
                            <img 
                              src={urlFor(prod.image).url()} 
                              alt={prod.name} 
                              className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}

                        <div className="p-6 flex-1 flex flex-col">
                          
                          {/* Top Info */}
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                              {prod.brand}
                            </span>
                            <div className="flex gap-1">
                              {isAKD && (
                                <span className="text-[10px] font-bold bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded">
                                  AKD
                                </span>
                              )}
                              {isAKL && (
                                <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded">
                                  AKL
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Title & Description */}
                          <h3 className="text-xl font-bold text-gray-900 mb-2.5">
                            {prod.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-1">
                            {prod.desc}
                          </p>

                          {/* Full Specs List */}
                          {prod.specs && prod.specs.length > 0 && (
                            <div className="border-t border-gray-100 pt-4 mb-6">
                              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                                Spesifikasi Produk:
                              </h4>
                              <ul className="space-y-2">
                                {prod.specs.map((spec: any, i: number) => (
                                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed">
                                    <Check size={14} className="text-blue-500 shrink-0 mt-0.5" />
                                    <span>{spec}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* WhatsApp Contact CTA */}
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition group"
                          >
                            <span>Minta Penawaran</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition duration-200" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-16 text-center max-w-lg mx-auto">
                  <Package className="mx-auto text-blue-500 mb-6 bg-blue-50 p-3.5 rounded-2xl" size={64} />
                  <h3 className="text-xl font-bold text-gray-900">Produk Belum Tersedia</h3>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
