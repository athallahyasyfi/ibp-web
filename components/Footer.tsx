import {
  Phone,
  Mail,
  AtSign,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-gray-900 text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Form kiri */}
          <div>

            <h2 className="text-3xl font-bold mb-4">
              Minta Penawaran
            </h2>

            <p className="text-gray-400 mb-8">
              Isi formulir berikut dan tim kami akan
              menghubungi Anda secepat mungkin.
            </p>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full bg-gray-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Nomor WhatsApp"
                className="w-full bg-gray-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows={4}
                placeholder="Pesan atau kebutuhan Anda..."
                className="w-full bg-gray-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl font-medium transition"
              >
                Kirim Penawaran
              </button>

            </form>

          </div>

          {/* Kontak kanan */}
          <div>

            <h2 className="text-3xl font-bold mb-4">
              Hubungi Kami
            </h2>

            <p className="text-gray-400 mb-8">
              Informasi kontak resmi PT. IDEAA BUDI PERKASA
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Phone className="text-blue-500" />
                <span>+62 812 3456 7890</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-blue-500" />
                <span>info@ideaabudi.com</span>
              </div>

              <div className="flex items-center gap-4">
                <AtSign className="text-blue-500" />
                <span>@ideaabudiperkasa</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500" />
                <span>
                  Bandar Lampung, Lampung, Indonesia
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          © 2026 PT. IDEAA BUDI PERKASA — All Rights Reserved
        </div>

      </div>
    </footer>
  );
}