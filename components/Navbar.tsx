"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b px-6 py-4 relative border-gray-300">

      <div className="flex items-center justify-between">
        {/* Logo & Nama Perusahaan */}
        <div className="flex items-center gap-3">
          {/* 2. Gunakan komponen Image bawaan Next.js */}
          <Image
            src={logo}
            alt="Logo PT. IDEAA BUDI PERKASA"
            className="h-8 w-auto object-contain"
          />
          <span className="font-bold text-lg">
            PT. IDEAA BUDI PERKASA
          </span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex gap-10 text-sm text-gray-600">
          <a href="#beranda" className="hover:text-blue-500">Beranda</a>
          <a href="#product" className="hover:text-blue-500">Product</a>
          <a href="#katalog" className="hover:text-blue-500">Katalog</a>
          <a href="#tentang-kami" className="hover:text-blue-500">Tentang Kami</a>
          <a href="#artikel" className="hover:text-blue-500">Artikel</a>
          <a href="#kontak" className="hover:text-blue-500">Kontak</a>
        </div>

        {/* Tombol Desktop */}
        <a
          href="#"
          className="hidden lg:block bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Minta Penawaran
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`
          lg:hidden absolute top-full left-0 w-full bg-white shadow-lg
          transition-all duration-300 ease-in-out overflow-hidden
          ${open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        <div className="flex flex-col gap-5 p-6 text-gray-600">
          <a href="#beranda">Beranda</a>
          <a href="#product">Product</a>
          <a href="#katalog">Katalog</a>
          <a href="#tentang-kami">Tentang Kami</a>
          <a href="#artikel">Artikel</a>
          <a href="#kontak">Kontak</a>

          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-3 rounded-lg text-center"
          >
            Minta Penawaran
          </a>
        </div>
      </div>

    </nav>
  );
}