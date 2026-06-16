import {
  Package,
  Microscope,
  FlaskConical,
  HeartHandshake,
  Download,
} from "lucide-react";
import Link from "next/link";

const kategori = [
  {
    icon: Package,
    title: "Consumable",
    desc: "Bahan Medis Habis Pakai (BMHP) laboratorium dan alat kesehatan.",
    slug: "consumable",
  },
  {
    icon: Microscope,
    title: "IVD Instrument",
    desc: "Rangkaian instrumen laboratorium In Vitro Diagnostic (IVD).",
    slug: "ivd-instrument",
  },
  {
    icon: FlaskConical,
    title: "IVD Reagent",
    desc: "Reagen laboratorium klinik dan patologi anatomi.",
    slug: "ivd-reagent",
  },
  {
    icon: HeartHandshake,
    title: "Rehabilitation & Assistive Devices",
    desc: "Alat bantu pemulihan dan rehabilitasi medis.",
    slug: "rehabilitation-assistive-devices",
  },
];

export default function ProductCategory() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Kategori Produk
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Produk kami telah memiliki izin edar resmi dari
            Kementerian Kesehatan RI.
          </p>
        </div>

        {/* AKD & AKL */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">

          <div className="bg-blue-500 text-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-xl mb-3">
              AKD (Alat Kesehatan Dalam Negeri)
            </h3>

            <p className="text-blue-100">
              Produk alat kesehatan yang diproduksi di Indonesia
              dengan standar mutu nasional maupun internasional.
            </p>
          </div>

          <div className="bg-blue-500 text-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-xl mb-3">
              AKL (Alat Kesehatan Luar Negeri)
            </h3>

            <p className="text-blue-100">
              Produk impor dengan izin edar resmi dari
              Kementerian Kesehatan RI serta standar kualitas global.
            </p>
          </div>

        </div>

        {/* Card kategori */}
        <div className="grid md:grid-cols-2 gap-8">

          {kategori.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-gray-50 p-8 rounded-2xl border hover:shadow-lg transition duration-300 border-gray-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                  <Icon
                    className="text-blue-500"
                    size={28}
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-500 mb-8">
                  {item.desc}
                </p>

                <Link
                  href={`/produk/${item.slug}`}
                  className="text-blue-500 font-medium hover:text-blue-700"
                >
                  Lihat Katalog Lengkap →
                </Link>
              </div>
            );
          })}
        </div>

        {/* Download Brosur */}
        <div id="download-brosur" className="mt-20 bg-blue-500 rounded-3xl p-10 text-white shadow-xl scroll-mt-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            <div>
              <h3 className="text-3xl font-bold mb-2">
                Download Brosur Produk
              </h3>

              <p className="text-blue-100">
                Unduh katalog dan brosur lengkap untuk melihat
                detail produk dan spesifikasi alat kesehatan kami.
              </p>
            </div>

            <a
              href="/brosur.pdf"
              download
              className="bg-white text-blue-500 px-6 py-4 rounded-xl flex items-center gap-2 hover:scale-105 transition"
            >
              <Download size={20} />
              Download Brosur
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}