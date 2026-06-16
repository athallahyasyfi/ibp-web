export interface Product {
  id: string;
  name: string;
  brand: string;
  type: "AKD" | "AKL" | "AKD / AKL";
  desc: string;
  specs?: string[];
}

export interface Category {
  slug: string;
  title: string;
  desc: string;
  iconName: "Package" | "Microscope" | "FlaskConical" | "HeartHandshake";
  products: Product[];
}

export const categoriesData: Record<string, Category> = {
  "consumable": {
    slug: "consumable",
    title: "Consumable",
    desc: "Bahan Medis Habis Pakai (BMHP) laboratorium dan alat kesehatan.",
    iconName: "Package",
    products: [
      {
        id: "con-1",
        name: "Spuit / Syringe (1ml, 3ml, 5ml, 10ml)",
        brand: "GEA / Terumo",
        type: "AKD / AKL",
        desc: "Alat suntik sekali pakai berkualitas tinggi dengan jarum presisi untuk kenyamanan pasien.",
        specs: ["Bahan polypropylene medical grade", "Skala volume presisi dan tidak mudah luntur", "Sekali pakai (Single use only)", "Sterilisasi Ethylene Oxide Gas"]
      },
      {
        id: "con-2",
        name: "Infusion Set (Dewasa / Anak)",
        brand: "GEA",
        type: "AKD",
        desc: "Set infus steril sekali pakai dilengkapi pengatur aliran presisi untuk terapi intravena.",
        specs: ["Jarum tusuk botol tajam dan kuat", "Roller clamp presisi untuk kontrol tetesan", "Selang PVC lentur dan transparan", "Dilengkapi filter udara otomatis"]
      },
      {
        id: "con-3",
        name: "Blood Collection Tube (Vacuum)",
        brand: "Vacutainer",
        type: "AKL",
        desc: "Tabung vakum pengambilan sampel darah dengan berbagai zat aditif untuk analisis laboratorium klinik.",
        specs: ["Tersedia tipe EDTA (Ungu), Clot Activator (Merah), Heparin (Hijau)", "Bahan kaca atau plastik PET berkualitas tinggi", "Volume sedotan vakum akurat", "Tutup kedap udara standar medis"]
      },
      {
        id: "con-4",
        name: "Surgical Mask 3-Ply & Earloop",
        brand: "Sensi / Indomed",
        type: "AKD",
        desc: "Masker bedah tiga lapis dengan filter efisiensi tinggi untuk perlindungan bakteri dan partikel udara.",
        specs: ["Bacterial Filtration Efficiency (BFE) > 98%", "Hypoallergenic dan nyaman digunakan lama", "Kawat hidung fleksibel bebas lateks", "Tali earloop elastis dan kuat"]
      },
      {
        id: "con-5",
        name: "Alcohol Swabs 70% Isopropyl",
        brand: "GEA",
        type: "AKD",
        desc: "Kapas alkohol steril sekali pakai untuk antiseptik kulit sebelum injeksi atau tindakan medis.",
        specs: ["Mengandung 70% Isopropyl Alcohol", "Bahan non-woven lembut berkualitas tinggi", "Kemasan aluminium foil kedap udara per unit", "Cepat kering dan efektif membasmi kuman"]
      }
    ]
  },
  "ivd-instrument": {
    slug: "ivd-instrument",
    title: "IVD Instrument",
    desc: "Rangkaian instrumen laboratorium In Vitro Diagnostic (IVD) dengan akurasi tinggi.",
    iconName: "Microscope",
    products: [
      {
        id: "ivd-inst-1",
        name: "Hematology Analyzer (3-Part / 5-Part)",
        brand: "Mindray",
        type: "AKL",
        desc: "Alat analisis sel darah otomatis berkecepatan tinggi dengan akurasi seluler maksimal.",
        specs: ["Throughput hingga 60 sampel/jam", "Metode Impedansi untuk penghitungan sel", "Layar sentuh LCD berwarna ukuran besar", "Penyimpanan data hingga 50.000 hasil tes beserta histrogram"]
      },
      {
        id: "ivd-inst-2",
        name: "Clinical Chemistry Analyzer",
        brand: "Mindray / BioSystems",
        type: "AKL",
        desc: "Penganalisis kimia klinis otomatis untuk uji fungsi hati, ginjal, gula darah, dan kolesterol.",
        specs: ["Sistem reagen terbuka atau tertutup", "Kecepatan analisa konstan hingga 200 tes/jam", "Konsumsi air rendah dan efisien", "Dilengkapi pembersih probe otomatis"]
      },
      {
        id: "ivd-inst-3",
        name: "Urine Analyzer",
        brand: "URIT",
        type: "AKL",
        desc: "Alat pembaca strip uji urine otomatis untuk hasil urinalisis cepat, objektif, dan presisi.",
        specs: ["Kecepatan uji hingga 120 strip/jam", "Membaca 11-14 parameter urine secara simultan", "Kompensasi otomatis terhadap pengaruh pH dan warna urine", "Printer termal internal terintegrasi"]
      },
      {
        id: "ivd-inst-4",
        name: "Coagulation Analyzer",
        brand: "Mindray / Rayto",
        type: "AKL",
        desc: "Alat pengukur waktu pembekuan darah otomatis untuk monitoring hemostasis pasien.",
        specs: ["Metode deteksi optik foto-optik", "Mengukur PT, APTT, FIB, TT, dan Faktor Koagulasi", "Inkubator internal dengan suhu 37°C konstan", "Kalibrasi otomatis dan sistem QC bawaan"]
      }
    ]
  },
  "ivd-reagent": {
    slug: "ivd-reagent",
    title: "IVD Reagent",
    desc: "Reagen laboratorium klinik dan patologi anatomi berkualitas tinggi.",
    iconName: "FlaskConical",
    products: [
      {
        id: "ivd-re-1",
        name: "Hematology Reagent Pack (Diluent, Lyse, Cleanse)",
        brand: "Mindray / Erba",
        type: "AKL",
        desc: "Reagen berkualitas tinggi yang dioptimalkan untuk performa maksimal alat hematologi otomatis.",
        specs: ["Diformulasikan khusus untuk menjaga stabilitas sel darah", "Latar belakang sel rendah untuk hasil akurat", "Kemasan aman antibocor", "Masa simpan yang panjang dan stabil"]
      },
      {
        id: "ivd-re-2",
        name: "Clinical Chemistry Reagents Pack",
        brand: "BioSystems / Spinreact",
        type: "AKL",
        desc: "Reagen cair siap pakai untuk pemeriksaan fungsi organ tubuh dengan stabilitas tinggi.",
        specs: ["Metode standar internasional (IFCC/DGKC)", "Linearitas pengukuran yang luas", "Kompatibel dengan berbagai tipe analyzer otomatis", "Dilengkapi cairan kontrol dan kalibrator khusus"]
      },
      {
        id: "ivd-re-3",
        name: "Rapid Test Cassettes (HBsAg, HIV, Syphilis, Dengue)",
        brand: "Focus / Standard Diagnostics",
        type: "AKL",
        desc: "Strip cepat immunokromatografi untuk skrining infeksi virus dan bakteri secara instan.",
        specs: ["Sensitivitas > 99% dan Spesifisitas > 98%", "Hasil tes cepat terlihat dalam 10-15 menit", "Penggunaan mudah dengan sampel darah, serum, atau plasma", "Tersertifikasi izin edar resmi Kemenkes"]
      },
      {
        id: "ivd-re-4",
        name: "Staining Solutions (Giemsa, Wright, Gram)",
        brand: "Merck",
        type: "AKL",
        desc: "Larutan pewarna berkualitas tinggi untuk pemeriksaan mikroskopis sel dan identifikasi bakteri.",
        specs: ["Kontras warna yang sangat jelas pada inti sel", "Formulasi stabil tidak mudah mengendap", "Siap pakai tanpa perlu pengenceran rumit", "Tersedia kemasan botol kaca gelap pelindung cahaya"]
      }
    ]
  },
  "rehabilitation-assistive-devices": {
    slug: "rehabilitation-assistive-devices",
    title: "Rehabilitation & Assistive Devices",
    desc: "Alat bantu pemulihan dan rehabilitasi medis untuk menunjang mobilitas pasien.",
    iconName: "HeartHandshake",
    products: [
      {
        id: "rehab-1",
        name: "Standard Chrome Wheelchair",
        brand: "GEA",
        type: "AKD",
        desc: "Kursi roda standar berlapis krom yang kokoh, nyaman, dan mudah dilipat untuk mobilitas sehari-hari.",
        specs: ["Rangka besi berlapis krom antikarat", "Lebar dudukan standar 46 cm", "Ban karet solid mati (tidak perlu dipompa)", "Kapasitas beban maksimal 100 kg"]
      },
      {
        id: "rehab-2",
        name: "Adjustable Aluminum Walker",
        brand: "GEA",
        type: "AKD",
        desc: "Alat bantu jalan jemuran berbahan aluminium ringan dengan tinggi yang bisa disesuaikan.",
        specs: ["Bahan aluminium ringan berkualitas tinggi", "Tinggi kaki dapat disesuaikan (75 cm - 93 cm)", "Desain lipat praktis dengan satu tombol", "Pegangan tangan dilapisi busa empuk"]
      },
      {
        id: "rehab-3",
        name: "Elbow & Underarm Crutches",
        brand: "GEA",
        type: "AKD",
        desc: "Kruk penopang tubuh berbahan aluminium dengan bantalan ketiak karet empuk untuk penderita cedera kaki.",
        specs: ["Tinggi kruk dan tinggi pegangan bisa diatur terpisah", "Bantalan ketiak dan tangan berbahan karet TPR nyaman", "Ujung kaki karet anti-slip", "Tersedia ukuran S, M, L"]
      },
      {
        id: "rehab-4",
        name: "Electric Hospital Bed (3-Fungsi)",
        brand: "GEA / Acare",
        type: "AKL",
        desc: "Tempat tidur pasien elektrik dengan 3 pengaturan posisi (punggung, kaki, tinggi kasur) demi kenyamanan maksimal.",
        specs: ["Sistem motor elektrik halus dan senyap (DEWERT / L&K)", "Pengaturan posisi via remote control pasien", "Rangka besi dilapisi powder coating antikarat", "Termasuk tiang infus stainless steel dan matras busa medis"]
      },
      {
        id: "rehab-5",
        name: "Decubitus Anti-Bedsore Mattress",
        brand: "GEA",
        type: "AKL",
        desc: "Kasur angin pencegah luka dekubitus dengan pompa kompresor otomatis udara bergantian.",
        specs: ["Kasur gelembung udara bahan PVC medis tebal", "Siklus pengisian udara bergantian setiap 6 menit", "Pompa kompresor senyap dengan pengatur tekanan gas", "Desain pas dengan ranjang rumah sakit standar"]
      }
    ]
  }
};
