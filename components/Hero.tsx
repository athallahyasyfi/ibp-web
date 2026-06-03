import Image from "next/image";
import heroImage from "../assets/hero.png";
import bioLogo from "../assets/bio.png";
import geaLogo from "../assets/gea.png";
import mindrayLogo from "../assets/mindray.png";

export default function Hero() {
  return (
    <section className="bg-gray-100">
      {/* 1. KONTEN UTAMA HERO */}
      <div className="px-6 lg:px-10 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

          {/* Kiri */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Solusi Alat Kesehatan <br />
              dan Laboratorium
            </h1>

            <p className="text-gray-500 text-base md:text-lg mb-8">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur adipisicing elit.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition cursor-pointer">
                Lihat Product
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-white transition cursor-pointer">
                Minta Penawaran
              </button>
            </div>
          </div>

          {/* Kanan */}
          <div className="flex-1 flex justify-center">
            <Image
              src={heroImage}
              alt="Produk"
              width={700}
              height={700}
              className="w-auto md:w-[500px] lg:w-[700px] h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>

        </div>
      </div>

      {/* 2. BAGIAN BRAND SHOWCASE (LOGO CLOUD) */}
      <div className="bg-blue-500 py-6 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Barisan Logo Menggunakan Import Variabel */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 flex-1">

            <Image
              src={bioLogo}
              alt="bio"
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90"
            />

            <Image
              src={geaLogo}
              alt="Gea"
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-90"
            />

            <Image
              src={mindrayLogo}
              alt="Mindray"
              className="h-12 md:h-14 w-auto object-contain brightness-0 invert opacity-90"
            />

          </div>

          {/* Tombol Lihat Semua Brand */}
          <div className="shrink-0">
            <a
              href="#katalog"
              className="bg-white text-gray-800 text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 transition inline-block whitespace-nowrap"
            >
              Lihat Semua Brand
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}