"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  AtSign,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !whatsapp.trim() || !pesan.trim()) {
      alert("Mohon lengkapi Nama Lengkap, Nomor WhatsApp, dan Pesan Anda.");
      return;
    }

    const text = `Halo PT. IDEAA BUDI PERKASA, saya ingin meminta penawaran dengan detail berikut:
- *Nama Lengkap*: ${nama.trim()}
- *Email*: ${email.trim() || "-"}
- *Nomor WhatsApp*: ${whatsapp.trim()}
- *Pesan/Kebutuhan*: ${pesan.trim()}`;

    const waUrl = `https://wa.me/628117232107?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };
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

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Nama Lengkap"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                className="w-full bg-gray-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />

              <input
                type="email"
                placeholder="Email (Opsional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />

              <input
                type="text"
                placeholder="Nomor WhatsApp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                className="w-full bg-gray-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />

              <textarea
                rows={4}
                placeholder="Pesan atau kebutuhan Anda..."
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                required
                className="w-full bg-gray-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl font-medium transition cursor-pointer text-white"
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

            <div className="space-y-6 mb-8">

              <div className="flex items-center gap-4">
                <Phone className="text-blue-500 shrink-0" />
                <a 
                  href="https://wa.me/628117232107" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition"
                >
                  +62 811-7232-107
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-blue-500 shrink-0" />
                <a 
                  href="mailto:info@ideaabudi.com" 
                  className="hover:text-blue-400 transition"
                >
                  info@ideaabudi.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <AtSign className="text-blue-500 shrink-0" />
                <a 
                  href="https://instagram.com/ideaabudiperkasa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition"
                >
                  @ideaabudiperkasa
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500 shrink-0" />
                <span className="text-sm">
                  Perumahan Garden Residence, Jl. Pramuka Blk. C No. 10, Rajabasa, Bandar Lampung
                </span>
              </div>

            </div>

            {/* Google Map Embedded */}
            <div className="w-full h-60 rounded-2xl overflow-hidden border border-gray-800 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.19172421379!2d105.2250834!3d-5.3765443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c5fe203e1197%3A0x604b36701320a4c5!2sPT.+IDEAA+BUDI+PERKASA!5e0!3m2!1sid!2sid!4v1718520000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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