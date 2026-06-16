"use client";

import { useState, useEffect } from "react";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Microscope, 
  ShieldCheck, 
  Wrench, 
  Package, 
  FlaskConical, 
  HeartHandshake, 
  X,
  BookOpen 
} from "lucide-react";
import { getArticles, urlFor } from "../lib/sanity";

const IconMap: Record<string, any> = {
  Microscope: Microscope,
  ShieldCheck: ShieldCheck,
  Wrench: Wrench,
  Package: Package,
  FlaskConical: FlaskConical,
  HeartHandshake: HeartHandshake,
};

export default function Artikel() {
  const [activeArticle, setActiveArticle] = useState<any | null>(null);
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch (err) {
        console.error("Failed to load articles", err);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

  if (loading) {
    return (
      <section id="artikel" className="py-20 px-6 bg-white scroll-mt-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[30vh] gap-3">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          <p className="text-gray-400 text-sm">Memuat artikel terkini...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="artikel" className="py-20 px-6 bg-white scroll-mt-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Artikel Terkini
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Ikuti edukasi medis terbaru, panduan pemeliharaan instrumen laboratorium, serta regulasi distribusi alat kesehatan di Indonesia.
          </p>
        </div>

        {/* Artikel Grid */}
        {articles.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((post) => {
              const IconComponent = IconMap[post.iconName] || Microscope;
              return (
                <article 
                  key={post.id}
                  onClick={() => setActiveArticle(post)}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col cursor-pointer group"
                >
                  {/* Visual Header (Sanity Image or Gradient + Icon) */}
                  {post.image ? (
                    <div className="h-48 relative overflow-hidden shrink-0">
                      <img 
                        src={urlFor(post.image).url()} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {post.category}
                      </div>
                    </div>
                  ) : (
                    <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center relative p-6 shrink-0`}>
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner group-hover:scale-105 transition-transform duration-300">
                        <IconComponent size={32} />
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Meta (Date & Time) */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3.5 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-snug group-hover:text-blue-600 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                      {post.desc}
                    </p>

                    {/* Read More link */}
                    <div
                      className="text-blue-500 hover:text-blue-600 font-semibold text-sm flex items-center gap-1.5 mt-auto group/link transition"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight size={15} className="group-hover/link:translate-x-1 transition duration-200" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-16 text-center max-w-lg mx-auto">
            <BookOpen className="mx-auto text-blue-500 mb-6 bg-blue-50 p-3.5 rounded-2xl" size={64} />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Belum Ada Artikel</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Kami akan segera mempublikasikan artikel edukasi medis terbaru, panduan pemeliharaan instrumen laboratorium, serta regulasi distribusi alat kesehatan di sini.
            </p>
          </div>
        )}

        {/* Modal Detail Artikel */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl transition-all duration-300 relative border border-gray-100 flex flex-col">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 p-2 rounded-full z-10 transition cursor-pointer shadow-md hover:scale-105"
              >
                <X size={20} />
              </button>

              {/* Visual Header (Sanity Image or Gradient + Icon) */}
              {activeArticle.image ? (
                <div className="h-56 relative overflow-hidden shrink-0">
                  <img 
                    src={urlFor(activeArticle.image).url()} 
                    alt={activeArticle.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {activeArticle.category}
                  </div>
                </div>
              ) : (
                <div className={`h-56 bg-gradient-to-br ${activeArticle.color} flex items-center justify-center p-6 relative shrink-0`}>
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    {(() => {
                      const ActiveIcon = IconMap[activeArticle.iconName] || Microscope;
                      return <ActiveIcon size={32} />;
                    })()}
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                    {activeArticle.category}
                  </div>
                </div>
              )}

              {/* Content Box */}
              <div className="p-8 overflow-y-auto">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {activeArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {activeArticle.readTime}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                  {activeArticle.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6 font-medium text-base">
                  {activeArticle.desc}
                </p>

                {/* Detailed Article Text */}
                <div className="text-gray-600 leading-relaxed space-y-4 text-sm border-t border-gray-100 pt-6 whitespace-pre-line">
                  {activeArticle.body}
                </div>

                {/* Modal CTA */}
                <div className="border-t border-gray-100 mt-6 pt-6 flex justify-end">
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20PT.%20IDEAA%20BUDI%20PERKASA,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20alat%20kesehatan%20setelah%20membaca%20artikel%20Anda."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center gap-2 transition"
                  >
                    <span>Hubungi Kami Mengenai Ini</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
