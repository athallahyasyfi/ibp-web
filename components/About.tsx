import Image from "next/image";
import companyImage from "../assets/about.webp";
import logo from "../assets/logo.png";
import cdakbBadge from "../assets/CDAKB.png";

const legalitas = ["NIB : 0220002352246", "S-IDAK 02200023522460003", "NPWP : 94.718.948.6-323.000"];

const parseLegal = (item: string) => {
  if (item.includes(" : ")) {
    return item.split(" : ");
  }
  const firstSpaceIndex = item.indexOf(" ");
  if (firstSpaceIndex !== -1) {
    return [item.substring(0, firstSpaceIndex), item.substring(firstSpaceIndex + 1)];
  }
  return [item, ""];
};

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
        <div className="mt-24 border-t border-gray-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Kiri: Deskripsi & Daftar Legalitas */}
            <div className="lg:col-span-2">
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                Legalitas Perusahaan
              </span>

              <h3 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">
                Izin Resmi dan Kepatuhan Regulasi
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl">
                Sebagai distributor resmi, kami berkomitmen penuh untuk menjalankan operasional perusahaan secara legal dan profesional, sesuai dengan regulasi kesehatan nasional yang berlaku di Indonesia.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {legalitas.map((item) => {
                  const [title, value] = parseLegal(item);
                  let displayTitle = title;
                  if (title === "NIB") displayTitle = "Nomor Induk Berusaha";
                  if (title === "S-IDAK") displayTitle = "Sertifikat Distribusi";
                  if (title === "NPWP") displayTitle = "NPWP Perusahaan";

                  return (
                    <div
                      key={item}
                      className="border-l-2 border-blue-500 pl-4 py-1.5"
                    >
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                        {displayTitle} ({title})
                      </span>
                      <span className="font-mono text-gray-800 text-sm font-bold mt-1 block">
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Kanan: Sorotan Sertifikasi CDAKB */}
            <div className="lg:col-span-1 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-28 h-28 relative mb-6 flex items-center justify-center">
                <Image
                  src={cdakbBadge}
                  alt="Sertifikasi CDAKB"
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">
                Sertifikasi CDAKB
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
                Kami telah memenuhi standar kelayakan <strong>Cara Distribusi Alat Kesehatan yang Baik (CDAKB)</strong> resmi dari Kementerian Kesehatan Republik Indonesia.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}