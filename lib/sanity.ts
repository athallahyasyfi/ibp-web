import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { categoriesData, Product } from "./productData";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mock-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-06-04",
  useCdn: false,
});

// Image URL Builder
const builder = createImageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}

// Checks if sanity credentials are valid / not placeholders
const isSanityConfigured = () => {
  const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return id && id !== "mock-project-id" && id.trim() !== "";
};

// 1. Fetch categories (Fixed to local 4 categories)
export async function getCategories() {
  return Object.values(categoriesData).map(c => ({
    slug: c.slug,
    title: c.title,
    desc: c.desc,
    iconName: c.iconName,
  }));
}

// 2. Fetch all products
export async function getAllProducts() {
  if (!isSanityConfigured()) {
    return [];
  }

  try {
    const data = await client.fetch(
      `*[_type == "product"] { 
        "id": _id, 
        name, 
        brand, 
        type, 
        "desc": description, 
        specs, 
        "categorySlug": category,
        image
      }`
    );
    if (data && data.length > 0) {
      return data.map((prod: any) => {
        const catInfo = categoriesData[prod.categorySlug] || { title: prod.categorySlug, iconName: "Package" };
        return {
          ...prod,
          categoryTitle: catInfo.title,
          iconName: catInfo.iconName,
        };
      });
    }
  } catch (error) {
    console.warn("Sanity fetch products failed.", error);
  }

  return [];
}

// 3. Fetch products by category slug
export async function getCategoryData(slug: string) {
  const cat = categoriesData[slug];
  if (!cat) return null;

  const emptyCat = {
    slug: cat.slug,
    title: cat.title,
    desc: cat.desc,
    iconName: cat.iconName as "Package" | "Microscope" | "FlaskConical" | "HeartHandshake",
    products: [],
  };

  if (!isSanityConfigured()) {
    return emptyCat;
  }

  try {
    const products = await client.fetch(
      `*[_type == "product" && category == $slug] { "id": _id, name, brand, type, "desc": description, specs, image }`,
      { slug }
    );
    return {
      slug: cat.slug,
      title: cat.title,
      desc: cat.desc,
      iconName: cat.iconName as "Package" | "Microscope" | "FlaskConical" | "HeartHandshake",
      products: products && products.length > 0 ? products : [],
    };
  } catch (error) {
    console.warn(`Sanity fetch products for category ${slug} failed.`, error);
  }

  return emptyCat;
}

