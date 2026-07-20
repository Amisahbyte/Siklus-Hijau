/* ============================================================
   data.js
   Structured content (bilingual) for:
   - CATEGORY_DATA  -> waste category detail panels
   - VIDEO_DATA     -> video gallery cards (link to YouTube search)
   - FAQ_DATA       -> accordion questions
   - AI_KB          -> rule-based chatbot knowledge base
   ============================================================ */

const CATEGORY_DATA = {
  id: {
    organic: {
      icon: "fa-apple-whole",
      examples: ["Kulit buah", "Sisa sayuran", "Ampas kopi", "Sisa nasi"],
      benefits: ["Pembersih alami (eco enzyme)", "Pupuk organik / kompos", "Penyegar udara alami", "Sabun cuci piring alami"],
      process: [
        "Kumpulkan sisa buah & sayur segar (belum busuk).",
        "Campurkan dengan gula merah/molase dan air dengan rasio 3:1:10.",
        "Simpan dalam wadah tertutup, sisakan ruang udara di atas.",
        "Fermentasi 3 bulan, buka tutup sesekali untuk buang gas.",
        "Saring, pisahkan cairan (eco enzyme) dari ampasnya (jadikan kompos)."
      ],
      packaging: "Botol kaca atau plastik food-grade dengan label tanggal produksi dan cara pakai.",
      marketing: "Jual ke komunitas peduli lingkungan, tawarkan sebagai pembersih rumah tangga alami, kemas dalam ukuran kecil untuk pasar starter.",
      videoQuery: "cara membuat eco enzyme dari sampah organik"
    },
    rice: {
      icon: "fa-wheat-awn",
      examples: ["Sekam padi", "Jerami", "Dedak"],
      benefits: ["Arang sekam (biochar)", "Media tanam organik", "Perbaikan struktur tanah"],
      process: [
        "Kumpulkan sekam padi kering.",
        "Bakar dengan metode kubah/drum berlubang agar jadi arang, bukan abu.",
        "Dinginkan dan saring arang sekam.",
        "Campur dengan kompos untuk media tanam siap pakai."
      ],
      packaging: "Karung kecil 1-5 kg untuk petani rumahan, atau karung besar untuk distributor pertanian.",
      marketing: "Jalin kemitraan dengan toko pertanian, komunitas berkebun urban, dan program sekolah lapang.",
      videoQuery: "cara membuat arang sekam padi biochar",
      secondary: {
        label: "Pengolahan Jerami",
        icon: "fa-seedling",
        benefits: ["Pakan ternak fermentasi (silase)", "Kompos & pupuk organik", "Mulsa penutup tanah", "Media tanam jamur merang", "Bahan baku bioetanol/biogas"],
        process: [
          "Kumpulkan jerami kering sisa panen, cacah menjadi potongan 3-5 cm.",
          "Untuk pakan ternak: campur cacahan jerami dengan molase & sedikit air, padatkan dalam wadah kedap udara (silo/plastik tebal).",
          "Fermentasi 2-3 minggu hingga tercium aroma asam segar (bukan busuk) sebagai tanda silase berhasil.",
          "Untuk kompos: campur jerami dengan kotoran ternak dan dekomposer, aduk berkala selama 3-4 minggu.",
          "Untuk media jamur: sterilkan jerami dengan perebusan/pengukusan sebelum dicampur bibit jamur."
        ],
        packaging: "Kemas silase dalam kantong plastik vakum atau drum tertutup rapat agar fermentasi terjaga.",
        marketing: "Jalin kerja sama dengan peternak sapi/kambing, kelompok tani, dan pembudidaya jamur merang lokal.",
        videoQuery: "cara mengolah jerami jadi pakan ternak silase"
      }
    },
    plastic: {
      icon: "fa-bottle-water",
      examples: ["Botol plastik", "Sachet", "Wadah makanan"],
      benefits: ["Bahan bakar (pirolisis)", "Paving block / bata plastik", "Kerajinan tangan"],
      process: [
        "Pilah plastik berdasarkan jenis (PET, HDPE, PP, dll) karena tiap jenis punya titik leleh berbeda.",
        "Bersihkan dan cacah plastik menjadi potongan kecil, keringkan sepenuhnya.",
        "Untuk paving block: campur cacahan dengan pasir & panaskan sesuai prosedur keselamatan, cetak, lalu dinginkan.",
        "Untuk bahan bakar (pirolisis): panaskan cacahan plastik dalam reaktor tertutup tanpa oksigen pada suhu bertahap (kira-kira 300-500°C).",
        "Uap hasil pemanasan dialirkan melalui kondensor untuk didinginkan hingga mengembun menjadi cairan minyak.",
        "Pisahkan hasil cairan berdasarkan titik didihnya (fraksinasi) menjadi beberapa jenis bahan bakar."
      ],
      extra: {
        label: "Jenis Bahan Bakar dari Pirolisis Plastik",
        icon: "fa-gas-pump",
        items: [
          "Setara Bensin/Pertamax — fraksi ringan dengan titik didih rendah, cocok untuk mesin bensin setelah melalui penyaringan & pemurnian lanjutan.",
          "Setara Solar/Diesel — fraksi menengah, paling banyak dihasilkan dari plastik PP dan PE, dapat dipakai untuk genset atau mesin diesel non-otomotif.",
          "Minyak Tanah/Kerosene — fraksi untuk kebutuhan pemanas atau kompor industri kecil.",
          "Residu/Ter — sisa berat di dasar reaktor, biasanya dipakai sebagai bahan bakar padat industri."
        ],
        note: "Penting: bahan bakar hasil pirolisis rumahan umumnya belum memenuhi standar mutu SNI/Pertamina untuk kendaraan bermotor tanpa proses pemurnian (refining) lebih lanjut, dan proses pemanasan plastik berisiko menghasilkan asap/gas berbahaya. Wajib dilakukan di ruang terbuka/berventilasi oleh pihak yang memahami prosedur keselamatan, idealnya dengan alat pirolisis berizin."
      },
      packaging: "Kemas produk jadi (paving/bata) per palet, kerajinan dikemas individual dengan kardus daur ulang, sedangkan bahan bakar hasil pirolisis disimpan dalam jerigen tertutup rapat berlabel jenis & tanggal produksi.",
      marketing: "Tawarkan ke proyek konstruksi skala kecil, program CSR perusahaan, pasar kerajinan ramah lingkungan, serta pelaku usaha yang butuh bahan bakar alternatif untuk genset/mesin non-kendaraan.",
      videoQuery: "cara mengolah sampah plastik jadi paving block"
    },
    paper: {
      icon: "fa-newspaper",
      examples: ["Kertas koran", "Kardus", "Kertas HVS bekas"],
      benefits: ["Kertas daur ulang", "Produk dekoratif", "Bahan kemasan ramah lingkungan"],
      process: [
        "Rendam kertas bekas hingga lunak.",
        "Blender menjadi bubur kertas (pulp).",
        "Cetak pulp di atas screen dan ratakan.",
        "Jemur hingga kering, lalu haluskan permukaannya."
      ],
      packaging: "Ikat per lembar dengan pita kertas, atau kemas sebagai set kartu ucapan/notebook.",
      marketing: "Jual sebagai kertas seni/undangan ramah lingkungan, tawarkan ke pelaku UMKM percetakan kecil.",
      videoQuery: "cara membuat kertas daur ulang dari kertas bekas"
    },
    glass: {
      icon: "fa-wine-bottle",
      examples: ["Botol kaca", "Toples pecah", "Pecahan gelas"],
      benefits: ["Produk dekoratif", "Bahan campuran material konstruksi", "Vas & wadah ulang pakai"],
      process: [
        "Pilah kaca berdasarkan warna.",
        "Bersihkan dari label dan sisa cairan.",
        "Untuk dekorasi: potong/hias botol dengan teknik aman (gunakan alat pelindung).",
        "Untuk material bangunan: hancurkan jadi butiran kaca (glass aggregate)."
      ],
      packaging: "Bungkus dengan bubble wrap untuk produk dekoratif agar aman saat pengiriman.",
      marketing: "Jual sebagai dekorasi rumah bergaya eco-chic, tawarkan ke kafe dan studio kerajinan.",
      videoQuery: "cara daur ulang botol kaca jadi kerajinan"
    },
    metal: {
      icon: "fa-jar",
      examples: ["Kaleng bekas", "Besi tua", "Tutup botol"],
      benefits: ["Kerajinan tangan", "Bahan daur ulang industri", "Alat rumah tangga kreatif"],
      process: [
        "Pilah logam berdasarkan jenis (aluminium, besi, dll).",
        "Bersihkan dari karat dan sisa isi.",
        "Untuk kerajinan: potong dan bentuk sesuai desain dengan alat yang aman.",
        "Untuk daur ulang industri: kumpulkan dalam jumlah besar untuk dijual ke pengepul logam."
      ],
      packaging: "Kemas kerajinan dengan kotak kokoh, logam curah dikemas dalam karung/jaring.",
      marketing: "Jalin kerja sama dengan pengepul logam resmi dan pasar kerajinan daur ulang lokal.",
      videoQuery: "cara membuat kerajinan dari kaleng bekas"
    }
  },
  en: {
    organic: {
      icon: "fa-apple-whole",
      examples: ["Fruit peels", "Vegetable scraps", "Coffee grounds", "Leftover rice"],
      benefits: ["Natural cleaner (eco enzyme)", "Organic fertilizer / compost", "Natural air freshener", "Natural dish soap"],
      process: [
        "Collect fresh fruit & vegetable scraps (not yet rotten).",
        "Mix with brown sugar/molasses and water at a 3:1:10 ratio.",
        "Store in a sealed container, leaving air space at the top.",
        "Ferment for 3 months, occasionally releasing built-up gas.",
        "Strain, separating the liquid (eco enzyme) from the pulp (use as compost)."
      ],
      packaging: "Glass or food-grade plastic bottles labeled with production date and usage instructions.",
      marketing: "Sell to eco-conscious communities, market it as a natural household cleaner, offer small starter sizes.",
      videoQuery: "how to make eco enzyme from organic waste"
    },
    rice: {
      icon: "fa-wheat-awn",
      examples: ["Rice husks", "Straw", "Rice bran"],
      benefits: ["Husk charcoal (biochar)", "Organic growing media", "Soil structure improvement"],
      process: [
        "Collect dry rice husks.",
        "Burn using a dome/perforated-drum method to produce charcoal, not ash.",
        "Cool and sieve the husk charcoal.",
        "Mix with compost for ready-to-use growing media."
      ],
      packaging: "1-5 kg small sacks for home gardeners, or bulk sacks for agricultural distributors.",
      marketing: "Partner with agricultural stores, urban gardening communities, and school farming programs.",
      videoQuery: "how to make rice husk biochar charcoal",
      secondary: {
        label: "Straw Processing",
        icon: "fa-seedling",
        benefits: ["Fermented livestock feed (silage)", "Compost & organic fertilizer", "Soil mulch", "Straw mushroom growing media", "Bioethanol/biogas feedstock"],
        process: [
          "Collect dry post-harvest straw and chop it into 3-5 cm pieces.",
          "For livestock feed: mix chopped straw with molasses & a little water, pack tightly into an airtight container (silo/thick plastic).",
          "Ferment for 2-3 weeks until it smells pleasantly sour (not rotten) — a sign the silage succeeded.",
          "For compost: mix straw with manure and a decomposer, turning it regularly for 3-4 weeks.",
          "For mushroom media: sterilize the straw by boiling/steaming before mixing in mushroom spawn."
        ],
        packaging: "Pack silage in vacuum-sealed plastic bags or tightly closed drums to preserve fermentation.",
        marketing: "Partner with cattle/goat farmers, farming groups, and local straw mushroom growers.",
        videoQuery: "how to turn straw into fermented livestock feed silage"
      }
    },
    plastic: {
      icon: "fa-bottle-water",
      examples: ["Plastic bottles", "Sachets", "Food containers"],
      benefits: ["Fuel (via pyrolysis)", "Paving blocks / plastic bricks", "Handicrafts"],
      process: [
        "Sort plastics by type (PET, HDPE, PP, etc) since each has a different melting point.",
        "Clean and shred the plastic into small pieces, then dry it fully.",
        "For paving blocks: mix shredded plastic with sand and heat following safety procedures, mold, then cool.",
        "For fuel (pyrolysis): heat shredded plastic in a sealed, oxygen-free reactor at a gradual temperature (roughly 300-500°C).",
        "Route the resulting vapor through a condenser to cool it back into liquid oil.",
        "Separate the liquid by boiling point (fractionation) into different fuel types."
      ],
      extra: {
        label: "Fuel Types from Plastic Pyrolysis",
        icon: "fa-gas-pump",
        items: [
          "Gasoline/Pertamax-equivalent — the lightest, lowest-boiling fraction, usable in gasoline engines only after further filtering and refining.",
          "Diesel/Solar-equivalent — a mid-range fraction, produced mostly from PP and PE plastics, usable in generators or non-automotive diesel engines.",
          "Kerosene-equivalent — a fraction suited for heating or small industrial stoves.",
          "Residue/Tar — the heavy leftover at the bottom of the reactor, typically used as solid industrial fuel."
        ],
        note: "Important: fuel from small-scale/home pyrolysis generally does not meet national fuel-quality standards for road vehicles without further refining, and heating plastic risks producing hazardous fumes/gases. It must be done outdoors or in a well-ventilated space by people who understand the safety procedures, ideally with licensed pyrolysis equipment."
      },
      packaging: "Pack finished blocks per pallet, handicrafts individually in recycled cardboard, and pyrolysis fuel in tightly sealed jerry cans labeled with fuel type and production date.",
      marketing: "Offer to small construction projects, corporate CSR programs, eco-craft markets, and businesses needing alternative fuel for generators/non-vehicle engines.",
      videoQuery: "how to turn plastic waste into paving blocks"
    },
    paper: {
      icon: "fa-newspaper",
      examples: ["Newspaper", "Cardboard", "Used printer paper"],
      benefits: ["Recycled paper", "Decorative products", "Eco-friendly packaging material"],
      process: [
        "Soak used paper until soft.",
        "Blend into paper pulp.",
        "Mold the pulp on a screen and flatten it evenly.",
        "Sun-dry until fully dry, then smooth the surface."
      ],
      packaging: "Bundle sheets with paper ribbon, or package as greeting card/notebook sets.",
      marketing: "Sell as eco-friendly art/invitation paper, offer to small print-based small businesses.",
      videoQuery: "how to make recycled paper from waste paper"
    },
    glass: {
      icon: "fa-wine-bottle",
      examples: ["Glass bottles", "Broken jars", "Glass shards"],
      benefits: ["Decorative products", "Construction material additive", "Reusable vases & containers"],
      process: [
        "Sort glass by color.",
        "Clean off labels and residue.",
        "For decor: cut/etch bottles using safe techniques (wear protective gear).",
        "For construction material: crush into glass aggregate."
      ],
      packaging: "Wrap decorative products in bubble wrap for safe shipping.",
      marketing: "Sell as eco-chic home decor, offer to cafes and craft studios.",
      videoQuery: "how to recycle glass bottles into crafts"
    },
    metal: {
      icon: "fa-jar",
      examples: ["Used cans", "Scrap iron", "Bottle caps"],
      benefits: ["Handicrafts", "Industrial recycling material", "Creative household tools"],
      process: [
        "Sort metal by type (aluminum, iron, etc).",
        "Clean off rust and leftover content.",
        "For crafts: cut and shape according to design using safe tools.",
        "For industrial recycling: collect in bulk to sell to licensed scrap collectors."
      ],
      packaging: "Pack crafts in sturdy boxes; bulk metal packed in sacks/nets.",
      marketing: "Partner with licensed scrap collectors and local upcycled craft markets.",
      videoQuery: "how to make crafts from used cans"
    }
  }
};

