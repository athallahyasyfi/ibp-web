import Image from "next/image";
import companyImage from "../assets/about.webp";
import logo from "../assets/logo.png";

const legalitas = ["NIB : 0220002352246", "S-IDAK 02200023522460003", "NPWP : 94.718.948.6-323.000"];

export default function About() {
  return (
    <section
      id="tentang-kami"
      className="bg-gray-100 px-6 lg:px-10 py-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Atas */}
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Kiri */}
          <div className="flex-1">

            <div className="flex items-center gap-3 mb-5">
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
              />

              <span className="font-bold text-blue-600">
                PT. IDEAA BUDI PERKASA
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Solusi Alat Kesehatan dan Laboratorium
              Terpercaya di Bandar Lampung
            </h2>

            <p className="text-gray-500 leading-7">
              Berbasis di Bandar Lampung, PT. Ideaa Budi Perkasa hadir sebagai mitra terpercaya dalam pengadaan dan distribusi alat kesehatan. Sejak tahun 2020, kami menyediakan berbagai peralatan medis berkualitas untuk rumah sakit, klinik, dan fasilitas kesehatan dengan standar pelayanan yang profesional, cepat, dan terpercaya.

              Kami percaya bahwa ketersediaan alat kesehatan yang tepat dan berkualitas merupakan kunci dalam mendukung pelayanan kesehatan yang optimal bagi masyarakat.
            </p>

          </div>

          {/* Kanan */}
          <div className="flex-1 flex justify-center">
            <Image
              src={companyImage}
              alt="Company"
              width={500}
              height={350}
              className="rounded-3xl border shadow-md"
            />
          </div>

        </div>

        {/* Legalitas */}
        <div className="mt-20">

          <span className="text-blue-600 font-semibold">
            Legalitas Perusahaan
          </span>

          <h3 className="text-2xl font-bold mt-2">
            Izin Resmi dan Kepatuhan Regulasi
          </h3>

          <p className="text-gray-500 mb-10">
            Kami menjalankan operasional perusahaan sesuai standar dan regulasi yang berlaku untuk memastikan keamanan, kualitas layanan, serta kepercayaan pelanggan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">

            {legalitas.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-md h-32 flex items-center justify-center border px-6 border-gray-300"
              >
                <span className="font-bold text-xl">
                  [{item}]
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}