// 4. Fetch articles
const fallbackArticles = [
  {
    id: "art-1",
    category: "Edukasi",
    date: "04 Juni 2026",
    readTime: "5 Menit Baca",
    title: "Tips Merawat Alat Laboratorium Klinik Agar Tetap Akurat",
    desc: "Panduan praktis pemeliharaan harian (daily maintenance) instrumen hematologi dan kimia klinik untuk memperpanjang usia alat.",
    body: "Pemeliharaan harian (daily maintenance) merupakan kunci utama untuk memastikan instrumen laboratorium klinis seperti hematology analyzer dan chemistry analyzer bekerja dengan akurasi optimal. Tanpa pemeliharaan yang rutin, sisa sampel darah atau reagen dapat mengendap dan menyumbat saluran mikro (aperture), memicu deviasi hasil pembacaan sel darah.\n\nLangkah pemeliharaan harian yang direkomendasikan:\n- Lakukan pembersihan Probe Wiper dengan larutan pembersih khusus (cleanser) setiap akhir shift kerja.\n- Jalankan fungsi Auto-Rinse / Background Count sebelum memulai analisis sampel harian untuk memastikan pembacaan baseline berada pada batas normal.\n- Periksa level volume reagen (diluent, lyse, rinse) secara visual dan pastikan tidak ada gelembung udara pada selang aliran reagen.\n\nDengan menerapkan disiplin pemeliharaan harian ini, masa pakai suku cadang instrumen Anda dapat bertahan hingga 30% lebih lama, serta meminimalisir risiko downtime mendadak saat pelayanan pasien sedang padat.",
    iconName: "Microscope",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "art-2",
    category: "Regulasi",
    date: "28 Mei 2026",
    readTime: "7 Menit Baca",
    title: "Memahami Izin Edar AKD dan AKL pada Alat Kesehatan",
    desc: "Edukasi lengkap mengenai regulasi pengadaan alat kesehatan dalam negeri (AKD) dan luar negeri (AKL) resmi dari Kemenkes RI.",
    body: "Bagi institusi medis maupun distributor alat kesehatan di Indonesia, memahami perbedaan regulasi izin edar AKD (Alat Kesehatan Dalam Negeri) dan AKL (Alat Kesehatan Luar Negeri) merupakan hal yang mutlak demi kepatuhan hukum dan kelancaran proses pengadaan barang (seperti e-Katalog LKPP).\n\nPerbedaan Pokok AKD dan AKL:\n\nAKD (Alat Kesehatan Dalam Negeri): Diberikan kepada produk alat kesehatan yang diproduksi oleh produsen lokal berizin di dalam wilayah Indonesia. Memiliki nilai TKDN (Tingkat Komponen Dalam Negeri) yang menjadikannya prioritas dalam sistem pengadaan belanja negara.\n\nAKL (Alat Kesehatan Luar Negeri): Diberikan kepada produk alat kesehatan impor yang diproduksi di luar negeri. Harus didaftarkan oleh distributor lokal pemegang kuasa resmi (PPAK) dengan melampirkan sertifikat mutu global (seperti ISO 13485) dan CFS dari instansi berwenang negara asal.\n\nKedua kategori tersebut wajib mengantongi nomor izin edar resmi dari Direktorat Jenderal Kefarmasian dan Alat Kesehatan Kementerian Kesehatan RI sebelum didistribusikan ke rumah sakit atau klinik.",
    iconName: "ShieldCheck",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    id: "art-3",
    category: "Teknologi",
    date: "15 Mei 2026",
    readTime: "6 Menit Baca",
    title: "Pentingnya Kalibrasi Berkala Alat Laboratorium Medis",
    desc: "Mengapa kalibrasi rutin instrumen diagnosis sangat penting untuk menjamin validitas hasil uji klinis pasien dan diagnosis dokter.",
    body: "Kalibrasi berkala pada instrumen laboratorium medis bukan sekadar formalitas administrasi atau kepatuhan akreditasi rumah sakit semata. Hal ini berdampak langsung pada keakuratan keputusan klinis yang diambil oleh dokter spesialis patologi maupun dokter penanggung jawab pasien.\n\nMengapa kalibrasi berkala wajib dilakukan?\n- Mencegah Kesalahan Diagnosis: Hasil glukosa darah atau hitung sel darah yang menyimpang akibat sensor instrumen yang tidak terkalibrasi dapat berujung pada salah diagnosis atau tindakan medis yang keliru.\n- Menjaga Stabilitas Sensor: Sensor cahaya pada analyzer kimia klinik lambat laun mengalami penurunan sensitivitas. Kalibrasi memulihkan baseline absorbansi reagen.\n- Kepatuhan Hukum: Regulasi nasional menetapkan pengujian kelayakan alat kesehatan secara periodik (minimal 1 tahun sekali) oleh balai penguji resmi terakreditasi.\n\nPastikan instrumen laboratorium Anda selalu dikalibrasi tepat waktu oleh teknisi bersertifikasi resmi demi menjaga keandalan diagnosa dan keselamatan pasien.",
    iconName: "Wrench",
    color: "from-sky-400 to-sky-600",
  },
];

const colorMap: Record<string, string> = {
  Microscope: "from-blue-400 to-blue-600",
  ShieldCheck: "from-indigo-400 to-indigo-600",
  Wrench: "from-sky-400 to-sky-600",
  Package: "from-blue-400 to-indigo-600",
  FlaskConical: "from-purple-400 to-purple-600",
  HeartHandshake: "from-rose-400 to-rose-600",
};

export async function getArticles() {
  if (!isSanityConfigured()) {
    return [];
  }

  try {
    const data = await client.fetch(
      `*[_type == "article"] | order(date desc) { 
        "id": _id, 
        title, 
        "category": category, 
        date, 
        readTime, 
        "desc": description, 
        body, 
        image 
      }`
    );
    if (data && data.length > 0) {
      return data;
    }
  } catch (error) {
    console.warn("Sanity fetch articles failed.", error);
  }

  return [];
}