const VIDEO_DATA = [
  { cat: "organic", img: "./assets/images/membuat_Eco_enzyme.png", id: { t: "Membuat Eco Enzyme dari Sisa Dapur" }, en: { t: "Making Eco Enzyme from Kitchen Scraps" }, q: "cara membuat eco enzyme dari sampah dapur" },
  { cat: "organic", img: "./assets/images/kompos_rumahan.png", id: { t: "Kompos Rumahan dalam Ember" }, en: { t: "Home Composting in a Bucket" }, q: "cara membuat kompos rumahan sederhana" },
  { cat: "rice", img: "./assets/images/arang_sekam.png", id: { t: "Arang Sekam untuk Media Tanam" }, en: { t: "Husk Charcoal for Growing Media" }, q: "cara membuat arang sekam untuk media tanam" },
  { cat: "rice", img: "./assets/images/olahan_jerami_pakan ternak.png", id: { t: "Olahan Jerami Jadi Pakan Ternak" }, en: { t: "Turning Straw into Livestock Feed" }, q: "cara mengolah jerami jadi pakan ternak" },
  { cat: "plastic", img: "./assets/images/botol-plastik_paving-block.png", id: { t: "Botol Plastik Jadi Paving Block" }, en: { t: "Plastic Bottles into Paving Blocks" }, q: "cara membuat paving block dari sampah plastik" },
  { cat: "plastic", img: "./assets/images/plastik_Bahan_bakar.png", id: { t: "Pirolisis Plastik Jadi Bahan Bakar" }, en: { t: "Plastic Pyrolysis into Fuel" }, q: "pirolisis plastik menjadi bahan bakar tutorial" },
  { cat: "plastic", img: "./assets/images/plastik_jadi_solar_pertamax.png", id: { t: "Plastik Jadi Solar & Pertamax" }, en: { t: "Plastic into Diesel & Gasoline" }, q: "cara mengubah sampah plastik jadi solar dan pertamax" },
  { cat: "paper", img: "./assets/images/kertas-daur_ulang.png", id: { t: "Membuat Kertas Daur Ulang di Rumah" }, en: { t: "Making Recycled Paper at Home" }, q: "cara membuat kertas daur ulang di rumah" },
  { cat: "paper", img: "./assets/images/kardus_funiture.png", id: { t: "Kardus Bekas Jadi Furnitur Mini" }, en: { t: "Cardboard into Mini Furniture" }, q: "cara membuat furnitur dari kardus bekas" },
  { cat: "glass", img: "./assets/images/botol_lampu_hias.png", id: { t: "Botol Kaca Jadi Lampu Hias" }, en: { t: "Glass Bottles into Decorative Lamps" }, q: "cara membuat lampu hias dari botol kaca bekas" },
  { cat: "glass", img: "./assets/images/memotong_botol.png", id: { t: "Memotong Botol Kaca dengan Aman" }, en: { t: "Cutting Glass Bottles Safely" }, q: "cara memotong botol kaca dengan aman tutorial" },
  { cat: "metal", img: "./assets/images/kaleng_pot_tanaman.png", id: { t: "Kaleng Bekas Jadi Pot Tanaman" }, en: { t: "Used Cans into Planter Pots" }, q: "cara membuat pot tanaman dari kaleng bekas" },
  { cat: "metal", img: "./assets/images/tutup_botol.png", id: { t: "Kerajinan Tutup Botol Logam" }, en: { t: "Metal Bottle Cap Crafts" }, q: "kerajinan dari tutup botol logam bekas" }
];

