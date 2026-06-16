"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Package,
  Microscope,
  FlaskConical,
  HeartHandshake,
  LayoutGrid
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import { getCategories } from "../lib/sanity";

const initialCategories = [
  {
    title: "Consumable",
    href: "/produk/consumable",
    desc: "Bahan Medis Habis Pakai (BMHP)",
    iconName: "Package",
    color: "text-blue-500 bg-blue-50",
  },
  {
    title: "IVD Instrument",
    href: "/produk/ivd-instrument",
    desc: "Instrumen In Vitro Diagnostic",
    iconName: "Microscope",
    color: "text-indigo-500 bg-indigo-50",
  },
  {
    title: "IVD Reagent",
    href: "/produk/ivd-reagent",
    desc: "Reagen laboratorium & patologi",
    iconName: "FlaskConical",
    color: "text-purple-500 bg-purple-50",
  },
  {
    title: "Rehabilitation & Assistive Devices",
    href: "/produk/rehabilitation-assistive-devices",
    desc: "Alat bantu pemulihan & rehabilitasi",
    iconName: "HeartHandshake",
    color: "text-rose-500 bg-rose-50",
  },
];

const IconMap: Record<string, any> = {
  Package: Package,
  Microscope: Microscope,
  FlaskConical: FlaskConical,
  HeartHandshake: HeartHandshake,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [categories, setCategories] = useState(initialCategories);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch categories dynamically
  useEffect(() => {
    async function loadCategories() {
      try {
        const cats = await getCategories();
        const colorMap: Record<string, string> = {
          Package: "text-blue-500 bg-blue-50",
          Microscope: "text-indigo-500 bg-indigo-50",
          FlaskConical: "text-purple-500 bg-purple-50",
          HeartHandshake: "text-rose-500 bg-rose-50",
        };
        const formatted = cats.map((c: any) => ({
          title: c.title,
          href: `/produk/${c.slug}`,
          desc: c.desc,
          iconName: c.iconName,
          color: colorMap[c.iconName] || "text-blue-500 bg-blue-50",
        }));
        setCategories(formatted);
      } catch (error) {
        console.warn("Failed to load Sanity navbar categories, falling back.", error);
      }
    }
    loadCategories();
  }, []);

  return (
    <nav className="bg-white border-b px-6 py-4 relative border-gray-300 z-50">

      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo & Nama Perusahaan */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <Image
            src={logo}
            alt="Logo PT. IDEAA BUDI PERKASA"
            className="h-8 w-auto object-contain"
          />
          <span className="font-bold text-lg text-gray-900 hidden sm:inline">
            PT. IDEAA BUDI PERKASA
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/#beranda" className="hover:text-blue-500 transition">Beranda</Link>

          {/* Dropdown Product */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductDropdown(!productDropdown)}
              className="flex items-center gap-1 hover:text-blue-500 transition cursor-pointer font-medium"
            >
              <span>Product</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-250 ${productDropdown ? "rotate-180 text-blue-500" : ""}`}
              />
            </button>

            {/* Floating Dropdown */}
            <div
              className={`
                absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-96 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 transition-all duration-200 z-50
                ${productDropdown
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"}
              `}
            >
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
                Kategori Produk
              </div>
              <div className="grid gap-1">
                {categories.map((cat) => {
                  const IconComponent = IconMap[cat.iconName] || Package;
                  return (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setProductDropdown(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition text-left"
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${cat.color}`}>
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">{cat.title}</h4>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{cat.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="border-t border-gray-100 mt-3 pt-3">
                <Link
                  href="/produk"
                  onClick={() => setProductDropdown(false)}
                  className="flex items-center justify-center gap-2 p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition text-sm font-semibold text-center"
                >
                  <LayoutGrid size={16} />
                  Lihat Semua Produk
                </Link>
              </div>
            </div>
          </div>

          <Link href="/#download-brosur" className="hover:text-blue-500 transition">Katalog</Link>
          <Link href="/#tentang-kami" className="hover:text-blue-500 transition">Tentang Kami</Link>
          <Link href="/#artikel" className="hover:text-blue-500 transition">Artikel</Link>
          <Link href="/#kontak" className="hover:text-blue-500 transition">Kontak</Link>
        </div>

        {/* Tombol Desktop */}
        <Link
          href="/#kontak"
          className="hidden lg:block bg-blue-500 text-white hover:bg-blue-600 transition px-5 py-2.5 rounded-xl font-semibold text-sm"
        >
          Minta Penawaran
        </Link>

        {/* Hamburger */}
        <button
          className="lg:hidden z-50 text-gray-700 hover:text-gray-900 p-1"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`
          lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-200
          transition-all duration-300 ease-in-out overflow-hidden z-40
          ${open
            ? "opacity-100 translate-y-0 max-h-[85vh] pointer-events-auto"
            : "opacity-0 -translate-y-5 max-h-0 pointer-events-none"}
        `}
      >
        <div className="flex flex-col gap-4 p-6 text-gray-600 font-medium">
          <Link
            href="/#beranda"
            onClick={() => setOpen(false)}
            className="hover:text-blue-500 py-1"
          >
            Beranda
          </Link>

          {/* Mobile Collapsible Product */}
          <div className="py-1">
            <button
              onClick={() => setMobileProductOpen(!mobileProductOpen)}
              className="flex items-center justify-between w-full text-left hover:text-blue-500"
            >
              <span>Product</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-250 ${mobileProductOpen ? "rotate-180 text-blue-500" : ""}`}
              />
            </button>

            <div
              className={`
                pl-4 border-l-2 border-gray-100 flex flex-col gap-3.5 transition-all duration-350 overflow-hidden
                ${mobileProductOpen ? "mt-3 max-h-80 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  onClick={() => {
                    setOpen(false);
                    setMobileProductOpen(false);
                  }}
                  className="text-sm text-gray-500 hover:text-blue-500"
                >
                  {cat.title}
                </Link>
              ))}
              <Link
                href="/produk"
                onClick={() => {
                  setOpen(false);
                  setMobileProductOpen(false);
                }}
                className="text-sm font-semibold text-blue-500 hover:text-blue-600 flex items-center gap-1.5"
              >
                <LayoutGrid size={14} />
                Lihat Semua Produk
              </Link>
            </div>
          </div>

          <Link
            href="/#download-brosur"
            onClick={() => setOpen(false)}
            className="hover:text-blue-500 py-1"
          >
            Katalog
          </Link>
          <Link
            href="/#tentang-kami"
            onClick={() => setOpen(false)}
            className="hover:text-blue-500 py-1"
          >
            Tentang Kami
          </Link>
          <Link
            href="/#artikel"
            onClick={() => setOpen(false)}
            className="hover:text-blue-500 py-1"
          >
            Artikel
          </Link>
          <Link
            href="/#kontak"
            onClick={() => setOpen(false)}
            className="hover:text-blue-500 py-1"
          >
            Kontak
          </Link>

          <Link
            href="/#kontak"
            onClick={() => setOpen(false)}
            className="bg-blue-500 text-white px-4 py-3 rounded-xl text-center font-semibold hover:bg-blue-600 transition mt-2"
          >
            Minta Penawaran
          </Link>
        </div>
      </div>

    </nav>
  );
}