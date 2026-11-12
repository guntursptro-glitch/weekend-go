const places = [
  {
    id: 1,
    name: "Kopi Kotak",
    city: "depok",
    area: "beji",
    tags: ["rooftop", "kopi", "nongkrong"],
    priceMin: 10000,
    priceMax: 57000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kopi+Kotak+Margonda+Depok",
    notes: "Jl. Margonda Raya No.488. Cocok teman"
  },
  {
    id: 2,
    name: "Waroeng SS (Spesial Sambal)",
    city: "depok",
    area: "beji",
    tags: ["sambal", "ayam penyet", "nasi", "murah"],
    priceMin: 10000,
    priceMax: 50000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Waroeng+SS+Margonda+Depok",
    notes: "Jl. Margonda No.280. Cocok teman"
  },
  {
    id: 3,
    name: "Roti Bakar Eddy",
    city: "depok",
    area: "beji",
    tags: ["roti bakar", "kopi", "legendaris"],
    priceMin: 10000,
    priceMax: 35000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Roti+Bakar+Eddy+Margonda+Depok",
    notes: "Jl. Margonda Raya No.369. Cocok teman"
  },
  {
    id: 4,
    name: "Tamelo Atap Cafe",
    city: "depok",
    area: "beji",
    tags: ["rooftop", "kopi", "sunset", "dessert"],
    priceMin: 10000,
    priceMax: 70000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tamelo+Atap+Cafe+Depok",
    notes: "Rooftop Apartemen Taman Melati Margonda 2. Cocok pasangan"
  },
  {
    id: 5,
    name: "Shabu Hachi",
    city: "depok",
    area: "pancoran-mas",
    tags: ["shabu", "all you can eat", "jepang"],
    priceMin: 158000,
    priceMax: 368000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shabu+Hachi+Margonda+Depok",
        notes: "Jl. Margonda Raya No.2. Cocok keluarga. Harga paket shabu-shabu per orang, belum termasuk pajak 10% dan servis 5%. Tambah yakiniku Rp55.000 per orang",
    address: "Jl. Margonda No.2, Depok, Pancoran Mas",
    openHours: "Sen-Kam 11.00-21.00, Jum 11.00-22.00, Sab-Min 10.00-22.00",
    facilities: [
      "Musholla",
      "Air mancur",
      "Parkir berbayar",
      "Menu halal"
    ],
    whatsapp: "6281263000057",
    instagram: "@shabuhachi",
    priceCheckedAt: "November 2026",
    cardPhoto: "assets/images/shabu-hachi.webp",
    photos: [
      "assets/images/shabu-hachi-2.webp",
      "assets/images/shabu-hachi-3.webp",
      "assets/images/shabu-hachi-4.webp"
    ],
    menuPhotos: [
  "assets/images/menu-shabu-hachi-lengkap.jpg"
],
  },
      {
    id: 7,
    name: "Saung Talaga",
    city: "depok",
    area: "pancoran-mas",
    tags: ["sunda", "lesehan", "pecak ikan", "gurame"],
    priceMin: 25000,
    priceMax: 125000,
    mapsUrl: "https://maps.app.goo.gl/BahbXRedi2c3J12H6",
    notes: "Jl. Raya Sawangan No.1. Cocok keluarga",
    address: "Jl. Raya Sawangan No.1, Rangkapan Jaya, Pancoran Mas",
    openHours: "Setiap hari, 10.00-20.30",
    facilities: [
      "Playground",
      "Live music",
      "Mancing (berbayar)",
      "Musholla",
      "Toilet",
      "Naik perahu (berbayar)"
    ],
    whatsapp: "6281380165357",
    instagram: "",
    tiktok: "",
    noSocial: true,
    priceCheckedAt: "November 2026",
    photos: [
      "assets/images/places/saung-talaga-1.jpg",
      "assets/images/places/saung-talaga-2.jpg",
      "assets/images/places/saung-talaga-3.jpg"
    ],
    menuPhotos: [
  "assets/images/places/saung-talaga-menu-1.webp"
],
  },
  {
    id: 8,
    name: "Soto Bu Tjondro",
    city: "depok",
    area: "pancoran-mas",
    tags: ["soto", "nasi", "sarapan"],
    priceMin: 18000,
    priceMax: 90000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Soto+Bu+Tjondro+Depok",
    notes: "Jl. Siliwangi No.1. Cocok keluarga",
    address: "Jl. Siliwangi No.1, Depok, Pancoran Mas",
    openHours: "Setiap hari, 08.00-21.00",
    facilities: [
      "Area makan outdoor",
      "Terima reservasi",
      "Antar dan bawa pulang",
      "Parkir berbayar"
    ],
        phone: "(021) 7721 6161 (reservasi hanya lewat telepon)",
    instagram: "@soto.butjondro",
    priceCheckedAt: "November 2026",
    cardPhoto: "assets/images/soto-1.jpg",
    photos: [
      "assets/images/soto-2.jpg",
      "assets/images/soto-3.jpg",
      "assets/images/soto-4.jpg"],
    
      menuPhotos: [
  "assets/images/menu-soto.webp"
],

  },
  {
    id: 9,
    name: "Sop Durian Margando",
    city: "depok",
    area: "pancoran-mas",
    tags: ["sop durian", "durian", "dessert"],
    priceMin: 10000,
    priceMax: 32000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sop+Durian+Margando+Depok",
    notes: "Jl. Arif Rahman Hakim No.1. Cocok teman, pasangan",
    address: "Jl. Arif Rahman Hakim No.1, Depok, Pancoran Mas",
    openHours: "Setiap hari, 10.00-24.00",
    facilities: [
      "Rooftop",
      "Live music",
      "Kursi bayi",
      "Menu anak"
    ],
    whatsapp: "",
    instagram: "",
    tiktok: "",
    priceCheckedAt: "November 2026",
    photos: []
  },
  {
    id: 11,
    name: "Rumah Makan Lesehan Pondok Laras",
    city: "depok",
    area: "sukmajaya",
    tags: ["lesehan", "ayam penyet", "ikan bakar", "sunda"],
    priceMin: 19000,
    priceMax: 30000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pondok+Laras+Keadilan+Raya+Depok",
    notes: "Jl. Keadilan Raya No.1. Cek cabang. Cocok keluarga"
  },
  {
    id: 12,
    name: "Pondok Laras (Akses UI)",
    city: "depok",
    area: "cimanggis",
    tags: ["lesehan", "gurame", "sunda"],
    priceMin: 10000,
    priceMax: 100000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pondok+Laras+Akses+UI+Depok",
    notes: "Jl. Akses UI No.2. Saung di atas kolam, ada area bermain anak"
  },
  {
    id: 13,
    name: "Roti Bakar Edi Klasik",
    city: "depok",
    area: "sawangan",
    tags: ["roti bakar", "kopi", "nongkrong"],
    priceMin: 10000,
    priceMax: 150000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Roti+Bakar+Edi+Klasik+Sawangan",
    notes: "Jl. Rivaria Dalam No.3, Bedahan"
  },
  {
    id: 14,
    name: "Kaizen Heritage",
    city: "depok",
    area: "limo",
    tags: ["kafe", "24 jam"],
    priceMin: 30000,
    priceMax: 32000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kaizen+Heritage+Meruyung+Depok",
    notes: "Jl. Meruyung Raya No.1. Cocok teman"
  },
  {
    id: 15,
    name: "The Park Sawangan (foodhub)",
    city: "depok",
    area: "bojongsari",
    tags: ["food court", "mal", "steak", "jepang", "keluarga"],
    priceMin: 35000,
    priceMax: 70000,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Park+Sawangan",
    notes: "Jl. Raya Parung-Ciputat No.1, Serua. Cocok keluarga"
  },
    {
    id: 16,
    name: "Saji Resto & Cafe",
    city: "depok",
    area: "cipayung",
    tags: ["jepang", "western", "nusantara", "kopi", "kafe"],
    priceMin: 25000,
    priceMax: 100000,
    mapsUrl: "https://maps.app.goo.gl/xDjd8U7z1XAVnwRy8",
    notes: "Gg. Widuri No.107, Pd. Jaya, Kec. Cipayung, Kota Depok, Jawa Barat 16438. Cocok teman, pasangan, keluarga"
  },
  {
    id: 17,
    name: "RM Kahuma Sunda",
    city: "depok",
    area: "cipayung",
    tags: ["khas sunda", "prasmanan", "sambal gratis", "lalapan gratis", "nila bakar", "ayam goreng", "rooftop"],
    priceMin: 25000,
    priceMax: 75000,
    mapsUrl: "https://maps.app.goo.gl/mGFCKt5m1SwrtDSc7",
    notes: "Jl. Raya Citayam No.19, RT.05/RW.06, Ratu Jaya, Kec. Cipayung, Kota Depok, Jawa Barat 16436. Cocok keluarga"
  },
  {
    id: 18,
    name: "Waroeng Abah",
    city: "depok",
    area: "cipayung",
    tags: ["seblak", "es durian"],
    priceMin: 5000,
    priceMax: 30000,
    mapsUrl: "https://maps.app.goo.gl/JgsoeN3zRuDAUTff7",
    notes: "Jl. Raya Cipayung, Cipayung, Kec. Cipayung, Kota Depok, Jawa Barat 16437. Cocok teman, pasangan"
  },
    {
    id: 19,
    name: "Saung Cobek Medan Sunda",
    city: "depok",
    area: "cipayung",
    tags: ["mie", "snack", "sunda"],
    priceMin: 25000,
    priceMax: 50000,
    mapsUrl: "https://maps.app.goo.gl/QozoPsf3ieks4xwA7",
    notes: "Jl. Bonang Raya No.1, RT.1/RW.3, Cipayung, Kec. Cipayung, Kota Depok, Jawa Barat 16442. Cocok teman, pasangan, keluarga"
  },
  {
    id: 20,
    name: "Pondok Taraso Cipayung",
    city: "depok",
    area: "cipayung",
    tags: ["nasi padang"],
    priceMin: 25000,
    priceMax: 50000,
    mapsUrl: "https://maps.app.goo.gl/zB1xTnr8eHtDJYoY8",
    notes: "Jl. Bonang Raya, Cipayung, Kec. Cipayung, Kota Depok, Jawa Barat 16437. Cocok keluarga"
  },

  {
    id: 21,
    name: "de'Clan Resto & Cafe",
    city: "depok",
    area: "pancoran-mas",
    tags: ["western", "nusantara", "kafe", "pindang patin", "iga bakar"],
    priceMin: 50000, // TODO: cek harga per orang di menu
    priceMax: 125000, // TODO: cek harga per orang di menu
    mapsUrl: "https://maps.google.com/maps?cid=9867623632253132983",
    notes: "Jl. Tole Iskandar No.33. Cocok keluarga, teman",
    address: "Jl. Tole Iskandar No.33, Depok, Pancoran Mas",
    openHours: "Setiap hari, 08.00-22.00",
    facilities: [
      "Kolam ikan",
      "Kandang burung besar",
      "Live music",
      "Musholla",
      "Wi-Fi gratis",
      "Kursi bayi",
      "Toilet ramah kursi roda",
      "Parkir luas",
      "Menu halal"
    ],
    whatsapp: "",
    instagram: "",
    tiktok: "",
    priceCheckedAt: "November 2026",
    photos: []
  }

];