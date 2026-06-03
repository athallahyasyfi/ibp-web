import {
    CheckCircle,
    FlaskConical,
    Wrench,
    Globe,
    Users,
    ShieldCheck,
} from "lucide-react";

const layanan = [
    {
        icon: CheckCircle,
        title: "Produk Berkualitas",
        desc: "Seluruh produk kami berasal dari produsen terkemuka dengan standar kontrol kualitas tinggi untuk memastikan keakuratan hasil laboratorium dan keandalan alat medis.",
    },
    {
        icon: Wrench,
        title: "Dukungan Teknis Profesional",
        desc: "Didukung oleh tim teknis bersertifikasi yang siap melakukan instalasi, kalibrasi, pelatihan pengguna (user training), dan pemeliharaan berkala secara cepat.",
    },
    {
        icon: Globe,
        title: "Distribusi Nasional",
        desc: "Jaringan rantai pasok dan logistik yang efisien untuk melayani kebutuhan pengadaan rumah sakit di seluruh wilayah Indonesia dengan pengiriman yang aman.",
    },
    {
        icon: Users,
        title: "Tim Profesional",
        desc: "Konsultan produk dan layanan pelanggan kami siap membantu memberikan solusi pengadaan yang tepat sesuai kapasitas dan kebutuhan masing-masing rumah sakit.",
    },
    {
        icon: ShieldCheck,
        title: "Produk Berizin Resmi",
        desc: "Seluruh produk kami telah memiliki izin edar resmi dari Kementerian Kesehatan RI untuk menjamin keamanan dan kepatuhan regulasi dalam pengadaan.",
    },
];

export default function Layanan() {
    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        Layanan
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                </div>

                {/* Cards Grid — baris pertama 3 kolom, baris kedua 2 kolom tengah */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {layanan.slice(0, 3).map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-md transition duration-300"
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                                    <Icon className="text-blue-500" size={20} />
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Baris kedua: 2 card ditengah */}
                <div className="grid md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
                    {layanan.slice(3).map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-md transition duration-300"
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                                    <Icon className="text-blue-500" size={20} />
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}