const FAQ_DATA = {
  id: [
    { q: "Apa itu eco enzyme?", a: "Eco enzyme adalah cairan hasil fermentasi sisa buah/sayur, gula, dan air selama sekitar 3 bulan. Cairan ini bisa dipakai sebagai pembersih alami, pupuk cair, hingga penjernih udara." },
    { q: "Bagaimana cara membuat kompos di rumah?", a: "Campurkan sampah organik dengan sedikit tanah/kompos jadi sebagai starter, jaga kelembapan, dan aduk berkala selama beberapa minggu hingga teksturnya menyerupai tanah." },
    { q: "Apakah plastik bisa diubah jadi bahan bakar?", a: "Bisa, melalui proses pirolisis (pemanasan tanpa oksigen) yang mengubah plastik menjadi minyak/bahan bakar cair. Proses ini butuh peralatan khusus dan penanganan yang hati-hati." },
    { q: "Bagaimana cara memulai usaha dari sampah?", a: "Mulai dari skala kecil dengan satu produk (misalnya eco enzyme atau kerajinan kaleng), uji pasar lewat media sosial, lalu perbesar produksi setelah permintaan terlihat stabil." },
    { q: "Apakah semua jenis plastik bisa didaur ulang?", a: "Tidak semua. Jenis seperti PET dan HDPE relatif mudah didaur ulang, sementara plastik multilayer (sachet) jauh lebih sulit dan butuh teknologi khusus." }
  ],
  en: [
    { q: "What is eco enzyme?", a: "Eco enzyme is a liquid made by fermenting fruit/vegetable scraps, sugar, and water for about 3 months. It can be used as a natural cleaner, liquid fertilizer, or air freshener." },
    { q: "How do I compost at home?", a: "Mix organic waste with a bit of soil or finished compost as a starter, keep it moist, and turn it regularly for a few weeks until it resembles soil." },
    { q: "Can plastic really be turned into fuel?", a: "Yes, through pyrolysis (heating without oxygen), which converts plastic into oil/liquid fuel. This requires special equipment and careful handling." },
    { q: "How do I start a waste-based business?", a: "Start small with one product (e.g. eco enzyme or can crafts), test the market through social media, then scale up once demand looks steady." },
    { q: "Can all types of plastic be recycled?", a: "Not all. Types like PET and HDPE are relatively easy to recycle, while multilayer plastics (sachets) are much harder and need special technology." }
  ]
};

/* Rule-based AI assistant knowledge base.
   Each entry: keywords (lowercase, matched with includes()) + answer per language. */
const AI_KB = [
  {
    keywords: ["eco enzyme", "enzim"],
    id: "Eco enzyme dibuat dari sisa buah/sayur + gula merah + air (rasio 3:1:10), difermentasi 3 bulan dalam wadah tertutup. Hasilnya bisa jadi pembersih alami, pupuk cair, atau penjernih udara.",
    en: "Eco enzyme is made from fruit/veg scraps + brown sugar + water (3:1:10 ratio), fermented for 3 months in a sealed container. It becomes a natural cleaner, liquid fertilizer, or air freshener."
  },
  {
    keywords: ["kompos", "compost"],
    id: "Untuk membuat kompos: campur sampah organik dengan sedikit tanah/kompos jadi, jaga kelembapan seperti spons basah, aduk tiap beberapa hari, dan tunggu 3-6 minggu hingga jadi tanah gembur.",
    en: "To compost: mix organic waste with a little soil or finished compost, keep it as moist as a damp sponge, turn every few days, and wait 3-6 weeks until it becomes crumbly soil."
  },
  {
    keywords: ["plastik", "plastic"],
    id: "Plastik bisa diolah jadi paving block, bata plastik, kerajinan, atau bahan bakar lewat pirolisis. Pilah dulu berdasarkan jenisnya (PET, HDPE, dll) sebelum diproses.",
    en: "Plastic can be turned into paving blocks, plastic bricks, crafts, or fuel via pyrolysis. Sort it by type (PET, HDPE, etc) first before processing."
  },
  {
    keywords: ["solar", "pertamax", "bensin", "diesel", "bahan bakar plastik", "fuel from plastic", "kerosene", "minyak tanah"],
    id: "Lewat pirolisis (pemanasan plastik tanpa oksigen), uapnya bisa dipisahkan jadi beberapa fraksi: setara bensin/pertamax (fraksi ringan), setara solar/diesel (fraksi menengah, paling banyak dari plastik PP/PE), dan minyak tanah. Tapi hasil pirolisis rumahan biasanya belum sesuai standar SNI/Pertamina untuk kendaraan tanpa pemurnian lanjutan, jadi lebih cocok untuk genset/mesin non-otomotif dan wajib dikerjakan dengan prosedur keselamatan yang benar.",
    en: "Through pyrolysis (heating plastic without oxygen), the resulting vapor can be separated into fractions: gasoline/Pertamax-equivalent (light fraction), diesel/Solar-equivalent (mid fraction, mostly from PP/PE plastics), and kerosene. Home-scale pyrolysis fuel usually doesn't meet vehicle fuel standards without further refining, so it's best suited for generators/non-automotive engines, and must be done with proper safety procedures."
  },
  {
    keywords: ["jerami", "straw", "silase", "silage", "pakan ternak", "livestock feed"],
    id: "Jerami sisa panen bisa difermentasi jadi pakan ternak (silase): cacah jerami, campur molase & sedikit air, padatkan dalam wadah kedap udara, lalu fermentasi 2-3 minggu. Jerami juga bisa jadi kompos atau media tanam jamur merang.",
    en: "Leftover harvest straw can be fermented into livestock feed (silage): chop the straw, mix with molasses and a little water, pack tightly in an airtight container, then ferment for 2-3 weeks. Straw can also become compost or straw mushroom growing media."
  },
  {
    keywords: ["usaha", "bisnis", "business", "jualan", "cuan", "profit"],
    id: "Mulai usaha dari sampah dengan skala kecil: pilih satu produk (eco enzyme, kompos, atau kerajinan), uji ke tetangga/media sosial, lalu perbesar bertahap sesuai permintaan.",
    en: "Start a waste-based business small: pick one product (eco enzyme, compost, or crafts), test it on neighbors/social media, then scale gradually as demand grows."
  },
  {
    keywords: ["sekam", "padi", "rice husk", "husk"],
    id: "Sekam padi bisa dibakar jadi arang sekam (biochar) untuk media tanam, atau dicampur kompos untuk memperbaiki struktur tanah.",
    en: "Rice husks can be burned into husk charcoal (biochar) for growing media, or mixed into compost to improve soil structure."
  },
  {
    keywords: ["kertas", "paper"],
    id: "Kertas bekas direndam, diblender jadi bubur kertas (pulp), dicetak tipis di atas screen, lalu dijemur hingga kering untuk jadi kertas daur ulang.",
    en: "Used paper is soaked, blended into pulp, molded thinly on a screen, then sun-dried to become recycled paper."
  },
  {
    keywords: ["kaca", "glass", "botol kaca"],
    id: "Botol kaca bekas bisa dipotong dan dihias jadi lampu, vas, atau gelas dekoratif. Gunakan alat pelindung saat memotong kaca.",
    en: "Used glass bottles can be cut and decorated into lamps, vases, or decorative glasses. Wear protective gear when cutting glass."
  },
  {
    keywords: ["logam", "metal", "kaleng", "can"],
    id: "Kaleng dan logam bekas bisa jadi pot tanaman, kerajinan, atau dijual curah ke pengepul logam untuk didaur ulang industri.",
    en: "Used cans and metal can become planter pots, crafts, or be sold in bulk to scrap collectors for industrial recycling."
  },
  {
    keywords: ["lingkungan", "dampak", "environment", "impact"],
    id: "Sampah yang tidak dikelola bisa mencemari tanah, air, dan udara, serta melepaskan gas rumah kaca yang memperparah perubahan iklim.",
    en: "Unmanaged waste can pollute soil, water, and air, and release greenhouse gases that worsen climate change."
  },
  {
    keywords: ["halo", "hai", "hello", "hi"],
    id: "Hai juga! 👋 Ada yang mau ditanyakan soal sampah, daur ulang, atau peluang usahanya?",
    en: "Hey there! 👋 Anything you'd like to ask about waste, recycling, or business ideas?"
  }
];
